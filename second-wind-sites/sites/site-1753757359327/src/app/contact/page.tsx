import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">CONTACT US</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            We look forward to hearing from you.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-neutral-light p-10 rounded-lg shadow-md border-t-4 border-brand-accent">
            <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">New York Office</h2>
            <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-brand-accent flex-shrink-0 mt-1" />
                    <span>270 Lafayette, Suite 204<br/>New York, New York 10012</span>
                </div>
                <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-brand-accent flex-shrink-0" />
                    <a href="tel:+12129012600" className="hover:text-brand-accent transition-colors">+1 (212) 901-2600</a>
                </div>
                 <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-brand-accent flex-shrink-0" />
                    <a href="mailto:info@coadydiemar.com" className="hover:text-brand-accent transition-colors">info@coadydiemar.com</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}