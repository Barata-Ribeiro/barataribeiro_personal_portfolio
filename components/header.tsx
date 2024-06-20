"use client"

import Logo from "@/components/general/logo"
import { debounce } from "lodash"
import { type MouseEvent, useEffect, useRef, useState } from "react"
import MiniLogo from "@/components/general/mini-logo"
import tw from "@/utils/tw"
import LinkButton from "@/components/general/link-button"
import { FaBars, FaXmark } from "react-icons/fa6"
import Button from "@/components/general/button"
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
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    const checkScreenSize = debounce(
      () => setIsNarrowScreen(window.innerWidth < 315),
      100
    )

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
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) setHeaderHeight(entry.target.clientHeight)
      })

      resizeObserver.observe(headerElement)

      return () => {
        if (headerElement) resizeObserver.unobserve(headerElement)
      }
    }
  }, [])

  function handleMenuClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  const navButtonStyle = tw`rounded-lg p-3 text-mistGray-200 hover:bg-mistGray-500 hover:text-mistGray-50 active:bg-mistGray-800`
  const downloadButtonStyle = tw`rounded-lg bg-royalBlue-600 p-3 text-mistGray-50 hover:bg-royalBlue-700 hover:text-mistGray-50 active:bg-royalBlue-800`
  const menuMobileCommonStyles = tw`fixed z-30 h-screen w-3/4 duration-500 ease-in-out`

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-10 w-full bg-mistGray-600/60 backdrop-blur backdrop-filter"
    >
      <nav
        className="flex items-center justify-between px-1 lg:container sm:px-5 lg:px-0"
        aria-label="Main Navigation"
        role="navigation"
      >
        {isNarrowScreen ? <MiniLogo aria-hidden="true" /> : <Logo aria-hidden="true" />}
        <ul className="hidden items-center gap-5 font-Comfortaa font-bold lg:flex">
          {MENU_ITEMS.map((item, index) => (
            <li key={"nav-" + item.text}>
              <LinkButton href={item.url} className={navButtonStyle}>
                {item.text}
              </LinkButton>
            </li>
          ))}
          <li>
            <LinkButton
              href="/barataribeiro_resume.pdf"
              download="barataribeiro_resume"
              className={downloadButtonStyle}
            >
              Curriculum
            </LinkButton>
          </li>
        </ul>

        {/*MOBILE MENU*/}
        <Button
          className="block text-mistGray-50 lg:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Close Menu"}
          onClick={handleMenuClick}
        >
          {isMenuOpen ? <FaXmark size={26} /> : <FaBars size={26} />}
        </Button>
        <ul
          ref={mobileMenuRef}
          className={
            isMenuOpen
              ? twMerge(menuMobileCommonStyles, "right-0 bg-mistGray-600/90 lg:hidden")
              : twMerge(menuMobileCommonStyles, "-right-full w-3/4 bg-mistGray-600/30")
          }
          style={{ top: `${headerHeight}px` }}
        >
          {MENU_ITEMS.map((item, index) => (
            <li key={"nav-" + item.text}>
              <LinkButton
                href={item.url}
                className={tw`block px-4 py-3 text-xl text-mistGray-200 duration-300 hover:bg-mistGray-500 hover:text-mistGray-50 active:bg-mistGray-800`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {item.text}
              </LinkButton>
            </li>
          ))}
          <li>
            <LinkButton
              href="/barataribeiro_resume.pdf"
              download="barataribeiro_resume"
              className={tw`block px-4 py-3 text-xl text-mistGray-200 hover:bg-royalBlue-500 hover:text-mistGray-50 active:bg-royalBlue-800`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Curriculum
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}
