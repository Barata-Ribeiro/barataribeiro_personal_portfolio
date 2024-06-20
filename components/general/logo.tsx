import LinkButton from "@/components/general/link-button"

export default function Logo() {
  return (
    <LinkButton className="py-5" href="/">
      <h1
        title="Barata Ribeiro Logo"
        className="flex items-center gap-1 font-Kanit text-xl font-semibold uppercase tracking-widest text-mistGray-950 xs:text-2xl sm:text-4xl"
      >
        Barata{" "}
        <span className="font-Comfortaa font-bold tracking-normal text-rioGrande-600">
          &#60;/&#62;
        </span>{" "}
        Ribeiro
      </h1>
    </LinkButton>
  )
}
