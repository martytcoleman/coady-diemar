'use client'

import Link from 'next/link'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { ShineBorder } from '@/components/magicui/shine-border'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { BorderBeam } from '@/components/magicui/border-beam'
import { MagicCard } from '@/components/magicui/magic-card'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { cn } from '@/lib/utils'
import { ArrowRight, Calendar, ExternalLink, Building2, TrendingUp, Briefcase, Users, Star } from 'lucide-react'

type Transaction = {
  id: string
  title: string
  type: string
  description: string
  cdpRole: string
  year?: string
  acquirerLogo?: string
  targetLogo?: string
  industry: string
  featured?: boolean
  newsLink?: string
}

type NewsItem = {
  id: string
  title: string
  type: 'M&A TRANSACTION' | 'CAPITAL RAISE' | 'NEW TEAM MEMBER' | 'LICENSING DEAL' | 'PROJECT FINANCING' | 'DEVELOPMENT FINANCING' | 'CLIENT UPDATE'
  description: string
  date?: string
  featured?: boolean
  newsLink?: string
}

const transactions: Transaction[] = [
  {
    id: 'ferguson-bruce',
    title: 'Ferguson acquires Bruce Supply',
    type: 'M&A TRANSACTION',
    description: 'Ferguson, a leading distributor of plumbing and heating products, acquired Bruce Supply to expand its market presence.',
    cdpRole: 'CDP acted as exclusive financial advisor to Bruce Supply in its sale to Ferguson',
    year: '2024',
    acquirerLogo: 'https://logo.clearbit.com/ferguson.com',
    targetLogo: 'https://logo.clearbit.com/brucesupply.com',
    industry: 'Industrials',
    featured: true,
    newsLink: 'https://www.corporate.ferguson.com/pressroom/news-releases/news-details/2023/Ferguson-Acquires-Bruce-Supply-Corp-The-Kennedy-Companies-and-S.-G.-Torrice/default.aspx'
  },
  {
    id: 'ceme-micropump',
    title: 'CEME Group acquires Micropump from IDEX',
    type: 'M&A TRANSACTION',
    description: 'CEME Group acquired the Micropump business unit from IDEX Corporation, strengthening its position in precision fluid handling.',
    cdpRole: 'CDP acted as financial advisor to IDEX in the sale of its Micropump business unit to CEME Group',
    year: '2024',
    acquirerLogo: 'https://logo.clearbit.com/cemegroup.com',
    targetLogo: 'https://logo.clearbit.com/idexcorp.com',
    industry: 'Industrials',
    featured: true,
    newsLink: 'https://www.cemegroup.com/it/news/2023/exciting-news-new-partnership-with-micropump-1039'
  },
  {
    id: 'ecp-metrus',
    title: 'Energy Capital Partners acquires Metrus Energy',
    type: 'M&A TRANSACTION',
    description: 'Energy Capital Partners acquired Metrus Energy, a leading provider of energy efficiency and renewable energy solutions.',
    cdpRole: 'CDP served as exclusive financial advisor to Metrus Energy in its sale to Energy Capital Partners',
    year: '2023',
    acquirerLogo: 'https://logo.clearbit.com/ecpgp.com',
    targetLogo: 'https://logo.clearbit.com/metrusenergy.com',
    industry: 'Cleantech & Mobility',
    featured: true,
    newsLink: 'https://www.prweb.com/releases/metrus-energy-announces-acquisition-by-ecp-817715123.html'
  },
  {
    id: 'nv5-optimal',
    title: 'NV5 acquires Optimal Energy',
    type: 'M&A TRANSACTION',
    description: 'NV5 Global acquired Optimal Energy, expanding its infrastructure engineering capabilities in the energy sector.',
    cdpRole: 'CDP acted as exclusive financial advisor to Optimal Energy in its sale to NV5',
    year: '2023',
    acquirerLogo: 'https://logo.clearbit.com/nv5.com',
    targetLogo: 'https://logo.clearbit.com/optimalenergy.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.globenewswire.com/news-release/2021/12/30/2359253/0/en/NV5-to-Acquire-Optimal-Energy-Expanding-Energy-Efficiency-Consulting-Capabilities.html'
  },
  {
    id: 'gemspring-mantis',
    title: 'Gemspring Capital acquires Mantis Innovation',
    type: 'M&A TRANSACTION',
    description: 'Gemspring Capital acquired the energy brokerage business of Mantis Innovation, enhancing its energy services portfolio.',
    cdpRole: 'CDP acted as financial advisor to Gemspring in acquisition of Mantis Innovation solely in respect to Mantis\' energy brokerage business',
    year: '2023',
    acquirerLogo: 'https://logo.clearbit.com/gemspring.com',
    targetLogo: 'https://logo.clearbit.com/mantisinnovation.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.gemspring.com/gemspring-capital-acquires-mantis-innovation-group/'
  },
  {
    id: 'rkd-summit',
    title: 'RKD Group acquires Summit Marketing',
    type: 'M&A TRANSACTION',
    description: 'RKD Group acquired Summit Marketing, a leading direct response marketing agency.',
    cdpRole: 'CDP acted as exclusive financial advisor to RKD Group in its acquisition of Summit Marketing',
    year: '2021',
    acquirerLogo: 'https://logo.clearbit.com/rkdgroup.com',
    targetLogo: 'https://logo.clearbit.com/summitmarketing.com',
    industry: 'Business Services & Software',
    featured: true,
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'magnax-funding',
    title: 'Magnax Capital Raise',
    type: 'CAPITAL RAISE',
    description: 'Magnax completed a €16 million capital raise to accelerate growth in electric motor technology.',
    cdpRole: 'CDP served as financial advisor to Magnax in connection with its €16 million capital raise',
    year: '2021',
    targetLogo: 'https://logo.clearbit.com/magnax.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://tech.eu/2021/01/06/magnax-series-a/'
  },
  {
    id: 'dataaxle-lake',
    title: 'Data Axle acquires Lake Group Media',
    type: 'M&A TRANSACTION',
    description: 'Data Axle acquired Lake Group Media, a direct marketing and data analytics company, to expand its marketing solutions.',
    cdpRole: 'CDP completes sale of Lake Group Media to Data Axle',
    year: '2022',
    acquirerLogo: 'https://logo.clearbit.com/data-axle.com',
    targetLogo: 'https://logo.clearbit.com/lakegroupmedia.com',
    industry: 'Business Services & Software',
    newsLink: 'https://www.lakegroupmedia.com/data-axle-acquires-lake-group-media-and-donorbase/'
  },
  {
    id: 'plug-giner',
    title: 'Plug Power acquires Giner ELX',
    type: 'M&A TRANSACTION',
    description: 'Plug Power acquired Giner ELX, a leading provider of hydrogen generation technology and equipment.',
    cdpRole: 'CDP completes sale of Giner ELX to Plug Power',
    year: '2022',
    acquirerLogo: 'https://logo.clearbit.com/plugpower.com',
    targetLogo: 'https://logo.clearbit.com/giner.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.globenewswire.com/news-release/2020/06/23/2051990/0/en/Plug-Power-Inc-Completes-Acquisitions-of-United-Hydrogen-and-Giner-ELX-continuing-to-execute-on-its-five-year-plan.html'
  },
  {
    id: 'erm-mjbradley',
    title: 'ERM acquires M.J. Bradley & Associates',
    type: 'M&A TRANSACTION',
    description: 'ERM acquired M.J. Bradley & Associates, a leading environmental consulting firm.',
    cdpRole: 'CDP completes sale of M.J. Bradley & Associates to ERM',
    year: '2021',
    acquirerLogo: 'https://logo.clearbit.com/erm.com',
    targetLogo: 'https://logo.clearbit.com/mjbradley.com',
    industry: 'Business Services & Software',
    newsLink: 'https://www.erm.com/news/erm-announces-acquisition-of-mj-bradley-associates-llc/'
  },
  {
    id: 'o2-patriot',
    title: 'EMEX acquires Patriot Energy',
    type: 'M&A TRANSACTION',
    description: 'EMEX, backed by O2 Investment Partners, acquired Patriot Energy to strengthen its energy services capabilities.',
    cdpRole: 'CDP completes sale of Patriot Energy to O2 Investment Partner\'s backed EMEX',
    year: '2019',
    acquirerLogo: 'https://logo.clearbit.com/emex.com',
    targetLogo: 'https://logo.clearbit.com/patriotenergygroup.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.globenewswire.com/news-release/2019/06/27/1875498/0/en/EMEX-LLC-Creates-Strategic-Alliance-with-Patriot-Energy-Group.html'
  },
  {
    id: 'o2-emex',
    title: 'O2 Investment Partners acquires EMEX',
    type: 'M&A TRANSACTION',
    description: 'O2 Investment Partners acquired EMEX to expand its energy services portfolio.',
    cdpRole: 'CDP completes sale of EMEX to O2 Investment Partners',
    year: '2019',
    acquirerLogo: 'https://logo.clearbit.com/o2investment.com',
    targetLogo: 'https://logo.clearbit.com/emex.com',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.globenewswire.com/news-release/2018/05/07/1497650/0/en/O2-Investment-Partners-Invests-in-EMEX-LLC-www-energymarketexchange-com.html'
  },
  {
    id: 'energy-monitoring-raise',
    title: 'Energy Monitoring Company Capital Raise',
    type: 'CAPITAL RAISE',
    description: 'CDP completed a capital raise for an energy monitoring and information company.',
    cdpRole: 'CDP completes capital raise for energy monitoring and information company',
    year: '2019',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'besse-podis',
    title: 'Besse Medical acquires PODIS/General Medical Services',
    type: 'M&A TRANSACTION',
    description: 'Besse Medical, an affiliate of AmerisourceBergen, acquired PODIS/General Medical Services.',
    cdpRole: 'CDP advises PODIS/General Medical Services in its sale to Besse Medical, an affiliate of AmerisourceBergen',
    year: '2019',
    industry: 'Healthcare',
    newsLink: 'https://www.businesswire.com/news/home/20170627005188/en/'
  },
  {
    id: 'ffp-project-financing',
    title: 'FFP New Hydro Project Financing',
    type: 'PROJECT FINANCING',
    description: 'CDP advised FFP New Hydro in securing project financing for renewable energy development.',
    cdpRole: 'CDP advises FFP New Hydro in project financing',
    year: '2018',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.businesswire.com/news/home/20160309005225/en/FFP-Hydro-AECOM-Capital-create-Muskingum-River'
  },
  {
    id: 'genscript-customarray',
    title: 'GenScript Biotech acquires CustomArray',
    type: 'M&A TRANSACTION',
    description: 'GenScript Biotech acquired CustomArray to expand its synthetic biology product portfolio.',
    cdpRole: 'GenScript Biotech acquires CDP client CustomArray to expand its synthetic biology product portfolio',
    year: '2018',
    industry: 'Healthcare',
    newsLink: 'https://www.prnewswire.com/news-releases/genscript-biotech-acquires-customarray-to-expand-synthetic-biology-product-portfolio-300575432.html'
  },
  {
    id: 'ffp-development-financing',
    title: 'FFP New Hydro Development Financing',
    type: 'DEVELOPMENT FINANCING',
    description: 'CDP advised FFP New Hydro in securing development financing for hydro power projects.',
    cdpRole: 'CDP advises FFP New Hydro in development financing',
    year: '2018',
    industry: 'Cleantech & Mobility',
    newsLink: 'https://www.businesswire.com/news/home/20160309005225/en/FFP-Hydro-AECOM-Capital-create-Muskingum-River'
  },
  {
    id: 'taylor-neps',
    title: 'Taylor Corporation acquires NEPS',
    type: 'M&A TRANSACTION',
    description: 'Taylor Corporation acquired NEPS, LLC to strengthen its direct marketing capabilities.',
    cdpRole: 'CDP serves as the exclusive financial advisor to NEPS, LLC on its sale to Taylor Corporation',
    year: '2017',
    industry: 'Business Services & Software',
    newsLink: 'https://neps.com/2015/06/taylor-corporation-acquires-neps/'
  },
  {
    id: 'robbinskersten-alphadog',
    title: 'RobbinsKersten Direct acquires Alpha Dog Marketing',
    type: 'M&A TRANSACTION',
    description: 'RobbinsKersten Direct acquired Alpha Dog Marketing to expand its digital marketing services.',
    cdpRole: 'CDP serves as the exclusive financial advisor to RobbinsKersten Direct in its acquisition of Alpha Dog Marketing',
    year: '2017',
    industry: 'Business Services & Software',
    newsLink: 'https://www.brookventure.com/brook-portfolio-company-robbinskersten-direct-acquires-alpha-dog-marketing/'
  },
  {
    id: 'silvercrest-jamieson',
    title: 'Silvercrest Asset Management Group acquires Jamieson, Eaton & Wood',
    type: 'M&A TRANSACTION',
    description: 'Silvercrest Asset Management Group acquired Jamieson, Eaton & Wood to expand its wealth management services.',
    cdpRole: 'CDP advised Jamieson, Eaton & Wood in its acquisition by Silvercrest Asset Management Group',
    year: '2017',
    industry: 'Business Services & Software',
    newsLink: 'https://silvercrestgroup.com/uploads/viewFile/55931d25-8a48-40df-a337-3e58c0a864b8/PressRelease.pdf'
  },
  {
    id: 'nfl-ifn',
    title: 'The National Food Laboratory acquires International Food Network',
    type: 'M&A TRANSACTION',
    description: 'The National Food Laboratory acquired International Food Network to expand its food testing capabilities.',
    cdpRole: 'CDP served as the exclusive financial advisor to International Food Network on its sale to The National Food Laboratory',
    year: '2016',
    industry: 'Business Services & Software',
    newsLink: 'https://www.fdbusiness.com/the-national-food-laboratory-and-international-food-network-join-forces/'
  }
]

