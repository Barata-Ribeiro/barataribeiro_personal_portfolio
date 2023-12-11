import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const { projects, higherEducationCourses, intensiveCourses } =
    JSON.parse(file);

  return (
    <>
      <Header />
      <main className='lg:container px-1 flex flex-col gap-12 md:gap-8 shadow-lg bg-mistGray-100 dark:bg-mistGray-900'>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Education />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
