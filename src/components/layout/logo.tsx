import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" aria-label="Barata Ribeiro Logo" title="Barata Ribeiro Logo" className="py-5">
            <span className="flex items-center gap-1 font-Kanit text-xl font-semibold tracking-widest text-background uppercase xs:text-2xl sm:text-4xl">
                Barata <span className="font-Comfortaa font-bold tracking-normal text-secondary">&#60;/&#62;</span>{' '}
                Ribeiro
            </span>
        </Link>
    );
}
