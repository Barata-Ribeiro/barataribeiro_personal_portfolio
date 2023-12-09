import { AnchorHTMLAttributes, forwardRef } from 'react';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * @name LinkButton component
 *
 * @todo Accessibility, tailwind css classes for text color, bg color, and padding.
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className='text-sm font-medium focus:outline-none focus:ring-4 rounded-lg'>
        {props.children}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';
