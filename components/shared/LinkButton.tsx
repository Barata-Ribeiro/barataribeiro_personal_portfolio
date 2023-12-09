import { AnchorHTMLAttributes, forwardRef } from 'react';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  additionalStyles?: string;
};

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
        className={`text-sm font-medium focus:outline-none focus:ring-4 rounded-lg select-none cursor-pointer transition-all ${additionalStyles}`}>
        {props.children}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';
