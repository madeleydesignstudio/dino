// Startup validation to ensure environment variables are checked at application startup
import { validateEnvironment } from './env-validation'

// Flag to track if validation has been performed
let validationPerformed = false

export function performStartupValidation(): void {
  // Only perform validation once
  if (validationPerformed) {
    return
  }

  try {
    // Validate environment variables
    const env = validateEnvironment()

    console.log('✅ Environment validation passed')
    console.log('🔧 Application configuration:')
    console.log(`   - Environment: ${env.NODE_ENV || 'development'}`)
    console.log(`   - Database: ${env.DATABASE_URI.includes('localhost') ? 'Local' : 'Remote'}`)
    console.log(`   - Email Service: ${env.RESEND_API_KEY ? 'Configured' : 'Not configured'}`)
    console.log(`   - Newsletter Service: ${env.LOOPS_API_KEY ? 'Configured' : 'Not configured'}`)
    console.log(`   - Newsletter Audience: ${env.RESEND_NEWSLETTER_AUDIENCE_ID ? 'Configured' : 'Auto-create'}`)

    // Mark validation as complete
    validationPerformed = true

  } catch (error) {
    console.error('❌ Environment validation failed:')
    console.error(error instanceof Error ? error.message : 'Unknown error')
    console.error('\n💡 Please check your .env file and ensure all required variables are set.')
    console.error('   See .env.example for the required format.\n')

    // Exit the process in production, but allow development to continue with warnings
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    } else {
      console.warn('⚠️  Development mode: Continuing with invalid environment (this may cause errors)')
    }
  }
}

// Auto-run validation when this module is imported
// This ensures validation happens as early as possible
performStartupValidation()
