'use client'
import { type FC, type ComponentProps, ReactNode } from 'react'
import { cva, tm, type VariantProps } from '@/common/utils/tw-merge'

type Props = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof radioStyles> & {
    label?: string
    hint?: string
    required?: boolean
    /** Renders the label to the left of the radio button */
    labelLeft?: boolean
    badges?: ReactNode[]
  }

const Radio: FC<Props> = ({ id = 'radio', label, hint, required, labelLeft, badges, state, size, disabled, className, ...rest }) => {
  return (
    <div className={tm('flex items-start w-fit', label && 'gap-2', labelLeft && 'flex-row-reverse', disabled && 'cursor-not-allowed opacity-50')}>
      <div className={tm(radioStyles({ state, size }), className)}>
        <input type='radio' id={id} className='sr-only' disabled={disabled} {...rest} />
        <label htmlFor={id} className={tm('absolute inset-0 rounded-full', disabled ? 'cursor-not-allowed' : 'cursor-pointer')} />
      </div>

      {label && (
        <label htmlFor={id} className={tm('flex-1 flex flex-col gap-0.5', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}>
          <span className={tm(labelStyles({ state, size }))}>
            {label}
            {required && (
              <span aria-hidden='true' className='text-red-500 ml-0.5'>
                *
              </span>
            )}
          </span>
          {hint && (
            <p className={tm(hintStyles({ size }), 'wrap-break-word')} role={state === 'error' ? 'alert' : undefined}>
              {hint}
            </p>
          )}
          {badges && <div className='flex flex-wrap gap-1 mt-1'>{badges}</div>}
        </label>
      )}
    </div>
  )
}

// #region Styles
const radioStyles = cva(
  [
    'transition-[border-color,box-shadow]',
    'bg-gray-50/50 dark:bg-gray-900',
    'border-2 border-gray-200 dark:border-gray-700',
    'relative inline-flex items-center justify-center rounded-full shrink-0',
    'has-focus:ring-2',
    'has-checked:border-gray-700 dark:has-checked:border-gray-300',
  ],
  {
    variants: {
      state: {
        default: ['has-checked:border-gray-700 dark:has-checked:border-gray-300', 'has-focus:ring-gray-400/30 dark:has-focus:ring-gray-500/30'],
        brand: ['has-checked:border-brand-600 dark:has-checked:border-brand-400', 'has-focus:ring-brand-400/30 dark:has-focus:ring-brand-500/30'],
        error: ['has-checked:border-red-600 dark:has-checked:border-red-400', 'has-focus:ring-red-400/30 dark:has-focus:ring-red-500/30'],
        success: ['has-checked:border-green-600 dark:has-checked:border-green-400', 'has-focus:ring-green-400/30 dark:has-focus:ring-green-500/30'],
        warning: ['has-checked:border-yellow-600 dark:has-checked:border-yellow-400', 'has-focus:ring-yellow-400/30 dark:has-focus:ring-yellow-500/30'],
        info: ['has-checked:border-violet-600 dark:has-checked:border-violet-400', 'has-focus:ring-violet-400/30 dark:has-focus:ring-violet-500/30'],
      },
      size: {
        sm: 'size-3 has-checked:border-4',
        md: 'size-4 has-checked:border-6',
        lg: 'size-5 has-checked:border-7',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  },
)

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

Radio.displayName = 'Radio'
export { Radio }
export type { Props as RadioProps }
