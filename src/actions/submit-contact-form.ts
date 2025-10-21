'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function submitContactForm(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!email || !message) {
      return { success: false, error: 'Email and message are required' }
    }

    const payload = await getPayload({ config })
    
    // Create submission - hooks will automatically send emails
    await payload.create({
      collection: 'contact-submissions',
      data: {
        email,
        message,
        status: 'new',
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Failed to send message' }
  }
}

