import type { Meta, StoryObj } from '@storybook/nextjs'
import { InfoIcon, ShieldCheckIcon, PaletteIcon, UserIcon, CodeIcon, BellIcon, LockIcon } from '@phosphor-icons/react'
import { Accordion, type AccordionItem } from '@/common/ui/accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A vertically collapsing accordion component that allows users to reveal or hide sections of related content.',
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────────────────────
    items: {
      control: false,
      description: 'Array of accordion items containing title, content, icon, and description.',
      table: { category: 'Content' },
    },
    // ── Appearance ───────────────────────────────────────────────────────────
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'solid', 'filled', 'outline'],
      description: 'Visual style of the accordion items.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls padding and font size for the header and content.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    radius: {
      control: { type: 'inline-radio' },
      options: ['none', 'sm', 'md', 'lg', 'rounded'],
      description: 'Border-radius of the individual accordion items.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    spaced: {
      control: { type: 'inline-radio' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Vertical gap between accordion items.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    withSeparator: {
      control: { type: 'boolean' },
      description: 'Adds a bottom border between items (ideal when spaced="none").',
      table: { category: 'Appearance', defaultValue: { summary: 'false' } },
    },
    // ── Behaviour ────────────────────────────────────────────────────────────
    multiple: {
      control: { type: 'boolean' },
      description: 'Allows multiple accordion items to be expanded simultaneously.',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } },
    },
    active: {
      control: false,
      description: 'Set of indices for items that should be open by default.',
      table: { category: 'Behaviour' },
    },
    // ── Slots ─────────────────────────────────────────────────────────────────
    toggler: {
      control: false,
      description: 'Custom ReactNode for the toggle icon (replaces the default CaretRight).',
      table: { category: 'Slots' },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof Accordion>

// ─── Shared fixtures ──────────────────────────────────────────────────────────

const baseItems: AccordionItem[] = [
  {
    title: 'How does the design token system work?',
    description: 'Colors, spacing, typography, and radii are all tokenized.',
    content: (
      <div className='space-y-3'>
        <p>Design tokens provide a single source of truth for visual decisions across the entire product ecosystem.</p>
        <ul className='list-disc pl-5'>
          <li>Color scales and semantic colors</li>
          <li>Spacing and sizing primitives</li>
          <li>Typography and font scales</li>
          <li>Border radius and elevation tokens</li>
        </ul>
        <p>Components automatically consume these values, ensuring consistency between design and implementation.</p>
      </div>
    ),
  },
  {
    title: 'What accessibility standards are supported?',
    description: 'Built with accessibility-first principles.',
    content: (
      <div className='space-y-3'>
        <p>Every component is designed to support keyboard navigation, screen readers, and semantic HTML.</p>
        <div className='rounded-lg border border-neutral-200 p-4 dark:border-neutral-800'>
          <strong>Accessibility Features</strong>
          <ul className='mt-2 list-disc pl-5'>
            <li>Focus management</li>
            <li>Keyboard interactions</li>
            <li>ARIA attributes</li>
            <li>Reduced-motion support</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Can components be themed dynamically?',
    description: 'Switch themes without rebuilding the application.',
    content: (
      <div className='space-y-4'>
        <p>Themes are powered by CSS variables, allowing runtime updates and instant appearance changes.</p>
        <div className='grid grid-cols-3 gap-3'>
          <div className='rounded-md border border-neutral-200 p-3 dark:border-neutral-800'>
            <h4 className='font-medium'>Light</h4>
            <p className='text-sm text-neutral-500'>Clean and minimal.</p>
          </div>
          <div className='rounded-md border border-neutral-200 p-3 dark:border-neutral-800'>
            <h4 className='font-medium'>Dark</h4>
            <p className='text-sm text-neutral-500'>Optimized for low-light environments.</p>
          </div>
          <div className='rounded-md border border-neutral-200 p-3 dark:border-neutral-800'>
            <h4 className='font-medium'>Custom</h4>
            <p className='text-sm text-neutral-500'>Fully brandable themes.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'How are components tested and maintained?',
    description: 'Quality assurance across releases.',
    content: (
      <div className='space-y-3'>
        <p>Each component passes through a validation pipeline before release.</p>
        <ol className='list-decimal pl-5'>
          <li>Unit testing</li>
          <li>Visual regression testing</li>
          <li>Accessibility auditing</li>
          <li>Cross-browser verification</li>
        </ol>
        <blockquote className='border-l-2 border-neutral-300 pl-4 italic dark:border-neutral-700'>A component is only complete when it is accessible, documented, and tested.</blockquote>
      </div>
    ),
  },
]

const simpleItems: AccordionItem[] = [
  {
    title: 'Getting started',
    content: <p>Install the package and import the component you need.</p>,
  },
  {
    title: 'Configuration',
    content: <p>Pass props to configure behaviour and appearance at the call site.</p>,
  },
  {
    title: 'Customisation',
    content: <p>Override styles via className or extend the CVA variants in the source.</p>,
  },
]

const iconItems: AccordionItem[] = [
  {
    icon: <InfoIcon size={16} weight='bold' />,
    title: 'General information',
    description: 'Overview of the system.',
    content: <p>General settings and metadata for your account and workspace.</p>,
  },
  {
    icon: <ShieldCheckIcon size={16} weight='bold' />,
    title: 'Security & permissions',
    description: 'Access control and auth policies.',
    content: <p>Configure two-factor authentication, session timeouts, and role assignments.</p>,
  },
  {
    icon: <BellIcon size={16} weight='bold' />,
    title: 'Notifications',
    description: 'Alert preferences and channels.',
    content: <p>Choose which events trigger emails, push notifications, or in-app alerts.</p>,
  },
  {
    icon: <LockIcon size={16} weight='bold' />,
    title: 'Privacy',
    description: 'Data retention and visibility.',
    content: <p>Control what data is collected, how long it is stored, and who can access it.</p>,
  },
]

// ─── Baseline ────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    items: baseItems,
    variant: 'filled',
    size: 'md',
    radius: 'md',
    spaced: 'md',
    multiple: false,
    withSeparator: false,
  },
}

// ─── Variants ────────────────────────────────────────────────────────────────
export const VariantDefault: Story = {
  name: 'Variant / Default',
  args: { items: simpleItems, variant: 'default' },
}

export const VariantSolid: Story = {
  name: 'Variant / Solid',
  args: { items: simpleItems, variant: 'solid' },
}

export const VariantFilled: Story = {
  name: 'Variant / Filled',
  args: { items: simpleItems, variant: 'filled' },
}

export const VariantOutline: Story = {
  name: 'Variant / Outline',
  args: { items: simpleItems, variant: 'outline' },
}

// ─── Sizes ───────────────────────────────────────────────────────────────────
export const SizeSm: Story = {
  name: 'Size / Small',
  args: { items: simpleItems, size: 'sm' },
}

export const SizeMd: Story = {
  name: 'Size / Medium',
  args: { items: simpleItems, size: 'md' },
}

export const SizeLg: Story = {
  name: 'Size / Large',
  args: { items: simpleItems, size: 'lg' },
}

// ─── Radius ──────────────────────────────────────────────────────────────────
export const RadiusNone: Story = {
  name: 'Radius / None',
  args: { items: simpleItems, radius: 'none', variant: 'filled' },
}

export const RadiusMd: Story = {
  name: 'Radius / Medium',
  args: { items: simpleItems, radius: 'md', variant: 'filled' },
}

export const RadiusRounded: Story = {
  name: 'Radius / Rounded',
  args: { items: simpleItems, radius: 'rounded', variant: 'filled' },
}

// ─── Spacing ─────────────────────────────────────────────────────────────────
export const SpacedNone: Story = {
  name: 'Spaced / None',
  args: { items: simpleItems, spaced: 'none', radius: 'none' },
}

export const SpacedMd: Story = {
  name: 'Spaced / Medium',
  args: { items: simpleItems, spaced: 'md' },
}

export const SpacedLg: Story = {
  name: 'Spaced / Large',
  args: { items: simpleItems, spaced: 'lg' },
}

// ─── Behaviour ───────────────────────────────────────────────────────────────
export const SingleExpand: Story = {
  name: 'Behaviour / Single expand',
  args: {
    items: baseItems,
    multiple: false,
  },
}

export const MultipleExpand: Story = {
  name: 'Behaviour / Multiple expand',
  args: {
    items: baseItems,
    multiple: true,
  },
}

export const DefaultOpen: Story = {
  name: 'Behaviour / Default open',
  args: {
    items: baseItems,
    active: new Set([0]),
  },
}

export const MultipleDefaultOpen: Story = {
  name: 'Behaviour / Multiple default open',
  args: {
    items: baseItems,
    multiple: true,
    active: new Set([0, 2]),
  },
}

// ─── Separator ───────────────────────────────────────────────────────────────
export const WithSeparator: Story = {
  name: 'Separator / With separator',
  args: {
    items: simpleItems,
    variant: 'default',
    spaced: 'none',
    radius: 'none',
    withSeparator: true,
  },
}

// ─── Slots & Icons ───────────────────────────────────────────────────────────
export const WithIcons: Story = {
  name: 'Slots / Leading icons',
  args: {
    items: iconItems,
  },
}

export const CustomToggler: Story = {
  name: 'Slots / Custom toggler',
  args: {
    items: simpleItems,
    toggler: <span className='text-xs font-mono text-neutral-400 group-data-open/item:hidden'>show</span>,
  },
}

// ─── Composition ─────────────────────────────────────────────────────────────
export const FAQ: Story = {
  name: 'Composition / FAQ',
  args: {
    variant: 'default',
    spaced: 'none',
    radius: 'none',
    withSeparator: true,
    multiple: true,
    active: new Set([0]),
    items: [
      {
        title: 'Is there a free plan?',
        content: <p>Yes — the free tier includes up to 3 projects and 1 GB of storage with no credit card required.</p>,
      },
      {
        title: 'Can I cancel anytime?',
        content: <p>Absolutely. Subscriptions are month-to-month with no lock-in. Cancel from your billing settings with immediate effect.</p>,
      },
      {
        title: 'How is data backed up?',
        content: <p>All data is replicated across three availability zones with point-in-time restore for the last 30 days.</p>,
      },
      {
        title: 'Do you offer SLAs?',
        content: <p>Enterprise plans include a 99.9% uptime SLA with dedicated support and incident response.</p>,
      },
    ],
  },
}

export const SettingsPanel: Story = {
  name: 'Composition / Settings panel',
  args: {
    variant: 'outline',
    spaced: 'sm',
    radius: 'lg',
    multiple: true,
    active: new Set([0]),
    items: [
      {
        icon: <UserIcon size={16} weight='bold' />,
        title: 'Profile',
        description: 'Name, avatar, and contact details.',
        content: (
          <div className='space-y-2 text-sm'>
            <div className='flex items-center justify-between'>
              <span className='text-neutral-500'>Display name</span>
              <span className='font-medium'>Jordan Lee</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-neutral-500'>Email</span>
              <span className='font-medium'>jordan@example.com</span>
            </div>
          </div>
        ),
      },
      {
        icon: <CodeIcon size={16} weight='bold' />,
        title: 'API keys',
        description: 'Manage authentication tokens.',
        content: (
          <div className='space-y-2 text-sm'>
            <div className='flex items-center justify-between rounded-md bg-neutral-100 px-3 py-2 font-mono dark:bg-neutral-800'>
              <span className='truncate text-neutral-500'>sk_live_••••••••••••3f9a</span>
              <button type='button' className='ml-3 shrink-0 text-xs font-medium text-blue-500 hover:underline'>
                Reveal
              </button>
            </div>
          </div>
        ),
      },
      {
        icon: <PaletteIcon size={16} weight='bold' />,
        title: 'Appearance',
        description: 'Theme and display preferences.',
        content: (
          <div className='flex gap-2 text-sm'>
            {['System', 'Light', 'Dark'].map((t) => (
              <button key={t} type='button' className='rounded-md border border-neutral-200 px-3 py-1.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800'>
                {t}
              </button>
            ))}
          </div>
        ),
      },
    ],
  },
}
