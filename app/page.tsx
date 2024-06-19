import { promises as fs } from "fs"

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8")
  const { projects, higherEducationCourses, intensiveCourses } = JSON.parse(file)

  return (
    <>
      <h1>Hero!</h1>
    </>
  )
}
