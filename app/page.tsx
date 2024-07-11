import { promises as fs } from "fs"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import { Footer } from "@/components/footer"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import ThemeSwitcher from "@/components/theme-switcher"

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8")
    const { projects, higherEducationCourses, intensiveCourses } = JSON.parse(file)

    return (
        <main role="main" className="snap-y snap-mandatory">
            <Header />

            {/*SECTIONS*/}
            <Hero />
            <About />
            <Projects projects={projects} />
            <Education intensiveCourses={intensiveCourses} highEducationCourses={higherEducationCourses} />

            <Footer />
            <ThemeSwitcher />
        </main>
    )
}
