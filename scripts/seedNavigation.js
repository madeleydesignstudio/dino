const { getPayload } = require('payload');

// Import the config - adjust path if needed
const config = require('../dist/payload.config.js').default;

const seedData = async () => {
  try {
    console.log('Starting navigation seed...');

    const payload = await getPayload({ config });

    // Sample Resources Data
    const resources = [
      {
        title: "Opensource",
        slug: "opensource",
        description: "Open source projects and contributions from our team",
        category: "opensource",
        isNav: true,
        isPublished: true,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Explore our open source contributions and community projects.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "UI",
        slug: "ui",
        description: "UI components and design system resources",
        category: "ui",
        isNav: true,
        isPublished: true,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Reusable UI components and design system documentation.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "API",
        slug: "api",
        description: "API documentation and integration guides",
        category: "api",
        isNav: true,
        isPublished: true,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Comprehensive API documentation and integration examples.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Compare",
        slug: "compare",
        description: "Technology comparisons and tool reviews",
        category: "compare",
        isNav: true,
        isPublished: true,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "In-depth comparisons of tools, frameworks, and technologies.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Blog",
        slug: "blog",
        description: "Latest articles and insights from our team",
        category: "blog",
        isNav: true,
        isPublished: true,
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Stay updated with our latest blog posts and industry insights.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      }
    ];

    // Sample Services Data
    const services = [
      {
        title: "Website Design",
        slug: "website-design",
        description: "Custom website design tailored to your brand",
        category: "design",
        isNav: true,
        isFeatured: true,
        isPublished: true,
        price: {
          startingPrice: 2500,
          currency: "usd",
          priceType: "project"
        },
        features: [
          { feature: "Custom UI/UX Design" },
          { feature: "Responsive Design" },
          { feature: "Brand Integration" },
          { feature: "Design System Creation" }
        ],
        deliverables: [
          { deliverable: "Figma Design Files" },
          { deliverable: "Style Guide" },
          { deliverable: "Asset Exports" }
        ],
        timeline: {
          duration: 2,
          timeUnit: "weeks"
        },
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "We create beautiful, user-centered website designs that reflect your brand and engage your audience.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Website Development",
        slug: "website-development",
        description: "Full-stack web development solutions",
        category: "development",
        isNav: true,
        isFeatured: true,
        isPublished: true,
        price: {
          startingPrice: 5000,
          currency: "usd",
          priceType: "project"
        },
        features: [
          { feature: "Modern Tech Stack" },
          { feature: "Performance Optimization" },
          { feature: "SEO Optimization" },
          { feature: "CMS Integration" }
        ],
        deliverables: [
          { deliverable: "Production-Ready Website" },
          { deliverable: "Source Code" },
          { deliverable: "Documentation" }
        ],
        timeline: {
          duration: 4,
          timeUnit: "weeks"
        },
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "From concept to deployment, we build fast, secure, and scalable websites using cutting-edge technologies.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Creative Design",
        slug: "creative-design",
        description: "Branding and creative design services",
        category: "design",
        isNav: true,
        isFeatured: false,
        isPublished: true,
        price: {
          startingPrice: 1500,
          currency: "usd",
          priceType: "project"
        },
        features: [
          { feature: "Logo Design" },
          { feature: "Brand Identity" },
          { feature: "Marketing Materials" },
          { feature: "Print Design" }
        ],
        deliverables: [
          { deliverable: "Logo Files" },
          { deliverable: "Brand Guidelines" },
          { deliverable: "Marketing Assets" }
        ],
        timeline: {
          duration: 3,
          timeUnit: "weeks"
        },
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Build a strong visual identity with our comprehensive creative design services.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Agentic AI",
        slug: "agentic-ai",
        description: "AI-powered automation and intelligent systems",
        category: "technology",
        isNav: true,
        isFeatured: true,
        isPublished: true,
        price: {
          startingPrice: 10000,
          currency: "usd",
          priceType: "project"
        },
        features: [
          { feature: "AI Agent Development" },
          { feature: "Process Automation" },
          { feature: "Machine Learning Integration" },
          { feature: "Custom AI Solutions" }
        ],
        deliverables: [
          { deliverable: "AI Agent System" },
          { deliverable: "API Documentation" },
          { deliverable: "Training Materials" }
        ],
        timeline: {
          duration: 8,
          timeUnit: "weeks"
        },
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Harness the power of AI with custom intelligent agents and automation solutions.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      },
      {
        title: "Product Design",
        slug: "product-design",
        description: "End-to-end product design and user experience",
        category: "design",
        isNav: true,
        isFeatured: false,
        isPublished: true,
        price: {
          startingPrice: 7500,
          currency: "usd",
          priceType: "project"
        },
        features: [
          { feature: "User Research" },
          { feature: "Wireframing & Prototyping" },
          { feature: "User Testing" },
          { feature: "Design Handoff" }
        ],
        deliverables: [
          { deliverable: "User Research Report" },
          { deliverable: "Interactive Prototypes" },
          { deliverable: "Design System" }
        ],
        timeline: {
          duration: 6,
          timeUnit: "weeks"
        },
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: "Design products that users love with our comprehensive product design process.",
                    type: "text",
                    version: 1
                  }
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
              }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
          }
        }
      }
    ];

    // Create Resources
    console.log('Creating resources...');
    for (const resource of resources) {
      try {
        await payload.create({
          collection: 'resources',
          data: resource,
        });
        console.log(`✅ Created resource: ${resource.title}`);
      } catch (error) {
        console.log(`❌ Failed to create resource ${resource.title}:`, error.message);
      }
    }

    // Create Services
    console.log('Creating services...');
    for (const service of services) {
      try {
        await payload.create({
          collection: 'services',
          data: service,
        });
        console.log(`✅ Created service: ${service.title}`);
      } catch (error) {
        console.log(`❌ Failed to create service ${service.title}:`, error.message);
      }
    }

    console.log('🎉 Navigation seed completed!');
    console.log('\nNext steps:');
    console.log('1. Visit /admin to see the new Resources and Services');
    console.log('2. Edit the isNav field to control navigation visibility');
    console.log('3. Your header navigation should now show the dynamic links!');

  } catch (error) {
    console.error('❌ Seed failed:', error);
  } finally {
    process.exit(0);
  }
};

seedData();
