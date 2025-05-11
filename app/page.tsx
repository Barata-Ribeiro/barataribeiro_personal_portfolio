import { Footer } from "@/components/footer"
import Header from "@/components/header"
import About from "@/components/sections/about"
import Education, { HigherEducationCourse, IntensiveCourse } from "@/components/sections/education"
import Hero from "@/components/sections/hero"
import Projects, { Project } from "@/components/sections/projects"
import ThemeSwitcher from "@/components/theme-switcher"
import { readFile } from "fs/promises"
import path from "path"

interface FileData {
    projects: Project[]
    higherEducationCourses: HigherEducationCourse[]
    intensiveCourses: IntensiveCourse[]
}

export default async function Home() {
    const filePath = path.join(process.cwd(), "app", "data", "data.json")
    const file = await readFile(filePath, "utf8")
    const { projects, higherEducationCourses, intensiveCourses }: FileData = JSON.parse(file)

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
