'use client'

import { type FC, type ComponentProps, useEffect, useState } from 'react'
import { tm, cva, type VariantProps } from '@/core/utils/tw-merge'

/**
 * // core/ui/avatar.tsx
 * Figma source: → Avatar;
 *
 * Renders a photo when `src` is given, otherwise centered initials on a
 * tinted disc. Initial tints from Figma:
 */
const Avatar: FC<Props> = ({ src, fallback, alt, size, radius, className, ...rest }) => {
  const [isFailed, setIsFailed] = useState<boolean>(false)

  return (
    <div data-slot='avatar' className={tm(styles({ size, radius, className }))}>
      {src && !isFailed ?
        <img data-slot='avatar' src={src} alt={alt ?? fallback} onError={() => setIsFailed(true)} className='size-full object-cover' {...rest} />
      : <div data-slot='avatar-fallback' className='bg-gray-200 dark:bg-gray-700 text-gray-950 dark:text-gray-300 text-secondary flex size-full items-center justify-center text-sm leading-0'>
          {fallback}
        </div>
      }
    </div>
  )
}
Avatar.displayName = 'Avatar'
export { Avatar }

// #region types
type Props = Omit<ComponentProps<'img'>, 'size'> &
  VariantProps<typeof styles> & {
    src?: string
    alt: string
    fallback: string
  }
// #endregion

// #region consts
const styles = cva(['relative select-none shrink-0 overflow-hidden', 'flex items-center justify-center', 'cursor-pointer'], {
  variants: {
    size: {
      sm: 'size-7',
      md: 'size-8',
      lg: 'size-9',
    },
    radius: {
      rounded: 'rounded-full',
      squared: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'rounded',
  },
})
// #endregion
