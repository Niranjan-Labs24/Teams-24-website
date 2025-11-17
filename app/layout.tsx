import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teams24",
  description: "Hire pre-vetted remote developers on demand. Scale your team with top talent, no long-term commitments.",
  generator: "Teams24",
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
