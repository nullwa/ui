'use client'

import { type FC, useEffect, useState } from 'react'

import { tm } from '@/core/utils/tw-merge'

/**
 * // core/ui/loader.tsx
 * Figma source: → Loader;
 *
 * Paired with a shimmering label and a live elapsed timer
 * in mono tabular figures. Reduced motion freezes the grid
 * to its dim state; the timer still ticks.
 *
 * Needs the `pixel-on` and `shimmer-text` keyframes in theme.css.
 */

const Loader: FC<Props> = ({ label = 'churning', variant = 'drive', className }) => {
  const elapsed = useElapsed()
  const { delays, dur, round } = PATTERNS[variant]

  return (
    <div role='status' className={tm('flex w-fit items-center gap-2.5', className)}>
      <LoaderGrid delays={delays} dur={dur} round={round} />
      <span
        data-loader-anim
        className='bg-clip-text capitalize text-body-sm text-transparent'
        style={{ backgroundImage: SHIMMER, backgroundSize: '200% 100%', animation: 'shimmer-text 1.4s linear infinite' }}>
        {label}
      </span>
      {/* aria-hidden: a live region that changes every 100ms would spam screen readers */}
      <span aria-hidden className='font-mono text-body-sm text-foreground-muted tabular-nums'>
        {elapsed}
      </span>
    </div>
  )
}
Loader.displayName = 'Loader'
export { Loader }

// #region Types

/**
 * drive  — square cells, chevron wavefront driving right;
 *          the 650ms cycle is shorter than the sweep, so
 *          two fronts are always in flight
 * dots   — same wavefront, circular cells
 * orbit  — a comet lapping the grid perimeter
 */
type Variant = 'drive' | 'dots' | 'orbit'

type Props = {
  label?: string
  variant?: Variant
  className?: string
}
// #endregion

// #region Functions
const LoaderGrid = ({ delays, dur, round }: { delays: (number | null)[]; dur: number; round: boolean }) => {
  return (
    <span aria-hidden className='grid shrink-0 grid-cols-[repeat(3,4px)] gap-[1.5px]'>
      {delays.map((delay, index) => (
        <span
          key={index}
          data-loader-anim={delay === null ? undefined : ''}
          className={tm('size-1 bg-foreground-muted', round ? 'rounded-full' : 'rounded-[1px]')}
          style={{
            opacity: delay === null ? 0.07 : 0.15,
            animation: delay === null ? 'none' : `pixel-on ${dur}ms ease-in-out ${delay}ms infinite`,
          }}
        />
      ))}
    </span>
  )
}

const useElapsed = () => {
  const [ds, setDs] = useState(0)

  useEffect(() => {
    const start = Date.now()
    // Derive from the clock (not a counter) so the timer never drifts or lags when the tab is busy.
    const id = setInterval(() => setDs(Math.floor((Date.now() - start) / 100)), 100)
    return () => clearInterval(id)
  }, [])

  const total = ds / 10
  if (total < 60) return `${total.toFixed(1)}s`
  return `${Math.floor(total / 60)}m ${(total % 60).toFixed(1)}s`
}
// #endregion

// #region Consts
const SHIMMER = 'linear-gradient(90deg, var(--color-foreground-muted) 35%, var(--color-foreground-primary) 50%, var(--color-foreground-muted) 65%)'

const chevron = Array.from({ length: 9 }, (_, i) => {
  const r = Math.floor(i / 3)
  const c = i % 3
  return (c + Math.abs(r - 1)) * 90
})

const dots = Array.from({ length: 9 }, (_, i) => {
  const r = Math.floor(i / 3)
  const c = i % 3
  return (r + c) * 90
})

const orbit = Array.from({ length: 9 }, (_, i) => {
  const k = [0, 1, 2, 5, 8, 7, 6, 3].indexOf(i)
  return k === -1 ? null : k * 110
})

const PATTERNS: Record<Variant, { delays: (number | null)[]; dur: number; round: boolean }> = {
  drive: { delays: chevron, dur: 650, round: false },
  dots: { delays: dots, dur: 650, round: true },
  orbit: { delays: orbit, dur: 950, round: false },
}
// #endregion
