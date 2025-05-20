import Link from "next/link"

export default function MiniLogo() {
    return (
        <Link className="font-Kanit flex items-center py-5 text-2xl font-semibold uppercase" href="/">
            <span className="border-rio-grande-600 font-Comfortaa text-rio-grande-600 mr-2 border-r-2 pr-2 font-bold tracking-normal">
                &#60;/&#62;
            </span>
            <h1 title="Barata Ribeiro Logo" className="text-mist-gray-950 leading-none tracking-wider">
                Barata
                <br />
                Ribeiro
            </h1>
        </Link>
    )
}
