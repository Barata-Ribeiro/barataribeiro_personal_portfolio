'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'motion/react';

const buttonVariants = cva(
    "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg text-sm font-medium whitespace-nowrap outline-none [background:linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:background_0.3s_var(--liquid-button-delay,0s),color_0.3s_var(--liquid-button-delay,0s),background-position_0.3s_calc(0.3s-var(--liquid-button-delay,0s))] hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%] focus:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: 'bg-muted! text-primary [--liquid-button-color:var(--primary)] hover:text-primary-foreground',
                outline:
                    'border bg-background! [--liquid-button-color:var(--primary)] dark:border-input dark:bg-input/30!',
                secondary:
                    'bg-muted! text-secondary [--liquid-button-color:var(--secondary)] hover:text-secondary-foreground',
            },
            size: {
                default: 'h-10 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-9 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
                lg: 'h-12 rounded-xl px-8 has-[>svg]:px-6',
                icon: 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

type LiquidButtonProps = HTMLMotionProps<'button'> & VariantProps<typeof buttonVariants>;

function LiquidButton({ className, variant, size, ...props }: Readonly<LiquidButtonProps>) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { LiquidButton, type LiquidButtonProps };
