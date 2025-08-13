import { Metadata } from 'next';
import { Check } from 'lucide-react';

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
    ]
  },
  {
    title: "Capital Raising",
    description: "We have long-standing relationships with leading, global private investors in equity, debt and hybrid securities across our targeted industry sectors. We assist companies and management teams seeking capital for internal growth, acquisitions, buyouts or recapitalizations in:",
    points: [
      "Determining the optimal size, form and timing of a financing",
      "Creating the company's or management's disclosure and marketing materials",
      "Targeting and approaching value-added, long-term investors",
      "Negotiating and concluding financing terms and conditions"
    ]
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
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">SERVICES</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            A partnership approach to delivering tailored financial and strategic solutions.
          </p>
        </div>
        <div className="space-y-16 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="p-8 bg-neutral-light rounded-lg shadow-sm border-l-4 border-brand-accent">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map(point => (
                  <li key={point} className="flex items-start">
                    <Check className="flex-shrink-0 h-6 w-6 text-brand-accent mt-1" />
                    <span className="ml-3 text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}