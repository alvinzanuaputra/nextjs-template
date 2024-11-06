import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import { TailwindIndicator } from "@/components/utils/TailwindIndicator"
import { ThemeProvider } from "@/components/utils/ThemeProvider"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                {/* Enables Theme */}
                <ThemeProvider attribute="class" defaultTheme="light">
                    {/* Main */}
                    <div className="relative flex min-h-screen flex-col">
                        {/* Navbar */}
                        <Navbar />

                        {/* Content */}
                        <div className="flex-1">{children}</div>
                    </div>

                    {/* Add Tailwind Indicator */}
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    )
}
