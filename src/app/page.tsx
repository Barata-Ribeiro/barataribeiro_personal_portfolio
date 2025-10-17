import { FileData } from '@/app/types/index';
import Footer from '@/components/layout/footer';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export default async function Home() {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'data.json');
    const file = await readFile(filePath, 'utf8');

    const data: FileData = JSON.parse(file);

    return (
        <main role="main" className="snap-y snap-mandatory">
            <Footer />
        </main>
    );
}
