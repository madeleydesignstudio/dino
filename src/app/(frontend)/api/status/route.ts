import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    // Test database connection by counting collections
    const usersCount = await payload.count({
      collection: 'users' as any,
    })

    const mediaCount = await payload.count({
      collection: 'media' as any,
    })

    const companyCount = await payload.count({
      collection: 'company' as any,
    })

    return NextResponse.json({
      success: true,
      message: 'Payload CMS is running successfully',
      collections: {
        users: usersCount.totalDocs,
        media: mediaCount.totalDocs,
        company: companyCount.totalDocs,
      },
      timestamp: new Date().toISOString(),
      version: 'Payload 3.0',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Payload CMS connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
