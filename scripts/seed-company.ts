import { getPayload } from 'payload'
import config from '../src/payload.config.js'

async function seedCompanyData() {
  try {
    console.log('🌱 Starting company data seed...')

    const payload = await getPayload({ config })

    // Check if company data already exists
    const existingCompany = await payload.find({
      collection: 'company',
      limit: 1,
    })

    if (existingCompany.docs.length > 0) {
      console.log('ℹ️  Company data already exists, skipping seed')
      console.log('📄 Existing company:', existingCompany.docs[0].title)
      return existingCompany.docs[0]
    }

    console.log('📝 Creating initial company data...')

    // Create initial company data
    const companyData = await payload.create({
      collection: 'company',
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
                    text: 'We are a creative digital studio dedicated to building beautiful, functional, and user-centered digital experiences. Our team combines strategic thinking with cutting-edge design and development to help businesses grow and connect with their audiences.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Founded with a passion for innovation and excellence, we specialize in web design, development, branding, and digital strategy. Every project is an opportunity to create something meaningful and impactful.',
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
          {
            label: 'Years in Business',
            value: '8+',
          },
          {
            label: 'Projects Completed',
            value: '250+',
          },
          {
            label: 'Happy Clients',
            value: '150+',
          },
          {
            label: 'Team Members',
            value: '12',
          },
        ],
        values: [
          {
            title: 'Innovation',
            description: 'We constantly explore new technologies and approaches to stay ahead of the curve and deliver cutting-edge solutions.',
          },
          {
            title: 'Quality',
            description: 'Excellence is not negotiable. We maintain the highest standards in every aspect of our work, from design to development.',
          },
          {
            title: 'Collaboration',
            description: 'We believe in working closely with our clients as partners, ensuring transparent communication throughout the entire process.',
          },
          {
            title: 'Impact',
            description: 'Every project should make a difference. We focus on creating solutions that drive real business results and user satisfaction.',
          },
        ],
        teamMembers: [
          {
            name: 'Alex Johnson',
            role: 'Creative Director',
            bio: 'With over 10 years of experience in design and strategy, Alex leads our creative vision and ensures every project meets our high standards.',
          },
          {
            name: 'Sarah Chen',
            role: 'Lead Developer',
            bio: 'Sarah brings technical expertise and innovation to every project, specializing in modern web technologies and performance optimization.',
          },
          {
            name: 'Mike Rodriguez',
            role: 'UX Designer',
            bio: 'Mike focuses on creating intuitive and engaging user experiences that drive conversion and user satisfaction.',
          },
        ],
      },
    })

    console.log('✅ Company data seeded successfully!')
    console.log('📊 Created company:', companyData.title)
    console.log('📈 Added', companyData.stats?.length || 0, 'statistics')
    console.log('💎 Added', companyData.values?.length || 0, 'company values')
    console.log('👥 Added', companyData.teamMembers?.length || 0, 'team members')

    return companyData
  } catch (error) {
    console.error('❌ Error seeding company data:', error)
    throw error
  }
}

// Run the seed function if this script is executed directly
if (require.main === module) {
  seedCompanyData()
    .then(() => {
      console.log('🎉 Seed completed successfully!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('💥 Seed failed:', error)
      process.exit(1)
    })
}

export { seedCompanyData }
