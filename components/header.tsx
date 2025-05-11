"use client"

import Button from "@/components/general/button"
import LinkButton from "@/components/general/link-button"
import Logo from "@/components/general/logo"
import MiniLogo from "@/components/general/mini-logo"
import tw from "@/utils/tw"
import { debounce } from "lodash"
import { type MouseEvent, useEffect, useRef, useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

interface MenuItem {
    text: string
    url: string
}

const MENU_ITEMS: MenuItem[] = [
    { text: "Home", url: "#home" },
    { text: "About", url: "#about" },
    { text: "Projects", url: "#projects" },
    { text: "Education", url: "#education" },
]

export default function Header() {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef<HTMLHeadingElement | null>(null)
    const mobileMenuRef = useRef<HTMLUListElement | null>(null)

    // Event Listeners for the mobile menu
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        const checkScreenSize = debounce(() => setIsNarrowScreen(window.innerWidth < 315), 100)

        checkScreenSize()

        window.addEventListener("click", handleClickOutside)
        window.addEventListener("resize", checkScreenSize)
        return () => {
            window.removeEventListener("click", handleClickOutside)
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    // Resize Observer to get the header height
    useEffect(() => {
        const headerElement = headerRef.current
        if (headerElement) {
            const resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) setHeaderHeight(entry.target.clientHeight)
            })

            resizeObserver.observe(headerElement)

            return () => {
                if (headerElement !== null) resizeObserver.unobserve(headerElement)
            }
        }
    }, [])

    function handleMenuClick(event: MouseEvent<HTMLButtonElement>) {
        event.stopPropagation()
        setIsMenuOpen(!isMenuOpen)
    }

    const navButtonStyle = tw`text-mist-gray-200 hover:bg-mist-gray-500 hover:text-mist-gray-50 active:bg-mist-gray-800 rounded-lg p-3`
    const downloadButtonStyle = tw`bg-royal-blue-600 text-mist-gray-50 hover:bg-royal-blue-700 hover:text-mist-gray-50 active:bg-royal-blue-800 rounded-lg p-3`
    const menuMobileCommonStyles = tw`fixed z-30 h-screen w-3/4 duration-500 ease-in-out`

    return (
        <header
            ref={headerRef}
            className="border-mist-gray-400/80 bg-mist-gray-600/90 fixed top-0 z-10 w-full border-b shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150">
            <nav
                className="flex items-center justify-between px-1 sm:px-5 lg:container lg:px-0"
                aria-label="Main Navigation"
                role="navigation">
                {isNarrowScreen ? <MiniLogo aria-hidden="true" /> : <Logo aria-hidden="true" />}
                <ul className="font-Comfortaa hidden items-center gap-5 font-bold lg:flex">
                    {MENU_ITEMS.map((item, index) => (
                        <li key={"nav-" + item.text + "-" + index}>
                            <LinkButton href={item.url} className={navButtonStyle}>
                                {item.text}
                            </LinkButton>
                        </li>
                    ))}
                    <li>
                        <LinkButton
                            href="/barataribeiro_resume.pdf"
                            download="barataribeiro_resume"
                            className={downloadButtonStyle}>
                            Curriculum
                        </LinkButton>
                    </li>
                </ul>

                {/*MOBILE MENU*/}
                <Button
                    type="button"
                    className="text-mist-gray-50 hover:bg-mist-gray-500 hover:text-mist-gray-50 active:bg-mist-gray-800 block cursor-pointer rounded-lg p-3 lg:hidden"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={handleMenuClick}>
                    {isMenuOpen ? <FaXmark size={26} /> : <FaBars size={26} />}
                </Button>
                <div
                    style={{ top: `${headerHeight}px` }}
                    aria-hidden
                    className={isMenuOpen ? tw`fixed inset-0 -mx-1 h-screen w-screen bg-black/60` : tw`hidden`}></div>
                <ul
                    ref={mobileMenuRef}
                    id="mobile-menu"
                    aria-label="Mobile Navigation"
                    aria-hidden={!isMenuOpen}
                    role="navigation"
                    className={
                        isMenuOpen
                            ? twMerge(
                                  menuMobileCommonStyles,
                                  "border-mist-gray-400 bg-mist-gray-600/90 right-0 border-l" +
                                      " shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] lg:hidden",
                              )
                            : twMerge(menuMobileCommonStyles, "bg-mist-gray-600 -right-full w-3/4")
                    }
                    style={{ top: `${headerHeight}px` }}>
                    {MENU_ITEMS.map((item, index) => (
                        <li key={"nav-" + item.text + "-" + index}>
                            <LinkButton
                                href={item.url}
                                className={tw`text-mist-gray-200 hover:bg-mist-gray-500 hover:text-mist-gray-50 active:bg-mist-gray-800 block px-4 py-3 text-xl duration-300`}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {item.text}
                            </LinkButton>
                        </li>
                    ))}
                    <li>
                        <LinkButton
                            href="/barataribeiro_resume.pdf"
                            download="barataribeiro_resume"
                            className={tw`text-mist-gray-200 hover:bg-royal-blue-500 hover:text-mist-gray-50 active:bg-royal-blue-800 block px-4 py-3 text-xl`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            Curriculum
                        </LinkButton>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
