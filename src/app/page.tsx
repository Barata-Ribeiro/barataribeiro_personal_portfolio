import { FileData } from '@/app/types/index';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export default async function Home() {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'data.json');
    const file = await readFile(filePath, 'utf8');

    const data: FileData = JSON.parse(file);

    return (
        <main role="main" className="snap-y snap-mandatory">
            <Header />
            <Hero />
            <About />
            <Projects projects={data.projects} />
            <Footer />
        </main>
    );
}
