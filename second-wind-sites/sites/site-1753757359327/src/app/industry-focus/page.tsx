'use client';

import { Globe } from "@/components/magicui/globe";
import { useEffect } from 'react';

const industries = [
  "Cleantech & Mobility",
  "Healthcare",
  "Industrials",
  "Business Services & Software"
];

// Globe configuration for financial markets
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
    // Major Financial Centers
    { location: [40.7589, -73.9851] as [number, number], size: 0.08 }, // New York
    { location: [51.5074, -0.1278] as [number, number], size: 0.08 },   // London
    { location: [35.6762, 139.6503] as [number, number], size: 0.07 },  // Tokyo
    { location: [22.3193, 114.1694] as [number, number], size: 0.06 },  // Hong Kong
    { location: [1.3521, 103.8198] as [number, number], size: 0.06 },   // Singapore
    { location: [50.1109, 8.6821] as [number, number], size: 0.05 },    // Frankfurt
    { location: [47.3769, 8.5417] as [number, number], size: 0.05 },    // Zurich
    { location: [43.6532, -79.3832] as [number, number], size: 0.04 },  // Toronto
    { location: [37.7749, -122.4194] as [number, number], size: 0.04 }, // San Francisco
    { location: [-33.8688, 151.2093] as [number, number], size: 0.04 }, // Sydney
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

        {/* Global Reach Section with Globe */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">GLOBAL REACH</h2>
              <div className="w-20 h-1 bg-brand-accent mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our extensive network spans major financial centers worldwide, enabling us to deliver comprehensive M&A advisory services across international markets. We leverage deep relationships with global institutional investors, strategic acquirers, and industry leaders.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-brand-secondary">
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">North America</h4>
                  <ul className="space-y-1">
                    <li>• New York</li>
                    <li>• San Francisco</li>
                    <li>• Toronto</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">Europe</h4>
                  <ul className="space-y-1">
                    <li>• London</li>
                    <li>• Frankfurt</li>
                    <li>• Zurich</li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <h4 className="font-semibold text-brand-primary mb-2">Asia Pacific</h4>
                  <ul className="space-y-1">
                    <li>• Tokyo • Hong Kong • Singapore • Sydney</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] flex items-center justify-center">
              <Globe className="max-w-md" config={GLOBE_CONFIG} />
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-16">
          We serve clients in select industries and sectors where we possess deep industry knowledge, extensive relationships and substantial transaction experience. Our capabilities and insights reflect years of industry specialization as investment bankers at major Wall Street firms and as operating executives of leading companies in our focus industries. This combination of industry specific transactional experience and operational expertise enhances the quality and actionability of our advice and execution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <div key={industry} className="bg-neutral-light border border-gray-200 p-8 rounded-lg text-center flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-xl text-brand-primary">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}