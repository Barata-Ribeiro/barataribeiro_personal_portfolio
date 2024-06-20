import LinkButton from "@/components/general/link-button"

export default function Logo() {
  return (
    <LinkButton className="py-5" href="/">
      <h1
        title="Barata Ribeiro Logo"
        className="flex items-center gap-1 font-Kanit text-2xl font-semibold uppercase tracking-widest text-mistGray-950 md:text-3xl lg:text-4xl"
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
