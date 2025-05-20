import tw from "@/utils/tw"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Button({ children, className, ...props }: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
    const sortedClasses = tw`text-center align-middle transition-all select-none disabled:pointer-events-none disabled:cursor-not-allowed`
    const mergedClassName = twMerge(sortedClasses, className)

    return (
        <button className={mergedClassName} {...props}>
            {children}
        </button>
    )
}
