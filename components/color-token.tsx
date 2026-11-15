import { SlidersVertical } from 'lucide-react'

type ColorToken = {
  label: string
  className: string
  on?: string
  kind?: 'text'
}

const colorTokens: Record<string, ColorToken[]> = {
  primitive: [
    { label: 'White', className: 'bg-white', on: 'text-black!' },
    { label: 'Black', className: 'bg-black', on: 'text-white!' },
    { label: 'Snow', className: 'bg-snow', on: 'text-eclipse!' },
    { label: 'Eclipse', className: 'bg-eclipse', on: 'text-snow!' },
  ],
  neutral: [
    { label: 'Default', className: 'bg-default' },
    { label: 'Hover', className: 'bg-default-hover' },
    { label: 'Foreground', className: 'bg-default-foreground', on: 'text-default!' },
  ],
  background: [
    { label: 'Main', className: 'bg-background-main' },
    { label: 'Primary', className: 'bg-background-primary' },
    { label: 'Secondary', className: 'bg-background-secondary' },
    { label: 'Tertiary', className: 'bg-background-tertiary' },
    { label: 'Inverse', className: 'bg-background-inverse', on: 'text-background-main!' },
  ],
  foreground: [
    { label: 'Primary', className: 'text-foreground-primary', kind: 'text' },
    { label: 'Muted', className: 'text-foreground-muted', kind: 'text' },
    { label: 'Segment', className: 'text-foreground-segment', kind: 'text' },
  ],
  brand: [
    { label: 'Brand', className: 'bg-brand', on: 'text-brand-foreground!' },
    { label: 'Hover', className: 'bg-brand-hover', on: 'text-brand-foreground!' },
    { label: 'Foreground', className: 'bg-brand-foreground', on: 'text-brand!' },
    { label: 'Alt', className: 'bg-brand-alt', on: 'text-brand-alt-foreground!' },
    { label: 'Alt hover', className: 'bg-brand-alt-hover', on: 'text-brand-alt-foreground!' },
    { label: 'Alt foreground', className: 'bg-brand-alt-foreground', on: 'text-brand-alt!' },
  ],
  success: [
    { label: 'Success', className: 'bg-success', on: 'text-success-foreground!' },
    { label: 'Hover', className: 'bg-success-hover', on: 'text-success-foreground!' },
    { label: 'Foreground', className: 'bg-success-foreground', on: 'text-success!' },
    { label: 'Alt', className: 'bg-success-alt', on: 'text-success-alt-foreground!' },
    { label: 'Alt hover', className: 'bg-success-alt-hover', on: 'text-success-alt-foreground!' },
    { label: 'Alt foreground', className: 'bg-success-alt-foreground', on: 'text-success-alt!' },
  ],
  warning: [
    { label: 'Warning', className: 'bg-warning', on: 'text-warning-foreground!' },
    { label: 'Hover', className: 'bg-warning-hover', on: 'text-warning-foreground!' },
    { label: 'Foreground', className: 'bg-warning-foreground', on: 'text-warning!' },
    { label: 'Alt', className: 'bg-warning-alt', on: 'text-warning-alt-foreground!' },
    { label: 'Alt hover', className: 'bg-warning-alt-hover', on: 'text-warning-alt-foreground!' },
    { label: 'Alt foreground', className: 'bg-warning-alt-foreground', on: 'text-warning-alt!' },
  ],
  danger: [
    { label: 'Error', className: 'bg-error', on: 'text-error-foreground!' },
    { label: 'Hover', className: 'bg-error-hover', on: 'text-error-foreground!' },
    { label: 'Foreground', className: 'bg-error-foreground', on: 'text-error!' },
    { label: 'Alt', className: 'bg-error-alt', on: 'text-error-alt-foreground!' },
    { label: 'Alt hover', className: 'bg-error-alt-hover', on: 'text-error-alt-foreground!' },
    { label: 'Alt foreground', className: 'bg-error-alt-foreground', on: 'text-error-alt!' },
  ],
  info: [
    { label: 'Info', className: 'bg-info', on: 'text-info-foreground!' },
    { label: 'Hover', className: 'bg-info-hover', on: 'text-info-foreground!' },
    { label: 'Foreground', className: 'bg-info-foreground', on: 'text-info!' },
    { label: 'Alt', className: 'bg-info-alt', on: 'text-info-alt-foreground!' },
    { label: 'Alt hover', className: 'bg-info-alt-hover', on: 'text-info-alt-foreground!' },
    { label: 'Alt foreground', className: 'bg-info-alt-foreground', on: 'text-info-alt!' },
  ],
  field: [
    { label: 'Background', className: 'bg-field-background', on: 'text-field-foreground!' },
    { label: 'Hover', className: 'bg-field-hover', on: 'text-field-foreground!' },
    { label: 'Focus', className: 'bg-field-focus', on: 'text-field-foreground!' },
    { label: 'Placeholder', className: 'bg-field-placeholder', on: 'text-field-background!' },
    { label: 'Foreground', className: 'bg-field-foreground', on: 'text-field-background!' },
  ],
  surface: [
    { label: 'Surface', className: 'bg-surface' },
    { label: 'Secondary', className: 'bg-surface-secondary' },
    { label: 'Tertiary', className: 'bg-surface-tertiary' },
  ],
  separator: [
    { label: 'Separator', className: 'bg-seperator' },
    { label: 'Secondary', className: 'bg-seperator-secondary' },
    { label: 'Tertiary', className: 'bg-seperator-tertiary' },
  ],
  other: [
    { label: 'Border', className: 'bg-border' },
    { label: 'Backdrop', className: 'bg-backdrop', on: 'text-snow!' },
    { label: 'Overlay', className: 'bg-overlay' },
    { label: 'Segment', className: 'bg-segment' },
  ],
}

const modeClass = { light: 'light-mode', dark: 'dark-mode' } as const

export function ColorTokens({ group, single = false }: { group: keyof typeof colorTokens; single?: boolean }) {
  const tokens = colorTokens[group]
  const modes = single ? (['light'] as const) : (['light', 'dark'] as const)

  return (
    <div className='not-prose my-6 grid gap-4'>
      {modes.map((mode) => (
        <div key={mode} className={`${modeClass[mode]} rounded-xl border border-border bg-background-main p-4`}>
          {!single && (
            <div className='flex items-center gap-2 pb-4 text-sm font-medium capitalize text-default-foreground!'>
              <SlidersVertical className='size-4' />
              {mode}
            </div>
          )}

          <div className={`grid grid-cols-2 gap-3 md:grid-cols-4 ${single ? '' : 'lg:grid-cols-6'}`}>
            {tokens.map((token) => (
              <div key={token.className} className='overflow-hidden rounded-lg border border-border bg-surface'>
                {token.kind === 'text' ?
                  <div className='flex h-20 items-center bg-background-main px-3'>
                    <span className={`${token.className} text-2xl font-semibold`}>Aa</span>
                  </div>
                : <div className={`${token.className} ${token.on ?? 'text-default-foreground!'} flex h-20 items-end px-3 py-2 text-sm`}>{token.label}</div>}
                <div className='space-y-0.5 px-3 py-2'>
                  {token.kind === 'text' && <div className='text-sm text-default-foreground!'>{token.label}</div>}
                  <div className='font-mono text-xs text-foreground-muted!'>{token.className}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
