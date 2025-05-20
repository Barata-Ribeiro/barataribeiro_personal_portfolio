import LinkButton from "@/components/general/link-button"

export default function Logo() {
    return (
        <LinkButton className="py-5" href="/">
            <h1
                title="Barata Ribeiro Logo"
                className="font-Kanit text-mist-gray-950 xs:text-2xl flex items-center gap-1 text-xl font-semibold tracking-widest uppercase sm:text-4xl">
                Barata <span className="font-Comfortaa text-rio-grande-600 font-bold tracking-normal">&#60;/&#62;</span>{" "}
                Ribeiro
            </h1>
        </LinkButton>
    )
}
