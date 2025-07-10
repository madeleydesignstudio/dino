import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting storage (in production, use Redis or similar)
interface RateLimitEntry {
  count: number
  resetTime: number
  lastRequest: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Rate limiting configuration
const RATE_LIMITS = {
  // API routes
  '/api/newsletter/subscribe': { maxRequests: 3, windowMs: 300000 }, // 3 requests per 5 minutes
  '/api/send-project-request': { maxRequests: 2, windowMs: 3600000 }, // 2 requests per hour
  '/api/send-quote-request': { maxRequests: 5, windowMs: 3600000 }, // 5 requests per hour
  '/api/send': { maxRequests: 10, windowMs: 3600000 }, // 10 requests per hour (test endpoint)

  // General API rate limiting
  '/api/': { maxRequests: 100, windowMs: 3600000 }, // 100 requests per hour for all other API routes
} as const

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://openpanel.dev; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  if (realIP) {
    return realIP
  }

  return 'unknown'
}

// Clean up expired entries
function cleanupExpiredEntries(): void {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}

// Check rate limit for a specific key
function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number,
): {
  allowed: boolean
  limit: number
  remaining: number
  resetTime: number
} {
  const now = Date.now()
  const existing = rateLimitStore.get(key)

  // Clean up expired entries periodically
  if (Math.random() < 0.1) {
    cleanupExpiredEntries()
  }

  if (!existing || now > existing.resetTime) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + windowMs,
      lastRequest: now,
    }
    rateLimitStore.set(key, newEntry)

    return {
      allowed: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      resetTime: newEntry.resetTime,
    }
  }

  // Check if request is allowed
  if (existing.count >= maxRequests) {
    return {
      allowed: false,
      limit: maxRequests,
      remaining: 0,
      resetTime: existing.resetTime,
    }
  }

  // Increment count
  existing.count++
  existing.lastRequest = now

  return {
    allowed: true,
    limit: maxRequests,
    remaining: maxRequests - existing.count,
    resetTime: existing.resetTime,
  }
}

// Get rate limit configuration for a path
function getRateLimitConfig(pathname: string): { maxRequests: number; windowMs: number } | null {
  // Check for exact match first
  for (const [path, config] of Object.entries(RATE_LIMITS)) {
    if (pathname === path || pathname.startsWith(path)) {
      return config
    }
  }

  return null
}

// Detect potential security threats
function detectSecurityThreats(request: NextRequest): string[] {
  const threats: string[] = []
  const url = request.url.toLowerCase()
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''

  // Common attack patterns
  const maliciousPatterns = [
    'script',
    'javascript:',
    'vbscript:',
    'onload=',
    'onerror=',
    'eval(',
    'expression(',
    'url(',
    'import(',
    '<iframe',
    '<object',
    '<embed',
    '<link',
    '<meta',
    'data:text/html',
    'data:text/javascript',
  ]

  // Check for XSS attempts
  for (const pattern of maliciousPatterns) {
    if (url.includes(pattern)) {
      threats.push('potential_xss')
      break
    }
  }

  // Check for SQL injection attempts
  const sqlPatterns = ['union select', 'drop table', 'insert into', 'delete from', 'update set']
  for (const pattern of sqlPatterns) {
    if (url.includes(pattern)) {
      threats.push('potential_sql_injection')
      break
    }
  }

  // Check for path traversal attempts
  if (url.includes('../') || url.includes('..%2f') || url.includes('..%5c')) {
    threats.push('path_traversal')
  }

  // Check for suspicious user agents
  const suspiciousUserAgents = ['curl', 'wget', 'python', 'bot', 'crawler', 'spider']
  const isSuspiciousUA = suspiciousUserAgents.some((ua) => userAgent.includes(ua))
  if (isSuspiciousUA && !userAgent.includes('googlebot') && !userAgent.includes('bingbot')) {
    threats.push('suspicious_user_agent')
  }

  return threats
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const clientIP = getClientIP(request)
  const userAgent = request.headers.get('user-agent') || 'unknown'

  // Security threat detection
  const threats = detectSecurityThreats(request)
  if (threats.length > 0) {
    console.warn('Security threat detected:', {
      ip: clientIP,
      pathname,
      threats,
      userAgent,
      timestamp: new Date().toISOString(),
    })

    // Block obvious attacks
    if (threats.includes('potential_xss') || threats.includes('potential_sql_injection')) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api/')) {
    const rateLimitConfig = getRateLimitConfig(pathname)

    if (rateLimitConfig) {
      const rateLimitKey = `${clientIP}:${pathname}`
      const rateLimit = checkRateLimit(
        rateLimitKey,
        rateLimitConfig.maxRequests,
        rateLimitConfig.windowMs,
      )

      // Create response with rate limit headers
      const response = rateLimit.allowed
        ? NextResponse.next()
        : new NextResponse('Too Many Requests', {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
            },
          })

      // Add rate limit headers
      response.headers.set('X-RateLimit-Limit', rateLimit.limit.toString())
      response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString())
      response.headers.set('X-RateLimit-Reset', Math.ceil(rateLimit.resetTime / 1000).toString())

      // Log rate limit violations
      if (!rateLimit.allowed) {
        console.warn('Rate limit exceeded:', {
          ip: clientIP,
          pathname,
          limit: rateLimit.limit,
          resetTime: new Date(rateLimit.resetTime).toISOString(),
          userAgent,
        })

        // Return JSON error response for rate limiting
        return new NextResponse(
          JSON.stringify({
            error: 'Too many requests. Please try again later.',
            retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
          }),
          {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
              ...Object.fromEntries(response.headers.entries()),
            },
          },
        )
      }

      return response
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  // Add security headers
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add custom headers for monitoring
  response.headers.set('X-Request-ID', crypto.randomUUID())
  response.headers.set('X-Timestamp', new Date().toISOString())

  return response
}

// Configure matcher to run middleware on specific paths
export const config = {
  matcher: [
    // API routes
    '/api/:path*',
    // Admin routes
    '/admin/:path*',
    // Static files (exclude images, fonts, etc.)
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
