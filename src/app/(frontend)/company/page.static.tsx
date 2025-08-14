import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Company() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Dino Studio</h1>
          <p className="text-xl text-neutral-600 mb-8">Crafting Digital Experiences That Matter</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center">
            <div className="text-lg leading-relaxed text-neutral-700 space-y-6">
              <p>
                We are a creative digital studio dedicated to building beautiful, functional, and
                user-centered digital experiences. Our team combines strategic thinking with
                cutting-edge design and development to help businesses grow and connect with their
                audiences.
              </p>
              <p>
                Founded with a passion for innovation and excellence, we specialize in web design,
                development, branding, and digital strategy. Every project is an opportunity to
                create something meaningful and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-neutral-600">
              Numbers that showcase our journey and achievements
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">8+</div>
                <div className="text-neutral-600">Years in Business</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">250+</div>
                <div className="text-neutral-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">150+</div>
                <div className="text-neutral-600">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">12</div>
                <div className="text-neutral-600">Team Members</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values Section */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-neutral-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-neutral-600">
                  We constantly explore new technologies and approaches to stay ahead of the curve
                  and deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Quality</h3>
                <p className="text-neutral-600">
                  Excellence is not negotiable. We maintain the highest standards in every aspect of
                  our work, from design to development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Collaboration</h3>
                <p className="text-neutral-600">
                  We believe in working closely with our clients as partners, ensuring transparent
                  communication throughout the entire process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Impact</h3>
                <p className="text-neutral-600">
                  Every project should make a difference. We focus on creating solutions that drive
                  real business results and user satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* CMS Integration Notice */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-4">🚀 CMS Integration Ready!</h3>
            <p className="text-neutral-600 mb-6">
              This page is now configured with Payload CMS. Once your environment is set up, all
              this content will be editable through the admin panel.
            </p>
            <div className="text-sm text-neutral-500 space-y-2">
              <p>
                • Company collection created with title, description, stats, values, and team fields
              </p>
              <p>• Page ready to fetch dynamic content from CMS</p>
              <p>
                • Admin interface available at{' '}
                <code className="bg-white px-2 py-1 rounded">/admin</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
