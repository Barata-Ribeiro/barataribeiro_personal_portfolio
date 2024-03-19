"use client"

import {
  AnchorHTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
  useState,
} from "react"

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  additionalStyles?: string
  icon: ReactNode
}

export const SocialButton = forwardRef<HTMLAnchorElement, SocialButtonProps>(
  ({ additionalStyles, icon, ...props }, ref) => {
    const [hovered, setHovered] = useState(false)
    const buttonRef = useRef<HTMLSpanElement | null>(null)

    return (
      <a
        ref={ref}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        {...props}
        className={`flex items-center rounded-lg font-Kanit font-semibold tracking-wider ${additionalStyles} transition`}
      >
        {icon}
        <p
          style={{ width: hovered ? buttonRef.current?.offsetWidth || 0 : 0 }}
          className="overflow-x-hidden transition-all duration-300 ease-out"
        >
          <span ref={buttonRef} className="px-1.5">
            {props.children}
          </span>
        </p>
      </a>
    )
  }
)

SocialButton.displayName = "SocialButton"
