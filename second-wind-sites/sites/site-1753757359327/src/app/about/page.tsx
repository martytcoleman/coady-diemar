'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';


const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.03}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]",
        )}
      />
      
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">ABOUT US</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            High-quality, objective M&A and financial advice.
          </p>
        </motion.div>

        <motion.div 
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            <p className="mb-6">
              Established in 2004, Coady Diemar Partners is a boutique investment bank that specializes in merger and acquisition advisory, strategic and financial advisory, and private capital market advisory services to clients. We are a valued partner to management teams, boards of directors and investor groups who seek high-quality, objective M&A and financial advice and institutional capital raising expertise in support of building successful enterprises. Through our deep industry knowledge, extensive relationships and substantial transaction experience, Coady Diemar serves clients in select industries and sectors including power, renewables, health care, industrials, and business services and software. Our industry knowledge and experience enables us to create and implement client specific, strategic and financial solutions tailored to meet the unique objectives of each client and engagement.
            </p>
            <p>
              Our professionals possess significant investment banking and operating experience and have served as trusted advisors to a wide array of companies over many years.
            </p>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0"
            variants={itemVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=560&h=374&fit=crop&crop=entropy&auto=format&q=80"
              alt="Manhattan financial district skyline at dusk"
              width={560}
              height={374}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2 
              className="text-3xl font-bold text-center text-brand-primary mb-12"
              variants={itemVariants}
            >
              Our Principles
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <motion.div 
                  className="bg-neutral-light p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                    <h3 className="font-bold text-xl mb-2 text-brand-primary">Client Commitment</h3>
                    <p className="text-gray-700">We believe in strong, lasting relationships that are earned with candor, creativity, practicality and thoughtfulness.</p>
                </motion.div>
                <motion.div 
                  className="bg-neutral-light p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                    <h3 className="font-bold text-xl mb-2 text-brand-primary">Objective Advice</h3>
                    <p className="text-gray-700">We provide objective advice unencumbered by potential conflicts inherent in underwriting, trading, lending and funds management.</p>
                </motion.div>
                <motion.div 
                  className="bg-neutral-light p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                    <h3 className="font-bold text-xl mb-2 text-brand-primary">Singular Attention</h3>
                    <p className="text-gray-700">Our senior partners are intimately involved in all aspects of a client engagement and our client support professionals ensure seamless execution.</p>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </div>
  );
}