import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/brand";

// Sturdy, warm text serif: stays bold and readable at small heading sizes
// (card titles, number section), unlike the thin display serifs. Normal
// letterforms. Var name kept as --font-fraunces so globals.css is unchanged.
const fraunces = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: `${brand.name} | Perinatal & Postpartum Therapy in California`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Perinatal and postpartum therapy with Dr. Heather St. Jean-Garcia, Psy.D., LMFT. Telehealth across California for postpartum depression, NICU parents, pregnancy and infant loss, and parents of multiples.",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
    url: `https://${brand.domain}`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: brand.name,
  description:
    "Perinatal and postpartum psychotherapy serving California via telehealth.",
  url: `https://${brand.domain}`,
  areaServed: { "@type": "State", name: "California" },
  medicalSpecialty: "Psychiatric",
  founder: {
    "@type": "Person",
    name: brand.therapist.name,
    jobTitle: brand.therapist.title,
    honorificSuffix: brand.therapist.credentials,
  },
  address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
