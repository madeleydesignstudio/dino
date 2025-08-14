import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { seedCompanyData } from '@/lib/seed-company'

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })

    // Check if we should seed data
    const { searchParams } = new URL(request.url)
    const shouldSeed = searchParams.get('seed') === 'true'

    if (shouldSeed) {
      const seededData = await seedCompanyData()
      return NextResponse.json({
        success: true,
        message: 'Company data seeded successfully',
        data: seededData,
      })
    }

    // Fetch existing company data
    const result = await payload.find({
      collection: 'company',
      limit: 1,
    })

    if (result.docs.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No company data found. Add ?seed=true to create initial data.',
        data: null,
      })
    }

    const response = NextResponse.json({
      success: true,
      data: result.docs[0],
    })

    // Prevent caching to ensure fresh data
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')

    return response
  } catch (error) {
    console.error('Error in company API route:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    // Check if company data already exists
    const existingCompany = await payload.find({
      collection: 'company',
      limit: 1,
    })

    let result
    if (existingCompany.docs.length > 0) {
      // Update existing company data
      result = await payload.update({
        collection: 'company',
        id: existingCompany.docs[0].id,
        data: body,
      })
    } else {
      // Create new company data
      result = await payload.create({
        collection: 'company',
        data: body,
      })
    }

    const response = NextResponse.json({
      success: true,
      message: 'Company data saved successfully',
      data: result,
    })

    // Prevent caching to ensure fresh data
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')

    return response
  } catch (error) {
    console.error('Error saving company data:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to save company data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
