import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST() {
  try {
    const payload = await getPayload({ config })

    // Check if company data already exists
    const existingCompany = await payload.find({
      collection: 'company' as any,
      limit: 1,
    })

    if (existingCompany.docs.length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Company data already exists',
        data: existingCompany.docs[0],
      })
    }

    // Create simple company data
    const companyData = await payload.create({
      collection: 'company' as any,
      data: {
        title: 'About Dino Studio',
        subtitle: 'Crafting Digital Experiences That Matter',
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'We are a creative digital studio dedicated to building beautiful, functional, and user-centered digital experiences.',
                  },
                ],
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            version: 1,
          },
        },
        stats: [
          { label: 'Years in Business', value: '8+' },
          { label: 'Projects Completed', value: '250+' },
          { label: 'Happy Clients', value: '150+' },
          { label: 'Team Members', value: '12' },
        ],
        values: [
          {
            title: 'Innovation',
            description:
              'We constantly explore new technologies and approaches to stay ahead of the curve.',
          },
          {
            title: 'Quality',
            description:
              'Excellence is not negotiable. We maintain the highest standards in every aspect of our work.',
          },
          {
            title: 'Collaboration',
            description: 'We believe in working closely with our clients as partners.',
          },
        ],
        teamMembers: [
          {
            name: 'Alex Johnson',
            role: 'Creative Director',
            bio: 'With over 10 years of experience in design and strategy.',
          },
          {
            name: 'Sarah Chen',
            role: 'Lead Developer',
            bio: 'Sarah brings technical expertise and innovation to every project.',
          },
        ],
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Company data seeded successfully',
      data: companyData,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to seed company data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Seed company data',
    instructions: 'Send a POST request to this endpoint to create initial company data',
  })
}
