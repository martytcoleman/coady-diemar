import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Transactions',
};

export default function NewsPage() {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-primary sm:text-5xl lg:text-6xl">NEWS & TRANSACTIONS</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary">
            Select recent announcements and transactions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center bg-neutral-light p-12 rounded-lg shadow-sm">
            <h2 className='text-2xl font-bold text-brand-primary mb-4'>Coming Soon</h2>
            <p className='text-center text-gray-600'>Our news and transactions section is currently being updated. Please check back shortly.</p>
            <p className='text-sm text-gray-500 mt-8 text-center'>The following content includes press releases and articles involving transactions where Coady Diemar Partners furnished advisory or other services to one or more parties. This information has been furnished for your information only, and is current only as of its date.</p>
        </div>
      </div>
    </div>
  );
}