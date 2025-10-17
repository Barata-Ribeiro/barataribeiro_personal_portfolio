import Link from 'next/link';

export default function MiniLogo() {
    return (
        <Link
            href="/"
            aria-label="Barata Ribeiro Logo"
            title="Barata Ribeiro Logo"
            className="flex items-center py-5 font-Kanit text-2xl font-semibold uppercase"
        >
            <span className="mr-2 border-r-2 border-secondary pr-2 font-Comfortaa font-bold tracking-normal text-secondary">
                &#60;/&#62;
            </span>
            <span title="Barata Ribeiro Logo" className="leading-none tracking-wider text-background">
                Barata
                <br />
                Ribeiro
            </span>
        </Link>
    );
}
