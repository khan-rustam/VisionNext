import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AnimationProvider from "@/components/animation-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "VisionNest Home loan |  Where Your Home Begins with trust.",
  description: "VisionNest is an organization dedicated to helping individuals and families achieve their dreams with tailored home loans, commercial loans, vehicle loans, and more. We provide trusted, transparent, and compassionate lending solutions for every stage of life."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="VisionNest is an organization dedicated to helping individuals and families achieve their dreams with tailored home loans, commercial loans, vehicle loans, and more. We provide trusted, transparent, and compassionate lending solutions for every stage of life." />
        <meta name="keywords" content="VisionNest, home loans, mortgage, commercial loans, vehicle loans, asset finance, personal loans, lending, Australia, trusted lender, financial solutions, refinance, property finance, organization" />
        <meta name="author" content="VisionNest" />
        <meta name="theme-color" content="#2E8B57" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:title" content="VisionNest Home loan |  Where Your Home Begins with trust." />
        <meta property="og:description" content="VisionNest is an organization dedicated to helping individuals and families achieve their dreams with tailored home loans, commercial loans, vehicle loans, and more. We provide trusted, transparent, and compassionate lending solutions for every stage of life." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visionnest.com.au" />
        <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
        <meta property="og:site_name" content="VisionNest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VisionNest Home loan |  Where Your Home Begins with trust." />
        <meta name="twitter:description" content="VisionNest is an organization dedicated to helping individuals and families achieve their dreams with tailored home loans, commercial loans, vehicle loans, and more. We provide trusted, transparent, and compassionate lending solutions for every stage of life." />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} ${poppins.variable} bg-ivory text-emerald-950`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AnimationProvider>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
