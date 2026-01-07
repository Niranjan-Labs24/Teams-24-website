import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teams 24 | Hire Dedicated Developers & Consultants on Subscription",
  description: "Hire pre-vetted fullstack developers, SAP consultants, Salesforce experts, automation testers, UI/UX designers & customer support on flexible monthly subscription.",
  keywords: [
    "hire dedicated developers",
    "staff augmentation services",
    "subscription hiring",
    "remote developers",
    "fullstack developer for hire",
    "SAP consultant",
    "Salesforce developer",
    "automation tester",
    "QA engineer",
    "UI UX designer",
    "customer support outsourcing",
    "dedicated tech team",
    "IT staffing company",
    "offshore developers",
    "nearshore team",
    "hire remote team",
    "tech talent on demand",
    "flexible hiring model",
    "monthly subscription developers",
    "scale tech team",
    "startup hiring",
    "enterprise staff augmentation",
    "pre-vetted developers",
    "Teams24",
    "Upwork alternative",
    "dedicated resources",
    "remote tech resources"
  ],
  authors: [{ name: "Teams 24", url: "https://www.teams24.co/" }],
  creator: "Teams 24",
  publisher: "Teams 24",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.teams24.co/",
  },
  openGraph: {
    title: "Teams 24 | Hire Dedicated Developers & Consultants on Subscription",
    description: "Hire pre-vetted fullstack developers, SAP consultants, Salesforce experts, automation testers, UI/UX designers & customer support on flexible monthly subscription.",
    url: "https://www.teams24.co/",
    siteName: "Teams 24",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Teams 24 | Hire Dedicated Developers & Consultants on Subscription",
    description: "Hire pre-vetted fullstack developers, SAP consultants, Salesforce experts, automation testers, UI/UX designers & customer support on flexible monthly subscription.",
  },
  icons: {
    icon: "/FebiconIcon.png",
    apple: "/FebiconIcon.png",
  },
  other: {
    "copyright": "Copyright 2025",
    "rating": "general",
    "country": "USA",
    "City": "USA",
    "Language": "english",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} font-sans antialiased`}>
      
        {children}
        <Analytics />
      </body>
    </html>
  )
}
