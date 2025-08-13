import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Coady Diemar Partners',
    default: 'Coady Diemar Partners | Independent Advice. Seamless Execution.',
  },
  description: "Coady Diemar Partners is a boutique investment bank providing M&A, strategic, and financial advisory services with a focus on private capital market services.",
  keywords: ["investment banking", "M&A", "strategic advisory", "financial advisory", "private capital market"],
  metadataBase: new URL('https://www.coadydiemar.com'),
  openGraph: {
      title: 'Coady Diemar Partners',
      description: 'Independent Advice. Seamless Execution.',
      url: 'https://www.coadydiemar.com',
      siteName: 'Coady Diemar Partners',
      images: [
        {
          url: 'https://static.wixstatic.com/media/3ccbaa_01c9ce029efc447b9cf3546a91ae0991~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1200,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3ccbaa_01c9ce029efc447b9cf3546a91ae0991~mv2_d_6000_4000_s_4_2.jpg',
          width: 1200,
          height: 630,
          alt: 'Coady Diemar Partners city skyline background',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, 'bg-neutral-light')}>
      <body className="font-sans text-neutral-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}