const newsItems: NewsItem[] = [
  {
    id: 'colin-knudsen',
    title: 'Colin Knudsen Joins as Senior Advisor',
    type: 'NEW TEAM MEMBER',
    description: 'CDP is pleased to announce that Colin Knudsen, an experienced Technology, Media, and Telecom banker, joined the team as a senior advisor in May 2021',
    date: 'May 2021',
    featured: true,
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'jonathan-yellen',
    title: 'Jonathan Yellen Joins as Senior Advisor',
    type: 'NEW TEAM MEMBER', 
    description: 'Jonathan Yellen, a senior infrastructure banker with extensive energy and power experience, has joined the team as a senior advisor as of November 2020',
    date: 'November 2020',
    featured: true,
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'kevin-tahmoush',
    title: 'Kevin Tahmoush Joins as Senior Advisor',
    type: 'NEW TEAM MEMBER',
    description: 'CDP is pleased to announce that Kevin Tahmoush, a healthcare industry veteran, is joining the team as a senior advisor in October 2019',
    date: 'October 2019',
    featured: true,
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'ramki-srinivasan',
    title: 'Ramki Srinivasan Joins as Senior Advisor',
    type: 'NEW TEAM MEMBER',
    description: 'CDP is pleased to announce that Ramki Srinivasan, an energy and power industry expert, is joining the team as a senior advisor in December 2019',
    date: 'December 2019',
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  },
  {
    id: 'fiba-licensing',
    title: 'LightStore Licenses Technology to FIBA Technologies',
    type: 'LICENSING DEAL',
    description: 'CDP advises LightStore on the licensing of its CNG "virtual pipeline" technology to FIBA Technologies',
    date: '2020',
    newsLink: 'https://www.ngvglobal.com/blog/fiba-diversifies-to-type-iv-carbon-composite-trailers-with-light-store-1213'
  },
  {
    id: 'icr-kenworth',
    title: 'Kenworth Partners with ICR Holdings',
    type: 'CLIENT UPDATE',
    description: 'Kenworth replaces a class 8 truck\'s diesel engine with a microturbine from ICR Holdings, a CDP Client',
    date: '2017',
    newsLink: 'https://www.coadydiemar.com/copy-of-news-1'
  }
]

