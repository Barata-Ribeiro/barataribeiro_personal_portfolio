import Link from "next/link"
import { type AnchorHTMLAttributes } from "react"
import type { Url } from "next/dist/shared/lib/router/router"
import { twMerge } from "tailwind-merge"
import tw from "@/utils/tw"

export default function LinkButton({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const sortedClasses = tw`cursor-pointer select-none`
  const mergedClassName = twMerge(sortedClasses, className)

  return (
    <Link href={props.href as Url} className={mergedClassName} {...props}>
      {children}
    </Link>
  )
}
