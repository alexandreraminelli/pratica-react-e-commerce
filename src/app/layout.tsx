import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/** Tags de metadados para SEO. No HTML, seria alguns dos dados na tag `<head>`.*/
export const metadata: Metadata = {
  /** Título da página visível na aba (tag `<title>`). */
  title: "Meu E-commerce",
  /** Descrição do site. */
  description: "E-commerce de produtos eletrônicos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
