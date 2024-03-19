import { About } from "@/components/About"
import { Education } from "@/components/Education"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { promises as fs } from "fs"

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8")
  const { projects, higherEducationCourses, intensiveCourses } =
    JSON.parse(file)

  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 bg-mistGray-100 px-1 shadow-md shadow-mistGray-500 lg:container dark:bg-mistGray-950 dark:shadow-black">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Education
          intensiveCourses={intensiveCourses}
          highEducationCourses={higherEducationCourses}
        />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  )
}
