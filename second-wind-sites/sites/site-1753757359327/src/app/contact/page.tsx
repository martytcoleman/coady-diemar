'use client'

import { Mail, MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { ShineBorder } from '@/components/magicui/shine-border'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Globe } from '@/components/magicui/globe'

// Globe configuration for New York
const GLOBE_CONFIG = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.2, 0.4] as [number, number, number],
  markerColor: [212/255, 175/255, 122/255] as [number, number, number],
  glowColor: [0.1, 0.2, 0.4] as [number, number, number],
  markers: [
    { location: [40.7589, -73.9851] as [number, number], size: 0.15 },
  ],
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <AnimatedGridPattern 
          className="text-brand-accent/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" 
          numSquares={30}
        />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="relative inline-block mb-8">
                <ShineBorder 
                  className="rounded-2xl px-8 py-4" 
                  shineColor={["#B9975B", "#0A2342", "#B9975B"]} 
                  borderWidth={2}
                  duration={15}
                >
                  <h1 className="text-6xl font-black text-white sm:text-7xl lg:text-8xl tracking-tight">
                    CONNECT
                  </h1>
                </ShineBorder>
              </div>
              
              <div className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's discuss your next strategic move
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <NeonGradientCard
                  className="p-8"
                  neonColors={{
                    firstColor: "#B9975B",
                    secondColor: "#0A2342"
                  }}
                  borderRadius={20}
                >
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">NEW YORK</h2>
                      <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <MapPin className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-gray-300 group-hover:text-white transition-colors">
                          <div className="font-semibold text-white">270 Lafayette, Suite 204</div>
                          <div>New York, New York 10012</div>
                          <div className="text-sm text-gray-400 mt-1">SoHo District</div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <Phone className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform" />
                        </div>
                        <a 
                          href="tel:+12129012600" 
                          className="text-gray-300 hover:text-brand-accent transition-colors text-lg font-medium group-hover:translate-x-1 transition-transform"
                        >
                          +1 (212) 901-2600
                        </a>
                      </div>

                      {/* Email */}
                      <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <Mail className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform" />
                        </div>
                        <a 
                          href="mailto:Cliff@CoadyDiemar.com" 
                          className="text-gray-300 hover:text-brand-accent transition-colors text-lg font-medium group-hover:translate-x-1 transition-transform"
                        >
                          Cliff@CoadyDiemar.com
                        </a>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-6 space-y-4">
                      <a
                        href="mailto:Cliff@CoadyDiemar.com"
                        className="group w-full flex items-center justify-center px-8 py-4 bg-brand-accent text-black font-bold rounded-xl hover:bg-brand-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/25"
                      >
                        Start a Conversation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      
                      <a
                        href="https://www.coadydiemar.com"
                        target="_blank"
                        className="group w-full flex items-center justify-center px-8 py-4 border-2 border-brand-accent/30 text-brand-accent font-bold rounded-xl hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
                      >
                        Visit Main Site
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </NeonGradientCard>
              </div>

              {/* Globe */}
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <Globe className="max-w-sm" config={GLOBE_CONFIG} />
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full animate-ping bg-brand-accent/20 opacity-20"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you're exploring M&A opportunities, seeking strategic guidance, or considering a capital raise, 
                our team is ready to provide the independent advice and seamless execution you need.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}