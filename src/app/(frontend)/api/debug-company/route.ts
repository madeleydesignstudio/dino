import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const payload = await getPayload({ config })

    // Test basic connection first
    const collections = await payload.find({
      collection: 'company' as any,
      limit: 1,
    })

    return NextResponse.json({
      success: true,
      message: 'Company collection accessible',
      existingCount: collections.totalDocs,
      collections: collections.docs,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to access company collection',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}

export async function POST() {
  try {
    const payload = await getPayload({ config })

    // Try to create minimal company data
    const result = await payload.create({
      collection: 'company' as any,
      data: {
        title: 'Test Company',
        subtitle: 'Test Subtitle',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Company created successfully',
      data: result,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create company',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}

export async function DELETE() {
  try {
    const payload = await getPayload({ config })

    // Get all company docs
    const companies = await payload.find({
      collection: 'company' as any,
    })

    // Delete all company docs
    for (const company of companies.docs) {
      await payload.delete({
        collection: 'company' as any,
        id: company.id,
      })
    }

    return NextResponse.json({
      success: true,
      message: `Deleted ${companies.docs.length} company records`,
      deletedCount: companies.docs.length,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete company records',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
