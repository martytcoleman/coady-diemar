import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { ShineBorder } from '@/components/magicui/shine-border'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
};

const services = [
  {
    title: "Mergers, Acquisitions and Divestitures",
    description: "We initiate, advise on and manage all phases of exclusive sales, mergers, acquisitions, divestitures, going-private and corporate development transactions, including:",
    points: [
      "Developing and presenting targeted strategic and financial buyers",
      "Providing proprietary acquisition ideas and identifying and valuing targets",
      "Negotiating, marketing, and structuring transactions",
      "Advising Boards of Directors or Special Committees"
    ],
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=800&h=400&fit=crop&crop=center"
  },
  {
    title: "Capital Raising",
    description: "We have long-standing relationships with leading, global private investors in equity, debt and hybrid securities across our targeted industry sectors. We assist companies and management teams seeking capital for internal growth, acquisitions, buyouts or recapitalizations in:",
    points: [
      "Determining the optimal size, form and timing of a financing",
      "Creating the company's or management's disclosure and marketing materials",
      "Targeting and approaching value-added, long-term investors",
      "Negotiating and concluding financing terms and conditions"
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop&crop=center"
  },
  {
    title: "Strategic Advisory Services",
    description: "We leverage our substantial industry, operating and financial knowledge to assist companies facing critical challenges. Such assistance includes:",
    points: [
      "Strategic positioning",
      "Development of growth strategy",
      "Assessment of industry and competitive positions",
      "Establishing strategic joint ventures",
      "Introductions to senior industry participants",
      "Due diligence of acquisition and investing opportunities"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&crop=center"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative bg-white">
      {/* Bespoke Hero */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <AnimatedGridPattern className={cn('text-brand-primary/10', '[mask-image:linear-gradient(to_bottom,white,transparent)]')} />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mx-auto inline-flex">
            <h1 className="relative z-10 text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">SERVICES</h1>
            <ShineBorder className="rounded-2xl" shineColor={["#0ea5e9", "#06b6d4", "#22c55e"]} />
          </div>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-brand-secondary">
            Bespoke M&A, capital solutions, and strategic advisory for ambitious leaders.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-brand-secondary">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Novel Services Grid */}
      <section className="relative py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={cn(
                  'relative overflow-hidden rounded-2xl bg-neutral-light p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl'
                )}
              >
                <ShineBorder className="rounded-2xl" borderWidth={2} duration={10 + idx * 2} shineColor={["#B9975B", "#0A2342", "#B9975B"]} />
                <div className="relative z-10">
                  <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-primary">{service.title}</h2>
                  <p className="mt-3 text-sm text-gray-700">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map(point => (
                      <li key={point} className="flex items-start">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                        <span className="ml-3 text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="text-2xl font-bold text-brand-primary">Our Process</h3>
            <p className="mt-2 text-sm text-neutral-dark/70">Designed for certainty of execution and senior attention throughout.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { k: '01', t: 'Discovery', d: 'Understand objectives, constraints, and stakeholders.' },
              { k: '02', t: 'Positioning', d: 'Craft narrative, materials, and outreach strategy.' },
              { k: '03', t: 'Market Access', d: 'Engage senior decision-makers and evaluate options.' },
              { k: '04', t: 'Close', d: 'Negotiate terms and manage to close with discipline.' },
            ].map(step => (
              <div key={step.k} className="relative rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
                <div className="text-sm font-semibold tracking-widest text-neutral-dark/50">{step.k}</div>
                <div className="mt-1 text-lg font-semibold text-brand-primary">{step.t}</div>
                <div className="mt-2 text-sm text-neutral-dark/70">{step.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-brand-secondary">
              Discuss a mandate <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}