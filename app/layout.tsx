import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Hydrone - Sistema Autónomo de Combate de Incendios Forestales",
  description:
    "Innovación tecnológica autónoma para la detección temprana y combate eficiente de incendios forestales. Protegiendo nuestros bosques con tecnología sostenible.",
  keywords: "drones, incendios forestales, tecnología, sostenibilidad, inteligencia artificial, Chile",
  authors: [
    { name: "Vicente Sepúlveda Ríos" },
    { name: "Cristóbal Cartes Benítez" },
    { name: "Sebastián Vargas Mora" },
  ],
  openGraph: {
    title: "Hydrone - Sistema Autónomo de Combate de Incendios Forestales",
    description: "Innovación tecnológica para proteger nuestros bosques",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydrone - Combate de Incendios Forestales",
    description: "Tecnología autónoma para la protección forestal",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
