import { Metadata } from 'next';
import Image from 'next/image';
import type { LeadershipMember } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Leadership',
};

const leadershipTeam: LeadershipMember[] = [
    {
        name: "Clifford G. Adams, Jr.",
        title: "Managing Director",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_56a3949cb87a41b49befeab41fda2592~mv2.png/v1/fill/w_282,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Cliff%20v2.png",
        bio: "Cliff Adams has over 25 years of experience in investment banking and industry. Prior to joining CDP, Mr. Adams was a Vice President in investment banking at Credit Suisse First Boston, where he worked in the Mergers & Acquisitions and Global Industrial and Services Groups."
    },
    {
        name: "Jonathan S. Anzaldo",
        title: "Managing Director",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_1eda0c9a337041d781263994b22f62f4~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Jonathan%20(2).png",
        bio: "Jonathan Anzaldo has over 20 years of experience in investment banking. Prior to joining CDP, Mr. Anzaldo was a Director in investment banking at Credit Suisse, where he worked in the Mergers & Acquisitions group. His industry experience includes general industrials, healthcare, chemicals and real estate."
    },
    {
        name: "J. Scott Magrane, Jr.",
        title: "Managing Director",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_c5f7fff9d68945a282af729e8a6a33fb~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Scott%20(2).png",
        bio: "J. Scott Magrane has spent over 35 years advising power related enterprises. Prior to founding CDP, Mr. Magrane spent 15 years with Goldman Sachs & Co. where his responsibilities encompassed all manner of corporate finance and strategic advisory activities."
    },
    {
        name: "Ramki Srinivasan",
        title: "Senior Advisor",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_67fc2b1a0f264276b3cdf2c5e26ecd78~mv2.png/v1/fill/w_285,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Ramki%20(2).png",
        bio: "Ramki Srinivasan has over 25 years of management consulting and operational experience working in America and Asia, and expertise in multiple industries including renewable energy, recycling, oil & gas, chemicals, software technology, and industrial products."
    },
    {
        name: "J. Brian Mullen",
        title: "Senior Advisor",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_fc4a4db7cc5047248f309449e6028651~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Brian%20(2).png",
        bio: "Brian Mullen has over 30 years of experience in the investment banking industry. His focus is on financial services, healthcare, and general industrial sectors. Prior to CDP, Mr. Mullen spent 22 years in the Investment Banking Divisions of Donaldson, Lufkin & Jenrette and Credit Suisse."
    },
    {
        name: "Colin R. Knudsen",
        title: "Senior Advisor",
        imageUrl: "https://static.wixstatic.com/media/3ccbaa_2edbb63835054674922fb63d9122ff53~mv2.png/v1/fill/w_285,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif/Colin%20Knudson%202.png",
        bio: "Colin R. Knudsen has over 30 years of experience in the investment banking industry. His focus is on Technology, Media and Telecoms (TMT) sectors. Prior to re-joining CDP, Mr. Knudsen served as Managing Director, Investment Banking at BTIG."
    }
];

export default function LeadershipPage() {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">LEADERSHIP</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            A team of experienced professionals dedicated to our clients' success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadershipTeam.map((member) => (
            <div key={member.name} className="text-left bg-neutral-light p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center mb-6">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">{member.name}</h3>
                  <p className="text-brand-accent font-semibold">{member.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm flex-grow">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}