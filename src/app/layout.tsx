import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { seo, contact, education } from "@/data/content";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5B5BD6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: "%s | Deepana Chandrasekar",
  },
  description: seo.description,
  authors: [{ name: seo.author, url: seo.url }],
  creator: seo.author,
  publisher: seo.author,
  alternates: {
    canonical: seo.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: "Deepana Chandrasekar Portfolio",
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Deepana Chandrasekar - Performance Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deepana Chandrasekar",
    jobTitle: "Performance Marketer",
    description:
      "Performance Marketer managing ₹25L+ monthly ad budget across Meta, Google and LinkedIn. Open to Junior and Executive Paid Media roles.",
    url: seo.url,
    sameAs: [contact.linkedinUrl],
    email: `mailto:${contact.email}`,
    telephone: contact.phone,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: education.institution,
    },
    knowsAbout: [
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "Paid Media",
      "Conversion Rate Optimization",
      "ROAS Scaling",
      "CPL Optimization",
    ],
  };

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink font-sans antialiased selection:bg-primary/20 selection:text-ink">
        {/* Skip to Content accessible link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
