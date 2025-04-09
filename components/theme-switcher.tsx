"use client"

import { useCallback, useEffect, useState } from "react"
import { MdDarkMode, MdLightMode }          from "react-icons/md"

export default function ThemeSwitcher() {
    const [ theme, setTheme ] = useState("light")
    
    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ??
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        setTheme(savedTheme)
    }, [])
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
    }, [ theme ])
    
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }, [])
    
    return (
        <button
            onClick={ toggleTheme }
            className="bg-royal-blue-500/60 text-mist-gray-50 dark:bg-rio-grande-600/60 fixed bottom-0 left-0 z-1000 m-4 rounded-full p-2 shadow-lg"
            aria-label="Toggle Theme">
            { theme === "light" ? <MdLightMode /> : <MdDarkMode /> }
        </button>
    )
}
