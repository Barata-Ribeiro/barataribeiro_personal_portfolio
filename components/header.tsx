"use client"

import Logo from "@/components/general/logo"
import { debounce } from "lodash"
import { useEffect, useState } from "react"
import MiniLogo from "@/components/general/mini-logo"
import tw from "@/utils/tw"
import LinkButton from "@/components/general/link-button"
import { FaBars, FaXmark } from "react-icons/fa6"
import Button from "@/components/general/button"

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

  useEffect(() => {
    const checkScreenSize = debounce(
      () => setIsNarrowScreen(window.innerWidth < 315),
      100
    )
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const navButtonStyle = tw`rounded-lg p-3 text-mistGray-200 hover:bg-mistGray-500 hover:text-mistGray-50`
  const downloadButtonStyle = tw`rounded-lg bg-royalBlue-600 p-3 text-mistGray-50 hover:bg-royalBlue-700 hover:text-mistGray-50 active:bg-royalBlue-800`

  return (
    <header className="fixed top-0 z-10 w-full bg-mistGray-600/60 backdrop-blur">
      <nav
        className="container flex items-center justify-between"
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
        <Button
          className="block text-mistGray-50 lg:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Close Menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaXmark size={26} /> : <FaBars size={26} />}
        </Button>
      </nav>
    </header>
  )
}
