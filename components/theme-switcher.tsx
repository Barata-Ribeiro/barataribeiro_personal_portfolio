"use client"

import { useCallback, useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

type Themes = "dark" | "light"

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<Themes>("light")

    useEffect(() => {
        setMounted(true)
        const savedTheme =
            (localStorage.getItem("theme") as Themes) ??
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        setTheme(savedTheme)
    }, [])

    useEffect(() => {
        if (mounted) {
            document.documentElement?.setAttribute("data-theme", theme)
            localStorage.setItem("theme", theme)
        }
    }, [mounted, theme])

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }, [])

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="bg-royal-blue-500/60 text-mist-gray-50 dark:bg-rio-grande-600/60 fixed bottom-0 left-0 z-1000 m-4 cursor-pointer rounded-full p-2 shadow-lg"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "light" ? <MdLightMode aria-hidden size={20} /> : <MdDarkMode aria-hidden size={20} />}
        </button>
    )
}
