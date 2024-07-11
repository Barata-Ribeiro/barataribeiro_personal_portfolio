import Link from "next/link"

export default function MiniLogo() {
    return (
        <Link className="flex items-center py-5 font-Kanit text-2xl font-semibold uppercase" href="/">
            <span className="mr-2 border-r-2 border-rioGrande-600 pr-2 font-Comfortaa font-bold tracking-normal text-rioGrande-600">
                &#60;/&#62;
            </span>
            <h1 title="Barata Ribeiro Logo" className="leading-none tracking-wider text-mistGray-950">
                Barata
                <br />
                Ribeiro
            </h1>
        </Link>
    )
}
