import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import tw from "@/utils/tw"

export default function Button({ children, className, ...props }: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
    const sortedClasses = tw`select-none text-center align-middle transition-all disabled:pointer-events-none disabled:cursor-not-allowed`
    const mergedClassName = twMerge(sortedClasses, className)

    return (
        <button className={mergedClassName} {...props}>
            {children}
        </button>
    )
}
