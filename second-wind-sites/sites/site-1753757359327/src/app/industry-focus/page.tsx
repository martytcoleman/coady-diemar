'use client';

import { Globe } from "@/components/magicui/globe";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Leaf, HeartPulse, Factory, Briefcase } from 'lucide-react';
import { useEffect } from 'react';

const industries = [
  {
    title: "Cleantech & Mobility",
    blurb:
      "Energy transition, electrification, and efficiency solutions across power, clean fuels, EV infrastructure, storage, and advanced mobility ecosystems.",
    icon: Leaf,
  },
  {
    title: "Healthcare",
    blurb:
      "Tools, services, and technologies enabling value-based care, life sciences innovation, digital health, and outsourced pharma services.",
    icon: HeartPulse,
  },
  {
    title: "Industrials",
    blurb:
      "Engineered products, automation, environmental services, and tech-enabled industrial platforms driving operational excellence and sustainability.",
    icon: Factory,
  },
  {
    title: "Business Services & Software",
    blurb:
      "Vertical software, data & analytics, tech-enabled services, and information services delivering mission-critical outcomes for enterprises.",
    icon: Briefcase,
  },
];

// Globe configuration (New York headquarters)
const GLOBE_CONFIG = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.2, 0.4] as [number, number, number], // Dark blue base
  markerColor: [212/255, 175/255, 122/255] as [number, number, number], // Brand accent color
  glowColor: [0.1, 0.2, 0.4] as [number, number, number],
  markers: [
    { location: [40.7589, -73.9851] as [number, number], size: 0.15 }, // New York headquarters
  ],
};

export default function IndustryFocusPage() {
  useEffect(() => {
    document.title = 'Industry Focus';
  }, []);

  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">INDUSTRY FOCUS</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            Deep industry knowledge, extensive relationships and substantial transaction experience.
          </p>
        </div>

        {/* Removed global section (firm operates in New York only) */}

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-16">
          We serve clients in select industries and sectors where we possess deep industry knowledge, extensive relationships and substantial transaction experience. Our capabilities and insights reflect years of industry specialization as investment bankers at major Wall Street firms and as operating executives of leading companies in our focus industries. This combination of industry specific transactional experience and operational expertise enhances the quality and actionability of our advice and execution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="relative overflow-hidden rounded-2xl bg-neutral-light p-6 text-left shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <ShineBorder className="rounded-2xl" borderWidth={2} duration={10} shineColor={["#B9975B", "#0A2342", "#B9975B"]} />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white p-3 ring-1 ring-gray-200">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-primary">{industry.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{industry.blurb}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* New York headquarters section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-brand-primary mb-3">HEADQUARTERS</h2>
            <div className="w-20 h-1 bg-brand-accent mb-6"></div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2">New York Office</h3>
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p className="mb-1">270 Lafayette, Suite 204</p>
                  <p className="mb-3">New York, New York 10012</p>
                  <p className="text-base text-gray-600">
                    Strategically located in SoHo, providing unmatched access to founders, management teams, and investors across the Northeast corridor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[420px] flex items-center justify-center">
            <Globe className="max-w-md" config={GLOBE_CONFIG} />
          </div>
        </div>
      </div>
    </div>
  );
}