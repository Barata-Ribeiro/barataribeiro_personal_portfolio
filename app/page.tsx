import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <>
      <Header />
      <main className='lg:container px-1 flex flex-col gap-8 md:gap-6'>
        <Hero />
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
