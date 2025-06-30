import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '../utils/cn';

const keyVariants = cva(
  'inline-flex items-center justify-center font-mono select-none transition-all duration-150 ease-in-out relative',
  {
    variants: {
      size: {
        sm: 'h-7 px-2 text-xs min-w-[28px]',
        md: 'h-9 px-3 text-sm min-w-[36px]',
        lg: 'h-11 px-4 text-base min-w-[44px]'
      },

      design: {
        light: 'rounded-md border border-gray-300 bg-white text-gray-800 font-medium shadow-sm hover:shadow-md',
        dark: 'rounded-md border border-gray-600 bg-gray-800 text-gray-100 font-medium shadow-sm hover:shadow-md',
        mechanical:
          'rounded-md border-2 border-b-4 border-gray-400 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 font-bold shadow-lg'
      },

      state: {
        default: '',
        pressed: '',
        disabled: ''
      }
    },
    compoundVariants: [
      {
        design: 'light',
        state: 'pressed',
        class: 'bg-gray-100 border-gray-400 shadow-inner transform translate-y-0.5'
      },
      {
        design: 'light',
        state: 'disabled',
        class: 'bg-gray-50 border-gray-200 text-gray-400 shadow-none'
      },

      {
        design: 'dark',
        state: 'pressed',
        class: 'bg-gray-700 border-gray-500 shadow-inner transform translate-y-0.5'
      },
      {
        design: 'dark',
        state: 'disabled',
        class: 'bg-gray-900 border-gray-700 text-gray-500 shadow-none'
      },

      {
        design: 'mechanical',
        state: 'pressed',
        class:
          'border-b-2 bg-gradient-to-b from-gray-200 to-gray-300 transform translate-y-0.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]'
      },
      {
        design: 'mechanical',
        state: 'disabled',
        class: 'border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-400 shadow-none'
      }
    ],
    defaultVariants: {
      size: 'md',
      design: 'light',
      state: 'default'
    }
  }
);

type KeyProps = VariantProps<typeof keyVariants> & {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

const Key = forwardRef<HTMLElement, KeyProps>(
  ({ children, size, design, state, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'kbd';

    return (
      <Comp ref={ref} className={cn(keyVariants({ size, design, state }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Key.displayName = 'Key';

export default Key;
