import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-neutral-light">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-center text-sm text-gray-300 md:text-left">
                Coady Diemar Partners, LLC is a registered broker-dealer with the Securities and Exchange Commission (SEC) and a member of the <a href="http://www.finra.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Financial Industry Regulatory Authority (FINRA)</a>.
              </p>
            </div>
            <div className="mt-8 flex justify-center space-x-6 md:mt-0 md:ml-6">
              <Link href="/legal" className="text-gray-300 hover:text-white text-sm transition-colors">
                Legal
              </Link>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Coady Diemar Partners, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}