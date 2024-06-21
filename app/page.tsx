import { promises as fs } from "fs"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import { Footer } from "@/components/footer"
import About from "@/components/sections/about"

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8")
  const { projects, higherEducationCourses, intensiveCourses } = JSON.parse(file)

  return (
    <main role="main" className="snap-y snap-mandatory">
      <Header />

      {/*SECTIONS*/}
      <Hero />
      <About />

      <Footer />
    </main>
  )
}