const getIndustryIcon = (industry: string) => {
  switch (industry) {
    case 'Cleantech & Mobility':
      return <Building2 className="h-5 w-5" />
    case 'Healthcare':
      return <TrendingUp className="h-5 w-5" />
    case 'Industrials':
      return <Briefcase className="h-5 w-5" />
    case 'Business Services & Software':
      return <Users className="h-5 w-5" />
    default:
      return <Building2 className="h-5 w-5" />
  }
}

export default function TransactionsPage() {
  const featuredTransactions = transactions.filter(t => t.featured)
  const allTransactions = transactions
  const featuredNews = newsItems.filter(n => n.featured)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-neutral-50 to-gray-100 animate-fade-in-up">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGridPattern 
          className="text-brand-primary/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" 
          numSquares={50}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="relative mx-auto inline-flex mb-8">
              <h1 className="relative z-10 text-5xl font-extrabold tracking-tight text-brand-primary sm:text-6xl lg:text-7xl">
                TRANSACTIONS
              </h1>
              <ShineBorder 
                className="rounded-3xl" 
                shineColor={["#B9975B", "#0A2342", "#B9975B"]} 
                borderWidth={3}
                duration={12}
              />
            </div>
            
            <p className="mt-6 text-xl leading-8 text-brand-secondary max-w-3xl mx-auto">
              Selected transactions where Coady Diemar Partners furnished advisory or other services to deliver exceptional outcomes for our clients.
            </p>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">
                  <NumberTicker value={transactions.length} className="text-brand-primary" />+
                </div>
                <div className="text-sm text-brand-secondary mt-1">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">
                  $<NumberTicker value={5} className="text-brand-primary" />B+
                </div>
                <div className="text-sm text-brand-secondary mt-1">Transaction Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">
                  <NumberTicker value={25} className="text-brand-primary" />+
                </div>
                <div className="text-sm text-brand-secondary mt-1">Years Experience</div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="https://www.coadydiemar.com/copy-of-news-1"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-secondary hover:shadow-xl hover:scale-105"
              >
                View Full Archive <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transactions */}
      <section className="relative py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">Featured Transactions</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {featuredTransactions.map((transaction, idx) => (
              <Link
                key={transaction.id}
                href={transaction.newsLink || "https://www.coadydiemar.com/copy-of-news-1"}
                target="_blank"
                className="group block"
              >
                <MagicCard 
                  className="p-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  gradientColor="#f0f0f0"
                  gradientOpacity={0.1}
                >
                  <div className="relative h-full bg-white rounded-lg p-6">
                    <BorderBeam 
                      size={250} 
                      duration={8 + idx * 2} 
                      colorFrom="#B9975B" 
                      colorTo="#0A2342"
                      borderWidth={1}
                    />
                    
                    {/* Transaction Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {getIndustryIcon(transaction.industry)}
                        <span className="text-xs font-semibold tracking-wider text-brand-accent uppercase">
                          {transaction.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {transaction.year && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            {transaction.year}
                          </div>
                        )}
                        <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-brand-accent transition-colors" />
                      </div>
                    </div>

                    {/* Company Logos */}
                    {(transaction.acquirerLogo || transaction.targetLogo) && (
                      <div className="mb-4 flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg group-hover:bg-brand-primary/5 transition-colors">
                        {transaction.acquirerLogo ? (
                          <img
                            src={transaction.acquirerLogo}
                            alt="Acquirer logo"
                            className="h-8 w-auto object-contain opacity-80"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        )}
                        <ArrowRight className="h-4 w-4 text-brand-accent flex-shrink-0" />
                        {transaction.targetLogo ? (
                          <img
                            src={transaction.targetLogo}
                            alt="Target logo"
                            className="h-8 w-auto object-contain opacity-80"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        )}
                      </div>
                    )}

                    {/* Transaction Details */}
                    <h3 className="text-lg font-bold text-brand-primary mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                      {transaction.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {transaction.description}
                    </p>

                    {/* CDP Role */}
                    <div className="mt-auto">
                      <div className="text-xs font-medium text-brand-secondary mb-3 p-2 bg-brand-primary/5 rounded border-l-2 border-brand-accent group-hover:bg-brand-primary/10 transition-colors">
                        {transaction.cdpRole}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">
                          {transaction.industry}
                        </span>
                        <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent group-hover:text-brand-primary transition-colors">
                          View Details <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="mt-2 text-xs text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        Click anywhere to view full details →
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Transactions Grid */}
      <section className="relative py-16 sm:py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">Transaction History</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
            <p className="mt-4 text-lg text-brand-secondary max-w-2xl mx-auto">
              A comprehensive view of our advisory engagements across diverse industries and transaction types.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {allTransactions.map((transaction, idx) => (
              <Link
                key={transaction.id}
                href={transaction.newsLink || "https://www.coadydiemar.com/copy-of-news-1"}
                target="_blank"
                className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-md ring-1 ring-gray-200 transition-all hover:-translate-y-2 hover:shadow-2xl hover:ring-brand-accent/20 cursor-pointer block"
              >
                <ShineBorder 
                  className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  shineColor={["#B9975B", "#0A2342"]} 
                  borderWidth={1}
                  duration={8}
                />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getIndustryIcon(transaction.industry)}
                      <span className="text-xs font-semibold text-brand-accent">
                        {transaction.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {transaction.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-brand-accent transition-colors" />
                    </div>
                  </div>

                  {/* Company Logos - Compact */}
                  {(transaction.acquirerLogo || transaction.targetLogo) && (
                    <div className="mb-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                      {transaction.acquirerLogo && (
                        <img
                          src={transaction.acquirerLogo}
                          alt="Acquirer"
                          className="h-5 w-auto object-contain opacity-70"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      )}
                      <ArrowRight className="h-3 w-3 text-brand-accent" />
                      {transaction.targetLogo && (
                        <img
                          src={transaction.targetLogo}
                          alt="Target"
                          className="h-5 w-auto object-contain opacity-70"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-sm font-bold text-brand-primary mb-2 line-clamp-2 group-hover:text-brand-accent transition-colors">
                    {transaction.title}
                  </h3>

                  {/* Industry & Year */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{transaction.industry}</span>
                    {transaction.year && <span>{transaction.year}</span>}
                  </div>

                  {/* CDP Role - Truncated */}
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {transaction.cdpRole}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-3 text-xs text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Transaction?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our experienced team is ready to provide strategic guidance for your next M&A transaction, capital raise, or strategic initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-primary shadow-xl transition-all hover:bg-gray-50 hover:shadow-2xl hover:scale-105"
              >
                Start a Conversation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.coadydiemar.com/copy-of-news-1"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-brand-primary"
              >
                View All Transactions <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


