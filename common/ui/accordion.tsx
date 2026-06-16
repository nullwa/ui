'use client'
import { type FC, type ReactNode, type ComponentProps, useState } from 'react'
import { cva, tm, type VariantProps } from '@/common/utils/tw-merge'

import { CaretRightIcon } from '@phosphor-icons/react'

type Props = ComponentProps<'div'> &
  VariantProps<typeof styles> &
  VariantProps<typeof accordionItemHeaderStyles> &
  VariantProps<typeof accordionItemStyles> & {
    items: AccordionItem[]
    active?: Set<number>
    multiple?: boolean
    toggler?: ReactNode
    withSeparator?: boolean
  }

const Accordion: FC<Props> = ({ items, active, multiple = false, toggler, withSeparator = false, spaced, size, variant, radius, className, ...rest }) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(active ?? new Set<number>())

  const handleToggleCollapse = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        if (!multiple) next.clear()
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className={tm(styles({ spaced }), className)} {...rest}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index)
        const isLast = index === items.length - 1

        return (
          <div key={index} data-open={isOpen ? '' : undefined} className={tm(accordionItemStyles({ variant, radius, withSeparator: withSeparator && !isLast }), spaced === 'none' && 'not-last:rounded-b-none not-first:rounded-t-none')}>
            <button type='button' aria-expanded={isOpen} className={accordionItemHeaderStyles({ size, variant })} onClick={() => handleToggleCollapse(index)}>
              {item.icon && <span className='flex shrink-0 items-center text-neutral-500 dark:text-neutral-400'>{item.icon}</span>}

              <div className='flex flex-1 flex-col items-start text-left'>
                <p className='font-medium leading-snug text-neutral-800 dark:text-neutral-200'>{item.title}</p>
                {item.description && <span className='mt-0.5 text-neutral-500 dark:text-neutral-400'>{item.description}</span>}
              </div>

              <span aria-hidden='true' className={tm('flex shrink-0 items-center text-neutral-500 transition-transform duration-200 dark:text-neutral-400', isOpen ? 'rotate-90' : 'rotate-0')}>
                {toggler ?? <CaretRightIcon />}
              </span>
            </button>

            <div role='region' className={tm('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className='overflow-hidden'>
                <div className='p-3 text-sm text-neutral-700 dark:text-neutral-300'>{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// #region types
type AccordionItem = {
  title: string
  icon?: ReactNode
  description?: string
  content: ReactNode
}
// #endregion

// #region styles
const styles = cva(['flex flex-col'], {
  variants: {
    spaced: {
      none: 'gap-0',
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    spaced: 'md',
  },
})

const accordionItemStyles = cva(['group/item overflow-hidden'], {
  variants: {
    variant: {
      default: '',
      solid: 'bg-neutral-100 dark:bg-neutral-800',
      filled: 'border border-neutral-300 dark:border-neutral-700',
      outline: 'border border-neutral-300 bg-transparent dark:border-neutral-700',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      rounded: 'rounded-2xl',
    },
    withSeparator: {
      true: 'border-b border-neutral-300 dark:border-neutral-700',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
    radius: 'md',
    withSeparator: false,
  },
})

const accordionItemHeaderStyles = cva(['w-full flex items-center cursor-pointer p-3', 'rounded-[inherit] group-data-open/item:rounded-b-none', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400'], {
  variants: {
    variant: {
      default: 'bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60',
      solid: 'bg-neutral-100 hover:bg-neutral-200/70 dark:bg-neutral-800 dark:hover:bg-neutral-700/70',
      filled: 'bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700/60',
      outline: 'bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/40',
    },
    size: {
      sm: 'text-xs [&_span]:text-[10px] gap-1',
      md: 'text-sm [&_span]:text-xs gap-1.5',
      lg: 'text-base [&_span]:text-sm gap-2',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
})
// #endregion

Accordion.displayName = 'Accordion'
export { Accordion, type AccordionItem }
