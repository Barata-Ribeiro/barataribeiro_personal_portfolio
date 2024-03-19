import type { Metadata } from "next"
import { Comfortaa, Kanit, Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
})

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://barataribeiro.com/"),
  title: "Barata Ribeiro | Portfolio",
  description:
    "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.",
  authors: {
    name: "João Mendes J. B. Ribeiro",
    url: "https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/",
  },
  openGraph: {
    title: "Barata Ribeiro | Portfolio",
    url: "https://barataribeiro.com/",
    description:
      "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.",
    images: [
      {
        url: "https://github.com/Barata-Ribeiro/barataribeiro_personal_portfolio/blob/main/public/assets/og-picture.jpg?raw=true",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barata Ribeiro | Portfolio",
    site: "https://barataribeiro.com/",
    description:
      "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.",
    images: [
      {
        url: "https://github.com/Barata-Ribeiro/barataribeiro_personal_portfolio/blob/main/public/assets/og-picture.jpg?raw=true",
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${comfortaa.variable} ${kanit.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
