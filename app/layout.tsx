import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter  } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: 'Milkyway Rides',
  description: 'Think Beyond The Limits.',
  other: {
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:url": "milkywayrides.vercel.app",
    "og:image": "",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
      <SpeedInsights/>
      <Analytics/>
    </ClerkProvider>
  )
}
