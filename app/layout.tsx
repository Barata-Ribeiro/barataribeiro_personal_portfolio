import type { Metadata } from "next"
import { Comfortaa, Kanit, Roboto } from "next/font/google"
import "./globals.css"
import { type ReactNode } from "react"
import tw from "@/utils/tw"

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap"
})

const comfortaa = Comfortaa({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-comfortaa",
    display: "swap"
})

const kanit = Kanit({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-kanit",
    display: "swap"
})

export const metadata: Metadata = {
    metadataBase: new URL("https://barataribeiro.com/"),
    title: "Barata Ribeiro",
    description:
        "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.",
    authors: {
        name: "João Mendes J. B. Ribeiro",
        url: "https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
    },
    openGraph: {
        title: "Barata Ribeiro",
        url: "https://barataribeiro.com/",
        description:
            "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.",
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Barata Ribeiro",
        site: "https://barataribeiro.com/",
        description:
            "Welcome to Barata Ribeiro's personal portfolio, a showcase of my work as a Front-End Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions."
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    const bodyStyles = tw`bg-mistGray-50 text-mistGray-950`

    return (
        <html lang="en" className="!scroll-smooth md:scroll-auto">
            <body className={`${roboto.variable} ${comfortaa.variable} ${kanit.variable} ${bodyStyles}`}>
                {children}
            </body>
        </html>
    )
}
