import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Verazer - Agriculture Software Solutions | Startup Founded 2025",
  description: "Verazer Technologies Ventures Private Limited - An early-stage startup (pre-Series B) founded in 2025, providing innovative agriculture software solutions. Automate production, supply chain, and sales processes. Based in Kolkata, India.",
  keywords: "agriculture software, agritech startup, India, Kolkata, founded 2025, pre-Series B, automation solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Verazer Technologies Ventures Private Limited",
              "alternateName": "Verazer",
              "url": "https://verazer.com",
              "logo": "https://verazer.com/logo.svg",
              "foundingDate": "2025",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4th floor, Century Tower, 45, Shakespeare Sarani, opposite Kala Mandir, Mullick Bazar, Park Street area",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700017",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "kushagra@verazer.com",
                "contactType": "Customer Service"
              },
              "sameAs": [],
              "description": "An early-stage startup (pre-Series B) founded in 2025, providing innovative agriculture software solutions."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
