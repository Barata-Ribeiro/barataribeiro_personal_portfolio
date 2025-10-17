import { FileData } from '@/app/types/index';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export default async function Home() {
    const filePath = path.join(process.cwd(), 'app', 'data', 'data.json');
    const file = await readFile(filePath, 'utf8');
    const { projects, higherEducationCourses, intensiveCourses }: FileData = JSON.parse(file);

    return <main role="main" className="snap-y snap-mandatory"></main>;
}
