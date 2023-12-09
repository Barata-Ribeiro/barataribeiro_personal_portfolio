import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <main className='container'>
        <Hero />
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
