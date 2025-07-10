// Environment validation utility
interface EnvironmentConfig {
  RESEND_API_KEY: string
  LOOPS_API_KEY: string
  PAYLOAD_SECRET: string
  DATABASE_URI: string
  RESEND_NEWSLETTER_AUDIENCE_ID?: string
  NODE_ENV?: string
}

const requiredEnvVars: (keyof EnvironmentConfig)[] = [
  'RESEND_API_KEY',
  'LOOPS_API_KEY',
  'PAYLOAD_SECRET',
  'DATABASE_URI',
]

export function validateEnvironment(): EnvironmentConfig {
  const env = process.env as Record<string, string | undefined>

  // Skip validation during build process
  if (
    process.env.NODE_ENV === 'development' &&
    process.env.NEXT_PHASE === 'phase-production-build'
  ) {
    console.log('⚠️  Skipping environment validation during build process')
    return {
      RESEND_API_KEY: env.RESEND_API_KEY || 'build-placeholder',
      LOOPS_API_KEY: env.LOOPS_API_KEY || 'build-placeholder',
      PAYLOAD_SECRET: env.PAYLOAD_SECRET || 'build-placeholder',
      DATABASE_URI:
        env.DATABASE_URI || 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
      RESEND_NEWSLETTER_AUDIENCE_ID: env.RESEND_NEWSLETTER_AUDIENCE_ID,
      NODE_ENV: env.NODE_ENV,
    }
  }

  // Check for missing required variables
  const missing = requiredEnvVars.filter((envVar) => !env[envVar])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }

  // Validate API key formats
  if (env.RESEND_API_KEY && !env.RESEND_API_KEY.startsWith('re_')) {
    throw new Error('Invalid RESEND_API_KEY format. Must start with "re_"')
  }

  // Validate LOOPS_API_KEY format (typically starts with a specific pattern)
  if (env.LOOPS_API_KEY && env.LOOPS_API_KEY.length < 10) {
    throw new Error('Invalid LOOPS_API_KEY format. Key appears too short')
  }

  // Validate PAYLOAD_SECRET length (should be at least 32 characters)
  if (env.PAYLOAD_SECRET && env.PAYLOAD_SECRET.length < 20) {
    throw new Error('PAYLOAD_SECRET must be at least 32 characters long')
  }

  // Validate DATABASE_URI format
  if (env.DATABASE_URI && !env.DATABASE_URI.startsWith('postgresql://')) {
    throw new Error('DATABASE_URI must be a valid PostgreSQL connection string')
  }

  // Validate NODE_ENV if provided
  if (env.NODE_ENV && !['development', 'production', 'test'].includes(env.NODE_ENV)) {
    console.warn(`Warning: NODE_ENV "${env.NODE_ENV}" is not a standard environment`)
  }

  return {
    RESEND_API_KEY: env.RESEND_API_KEY!,
    LOOPS_API_KEY: env.LOOPS_API_KEY!,
    PAYLOAD_SECRET: env.PAYLOAD_SECRET!,
    DATABASE_URI: env.DATABASE_URI!,
    RESEND_NEWSLETTER_AUDIENCE_ID: env.RESEND_NEWSLETTER_AUDIENCE_ID,
    NODE_ENV: env.NODE_ENV,
  }
}

export function getValidatedEnv(): EnvironmentConfig {
  try {
    return validateEnvironment()
  } catch (error) {
    // During build, don't exit the process, just log and return placeholders
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn('Environment validation failed during build, using placeholders:', error)
      return {
        RESEND_API_KEY: 'build-placeholder',
        LOOPS_API_KEY: 'build-placeholder',
        PAYLOAD_SECRET: 'build-placeholder',
        DATABASE_URI: 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
        RESEND_NEWSLETTER_AUDIENCE_ID: undefined,
        NODE_ENV: process.env.NODE_ENV,
      }
    }
    console.error('Environment validation failed:', error)
    process.exit(1)
  }
}
