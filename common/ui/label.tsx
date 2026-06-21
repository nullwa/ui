'use client'
import { type FC, type ComponentProps } from 'react'
import { tm, cva, type VariantProps } from '@/common/utils/tw-merge'

type Props = ComponentProps<'label'> &
  VariantProps<typeof labelStyles> & {
    label: string
    hint?: string
    required?: boolean
  }

const Label: FC<Props> = ({ id, label, hint, required, state, size, ...rest }) => {
  return (
    <label htmlFor={id} {...rest}>
      <span className={tm(labelStyles({ state, size }))}>
        {label}
        {required && (
          <span aria-hidden='true' className='text-red-500'>
            *
          </span>
        )}
      </span>
      {hint && (
        <p className={tm(hintStyles({ size }), 'wrap-break-word')} role={state === 'error' ? 'alert' : undefined}>
          {hint}
        </p>
      )}
    </label>
  )
}

// #region styles
const labelStyles = cva('flex items-center gap-1 leading-none first-letter:uppercase', {
  variants: {
    state: {
      default: 'text-gray-700 dark:text-gray-300',
      brand: 'text-brand-600 dark:text-brand-400',
      error: 'text-red-600 dark:text-red-400',
      success: 'text-emerald-600 dark:text-emerald-400',
      warning: 'text-amber-600 dark:text-amber-400',
      info: 'text-violet-600 dark:text-violet-400',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
    },
  },
  defaultVariants: { state: 'default', size: 'md' },
})

const hintStyles = cva('leading-snug text-gray-500 first-letter:uppercase', {
  variants: {
    size: {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-xs',
    },
  },
  defaultVariants: { size: 'md' },
})
// #endregion

Label.displayName = 'Label'
export { Label }
