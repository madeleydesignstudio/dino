# Security Documentation

This document outlines security practices, API key management, and monitoring procedures for the Dino project.

## Table of Contents

1. [API Key Management](#api-key-management)
2. [Environment Variables](#environment-variables)
3. [Security Best Practices](#security-best-practices)
4. [API Key Rotation](#api-key-rotation)
5. [Monitoring and Alerts](#monitoring-and-alerts)
6. [Incident Response](#incident-response)
7. [Development vs Production](#development-vs-production)

## API Key Management

### Current API Keys

The application uses the following API keys:

- **RESEND_API_KEY**: Email sending service
- **LOOPS_API_KEY**: Newsletter and marketing automation
- **PAYLOAD_SECRET**: CMS authentication and encryption
- **DATABASE_URI**: PostgreSQL database connection string
- **RESEND_NEWSLETTER_AUDIENCE_ID**: Newsletter audience identifier

### API Key Security Requirements

1. **Format Validation**: All API keys are validated for proper format at startup
2. **Length Requirements**: Keys must meet minimum length requirements
3. **Environment Isolation**: Different keys for different environments
4. **Access Control**: Keys should only be accessible to authorized personnel

## Environment Variables

### Required Variables

```bash
# Email Services
RESEND_API_KEY=re_your_resend_api_key_here
LOOPS_API_KEY=your_loops_api_key_here
RESEND_NEWSLETTER_AUDIENCE_ID=your_audience_id_here

# Database
DATABASE_URI=postgresql://user:password@host:port/database

# Payload CMS
PAYLOAD_SECRET=your_32_character_minimum_secret_key
```

### Environment File Security

- ✅ `.env` files are in `.gitignore`
- ✅ `.env.example` provides template without sensitive values
- ✅ Environment validation runs at startup
- ✅ Docker containers use `env_file` for environment variables

## Security Best Practices

### 1. Error Handling

- All API routes use secure error handling
- Sensitive information is never exposed in error messages
- Errors are logged securely with sensitive data redacted
- Generic error messages are returned to clients

### 2. Rate Limiting

Current rate limits:
- Newsletter subscription: 3 requests per 5 minutes per email
- Project requests: 2 requests per hour per email  
- Quote requests: 5 requests per hour per email

### 3. Input Validation

- All user inputs are validated and sanitized
- Email addresses are validated with regex
- Required fields are checked
- Numeric values are range-checked
- String inputs are sanitized to prevent XSS

### 4. Logging

- All API operations are logged securely
- Sensitive data is automatically redacted from logs
- Logs include timestamps, request IDs, and relevant metadata
- Error logs include stack traces for debugging

## API Key Rotation

### Rotation Schedule

- **Production**: Every 90 days
- **Development**: Every 180 days
- **Emergency**: Immediately upon suspected compromise

### Rotation Process

#### 1. Resend API Key

1. Log into [Resend Dashboard](https://resend.com/api-keys)
2. Generate a new API key
3. Test the new key in staging environment
4. Update production environment variable
5. Verify email sending functionality
6. Delete old API key after 24 hours

#### 2. Loops API Key

1. Log into [Loops Dashboard](https://loops.so/settings/api)
2. Generate a new API key
3. Test newsletter functionality in staging
4. Update production environment variable
5. Verify newsletter operations
6. Revoke old API key

#### 3. Payload Secret

1. Generate a new 32+ character secret: `openssl rand -base64 32`
2. Update staging environment first
3. Test CMS functionality
4. Update production environment
5. Restart application services
6. Verify admin panel access

#### 4. Database URI

1. Create new database user with same permissions
2. Update connection string in staging
3. Test all database operations
4. Update production environment
5. Drop old database user after verification

### Rotation Checklist

- [ ] Backup current environment variables
- [ ] Generate new keys/secrets
- [ ] Test in staging environment
- [ ] Update production environment
- [ ] Verify all functionality
- [ ] Monitor for errors
- [ ] Revoke old keys
- [ ] Document rotation in security log

## Monitoring and Alerts

### Key Metrics to Monitor

1. **API Usage**
   - Request volume per API key
   - Error rates by service
   - Response times

2. **Security Events**
   - Failed authentication attempts
   - Rate limit violations
   - Unusual request patterns

3. **Service Health**
   - Email delivery success rates
   - Database connection health
   - Newsletter subscription rates

### Recommended Alerts

1. **High Priority**
   - API key authentication failures
   - Database connection failures
   - Email service outages

2. **Medium Priority**
   - High error rates (>5%)
   - Rate limit violations
   - Unusual traffic patterns

3. **Low Priority**
   - API key approaching expiration
   - Performance degradation
   - Storage quota warnings

### Alert Configuration

```bash
# Example alert thresholds
API_ERROR_RATE_THRESHOLD=5%
RATE_LIMIT_VIOLATION_THRESHOLD=10/hour
DATABASE_CONNECTION_TIMEOUT=30s
EMAIL_DELIVERY_FAILURE_THRESHOLD=10%
```

## Incident Response

### Security Incident Classification

1. **Critical**: API key compromise, data breach
2. **High**: Service outage, authentication bypass
3. **Medium**: Performance degradation, rate limiting
4. **Low**: Configuration warnings, monitoring issues

### Response Procedures

#### API Key Compromise

1. **Immediate Actions** (0-15 minutes)
   - Revoke compromised API key
   - Rotate to new API key
   - Monitor for unauthorized usage

2. **Short-term Actions** (15-60 minutes)
   - Analyze access logs
   - Check for data exfiltration
   - Notify relevant stakeholders

3. **Long-term Actions** (1-24 hours)
   - Review security practices
   - Update monitoring rules
   - Document incident and lessons learned

#### Service Outage

1. **Assessment** (0-5 minutes)
   - Check service health dashboards
   - Verify API key validity
   - Test database connectivity

2. **Response** (5-30 minutes)
   - Implement fallback procedures
   - Notify users if necessary
   - Escalate to service providers

3. **Recovery** (30+ minutes)
   - Restore normal operations
   - Verify functionality
   - Post-incident review

## Development vs Production

### Development Environment

- Use separate API keys for all services
- Less restrictive rate limiting
- Detailed error messages for debugging
- Regular key rotation not required

### Production Environment

- Strict API key validation
- Comprehensive rate limiting
- Sanitized error messages
- Automated monitoring and alerting
- Regular security audits

### Staging Environment

- Production-like security settings
- Separate API keys from production
- Full error logging enabled
- Regular security testing

## Security Contacts

- **Security Team**: security@madeleydesignstudio.com
- **Development Team**: daniel@madeleydesignstudio.com
- **Emergency Contact**: +1-XXX-XXX-XXXX

## References

- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [Resend Security Best Practices](https://resend.com/docs/security)
- [Loops API Documentation](https://loops.so/docs/api)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)

## Changelog

- **2024-01-XX**: Initial security documentation
- **2024-01-XX**: Added API key rotation procedures
- **2024-01-XX**: Updated monitoring and alerting guidelines

---

**Last Updated**: January 2024  
**Next Review**: April 2024