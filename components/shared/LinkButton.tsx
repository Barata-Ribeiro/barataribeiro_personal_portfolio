import { AnchorHTMLAttributes, forwardRef } from "react"

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  additionalStyles?: string
}

/**
 * LinkButton component
 *
 * This component is used to create a link button with additional styles.
 *
 * @param additionalStyles - Additional styles to be applied to the link button
 * @param props - Other props to be passed to the anchor element
 * @param ref - Ref object to be passed to the anchor element
 * @returns - The link button element
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ additionalStyles, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={`cursor-pointer select-none rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-4 ${additionalStyles}`}
      >
        {props.children}
      </a>
    )
  }
)

LinkButton.displayName = "LinkButton"
