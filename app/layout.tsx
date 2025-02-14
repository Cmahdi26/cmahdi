import { Inter } from "next/font/google"
import "./globals.css"
import { StarfallBackground } from "@/components/StarfallBackground"
import type { Metadata } from "next"
import type React from "react"
import { ClientLayout } from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahdi Chaabani - Portfolio",
  description: "Étudiant en cyber sécurité - Portfolio professionnel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#0A0F1C] text-white`}>
        <StarfallBackground />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

