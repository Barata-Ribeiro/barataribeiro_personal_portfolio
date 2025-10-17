import Link from 'next/link';

export default function MiniLogo({ isSidebar }: Readonly<{ isSidebar?: boolean }>) {
    return (
        <Link
            {...(isSidebar ? { 'data-sidebar-logo': true } : {})}
            href="/"
            aria-label="Barata Ribeiro Logo"
            title="Barata Ribeiro Logo"
            className="flex items-center py-5 font-Kanit text-2xl font-semibold uppercase select-none data-sidebar-logo:pointer-events-none"
        >
            <span className="mr-2 border-r-2 border-secondary pr-2 font-Comfortaa font-bold tracking-normal text-secondary">
                &#60;/&#62;
            </span>
            <span
                {...(isSidebar ? { 'data-sidebar-logo': true } : {})}
                title="Barata Ribeiro Logo"
                className="leading-none tracking-wider text-background data-sidebar-logo:text-foreground"
            >
                Barata
                <br />
                Ribeiro
            </span>
        </Link>
    );
}
