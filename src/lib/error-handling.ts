// Secure error handling utility to prevent information leakage
// Removed unused NextResponse import

export interface ApiError {
  message: string
  statusCode: number
  code?: string
}

export class SecureApiError extends Error {
  public statusCode: number
  public code?: string
  public isOperational: boolean

  constructor(message: string, statusCode: number, code?: string) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    this.isOperational = true
    this.name = 'SecureApiError'
  }
}

// Pre-defined safe error messages
export const SAFE_ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'An internal server error occurred. Please try again later.',
  VALIDATION_ERROR: 'The provided data is invalid. Please check your input and try again.',
  AUTHENTICATION_ERROR: 'Authentication failed. Please check your credentials.',
  AUTHORIZATION_ERROR: 'You are not authorized to perform this action.',
  RATE_LIMIT_ERROR: 'Too many requests. Please try again later.',
  SERVICE_UNAVAILABLE: 'Service is temporarily unavailable. Please try again later.',
  INVALID_INPUT: 'Invalid input provided. Please check your data and try again.',
  RESOURCE_NOT_FOUND: 'The requested resource was not found.',
  DUPLICATE_RESOURCE: 'A resource with this information already exists.',
  NETWORK_ERROR: 'Network error occurred. Please check your connection and try again.',
} as const

// Sanitize error messages to prevent information leakage
export function sanitizeErrorMessage(error: unknown): string {
  if (error instanceof SecureApiError) {
    return error.message
  }

  if (error instanceof Error) {
    // Check for known safe error patterns
    const message = error.message.toLowerCase()

    if (message.includes('validation') || message.includes('invalid')) {
      return SAFE_ERROR_MESSAGES.VALIDATION_ERROR
    }

    if (message.includes('unauthorized') || message.includes('auth')) {
      return SAFE_ERROR_MESSAGES.AUTHENTICATION_ERROR
    }

    if (message.includes('not found') || message.includes('missing')) {
      return SAFE_ERROR_MESSAGES.RESOURCE_NOT_FOUND
    }

    if (message.includes('already exists') || message.includes('duplicate')) {
      return SAFE_ERROR_MESSAGES.DUPLICATE_RESOURCE
    }

    if (message.includes('rate limit') || message.includes('too many')) {
      return SAFE_ERROR_MESSAGES.RATE_LIMIT_ERROR
    }

    if (message.includes('network') || message.includes('connection')) {
      return SAFE_ERROR_MESSAGES.NETWORK_ERROR
    }
  }

  // Default safe message for any unhandled errors
  return SAFE_ERROR_MESSAGES.INTERNAL_SERVER_ERROR
}

// Secure logging function that filters sensitive information
export function secureLog(
  level: 'error' | 'warn' | 'info',
  message: string,
  metadata?: Record<string, unknown>,
) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    level,
    message,
    ...(metadata && { metadata: sanitizeLogMetadata(metadata) }),
  }

  // Use appropriate logging method based on level
  switch (level) {
    case 'error':
      console.error(JSON.stringify(logEntry))
      break
    case 'warn':
      console.warn(JSON.stringify(logEntry))
      break
    case 'info':
      console.info(JSON.stringify(logEntry))
      break
  }
}

// Sanitize metadata to remove sensitive information
function sanitizeLogMetadata(metadata: Record<string, unknown>): Record<string, unknown> {
  const sensitiveKeys = [
    'password',
    'token',
    'secret',
    'key',
    'auth',
    'authorization',
    'credential',
    'api_key',
    'apikey',
    'access_token',
    'refresh_token',
    'session',
    'cookie',
  ]

  const sanitized: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(metadata)) {
    const lowerKey = key.toLowerCase()

    if (sensitiveKeys.some((sensitive) => lowerKey.includes(sensitive))) {
      sanitized[key] = '[REDACTED]'
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeLogMetadata(value as Record<string, unknown>)
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

// Create standardized API error response
export function createApiErrorResponse(error: unknown, defaultStatusCode: number = 500): Response {
  const sanitizedMessage = sanitizeErrorMessage(error)
  const statusCode = error instanceof SecureApiError ? error.statusCode : defaultStatusCode
  const errorCode = error instanceof SecureApiError ? error.code : undefined

  // Log the actual error for debugging (with sensitive info removed)
  secureLog('error', 'API Error occurred', {
    message: sanitizedMessage,
    statusCode,
    errorCode,
    originalError: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined,
  })

  return Response.json(
    {
      error: sanitizedMessage,
      statusCode,
      ...(errorCode && { code: errorCode }),
    },
    { status: statusCode },
  )
}

// Wrapper for API route handlers with automatic error handling
export function withSecureErrorHandling<T extends unknown[]>(
  handler: (...args: T) => Promise<Response>,
) {
  return async (...args: T): Promise<Response> => {
    try {
      return await handler(...args)
    } catch (error) {
      return createApiErrorResponse(error)
    }
  }
}

// Validation helpers
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateRequired(value: unknown, fieldName: string): void {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    throw new SecureApiError(`${fieldName} is required`, 400, 'VALIDATION_ERROR')
  }
}

export function validateEmailField(email: string): void {
  validateRequired(email, 'Email')

  if (!validateEmail(email)) {
    throw new SecureApiError('Please enter a valid email address', 400, 'VALIDATION_ERROR')
  }
}

// Rate limiting helper (basic implementation)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000,
): boolean {
  const now = Date.now()
  const key = identifier
  const existing = rateLimitStore.get(key)

  if (!existing || now > existing.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (existing.count >= maxRequests) {
    return false
  }

  existing.count++
  return true
}

export function enforceRateLimit(
  identifier: string,
  maxRequests?: number,
  windowMs?: number,
): void {
  if (!checkRateLimit(identifier, maxRequests, windowMs)) {
    throw new SecureApiError(SAFE_ERROR_MESSAGES.RATE_LIMIT_ERROR, 429, 'RATE_LIMIT_EXCEEDED')
  }
}
