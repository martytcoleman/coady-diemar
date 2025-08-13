'use client';
import Image from 'next/image';
import Link from 'next/link';
import { KEY_STATS, LEADERSHIP_TEAM } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/animated-counter';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { ShineBorder } from '@/components/magicui/shine-border';
import { cn } from '@/lib/utils';

// Since this page uses components that need 'use client', but the page itself can be a Server Component,
// we will import client components and use them here.

const MotionLink = motion(Link);

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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center bg-hero-pattern bg-cover bg-center bg-fixed overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary bg-opacity-60"></div>
        
        {/* Animated Grid Pattern */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        
        <motion.div
          className="relative z-10 p-4 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            INDEPENDENT ADVICE. <br /> SEAMLESS EXECUTION.
          </motion.h1>
          <motion.p 
            className="md:text-xl mb-8 text-neutral-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Coady Diemar Partners is a boutique investment bank providing M&A, strategic, and financial advisory services with a focus on private capital market services.
          </motion.p>
          <MotionLink 
            href="/contact" 
            className="inline-block bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-md transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: '#d4af7a' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Contact Us
          </MotionLink>
        </motion.div>
      </section>

      <motion.section 
        className="bg-neutral-light py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {KEY_STATS.map((stat) => (
              <motion.div key={stat.label} className="p-4" variants={itemVariants}>
                <div className="text-4xl lg:text-5xl font-bold text-brand-accent">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="mt-2 text-sm lg:text-base text-brand-secondary tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="bg-white py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-brand-primary mb-4">ABOUT US</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-brand-accent mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-brand-secondary leading-relaxed">
             Established in 2004, Coady Diemar Partners is a boutique investment bank that specializes in merger and acquisition advisory, strategic and financial advisory, and private capital market advisory services to clients. We are a valued partner to management teams, boards of directors and investor groups who seek high-quality, objective M&A and financial advice and institutional capital raising expertise in support of building successful enterprises.
          </motion.p>
           <MotionLink 
             href="/about" 
             className="mt-8 inline-flex items-center text-brand-accent font-semibold"
             whileHover={{ x: 4 }}
             variants={itemVariants}
           >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </MotionLink>
        </div>
      </motion.section>

      <motion.section 
        className="bg-neutral-light py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-brand-primary mb-4">SERVICES</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-brand-accent mx-auto mb-8"></motion.div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              variants={itemVariants} 
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <ShineBorder 
                shineColor={["#B9975B", "#0A2342", "#B9975B"]}
                borderWidth={2}
                duration={8}
                className="rounded-lg"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Mergers, Acquisitions & Divestitures</h3>
                <p className="text-brand-secondary">We initiate, advise on and manage all phases of exclusive sales, mergers, acquisitions, divestitures, going-private and corporate development transactions.</p>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants} 
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <ShineBorder 
                shineColor={["#B9975B", "#0A2342", "#B9975B"]}
                borderWidth={2}
                duration={10}
                className="rounded-lg"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Capital Raising</h3>
                <p className="text-brand-secondary">We assist companies and management teams seeking capital for internal growth, acquisitions, buyouts or recapitalizations.</p>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants} 
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <ShineBorder 
                shineColor={["#B9975B", "#0A2342", "#B9975B"]}
                borderWidth={2}
                duration={12}
                className="rounded-lg"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Strategic Advisory Services</h3>
                <p className="text-brand-secondary">We leverage our substantial industry, operating and financial knowledge to assist companies facing critical challenges.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="bg-white py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-brand-primary mb-4">SENIOR LEADERSHIP</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-brand-accent mx-auto mb-8"></motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {LEADERSHIP_TEAM.map(member => (
              <motion.div key={member.name} className="text-center" variants={itemVariants}>
                <Image 
                  src={member.imageUrl}
                  alt={`Headshot of ${member.name}`}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover h-[200px] w-[200px] shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="font-bold text-lg text-brand-primary">{member.name}</h3>
                <p className="text-brand-accent text-sm">{member.title}</p>
              </motion.div>
            ))}
          </div>
           <MotionLink 
              href="/leadership" 
              className="mt-12 inline-flex items-center text-brand-accent font-semibold"
              whileHover={{ x: 4 }}
              variants={itemVariants}
            >
            View Full Team <ArrowRight className="ml-2 h-4 w-4" />
          </MotionLink>
        </div>
      </motion.section>

    </div>
  );
}