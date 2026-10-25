import type { Meta, StoryObj } from '@storybook/nextjs'
import { Label } from '@/common/ui/label'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A form label with built-in support for validation states, required indicators, and size variants. Pairs with any form control via the `htmlFor` / `id` relationship.',
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────────────────────
    label: {
      control: { type: 'text' },
      description: 'The visible label text. First letter is automatically uppercased.',
      table: { category: 'Content' },
    },
    hint: {
      control: { type: 'text' },
      description: 'Additional information or instructions for the label.',
      table: { category: 'Content' },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Appends a red asterisk (*) to signal that the field is required.',
      table: { category: 'Content', defaultValue: { summary: 'false' } },
    },
    // ── Appearance ───────────────────────────────────────────────────────────
    state: {
      control: { type: 'inline-radio' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'Visual validation state — drives the label colour.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the font size of the label.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof Label>

// ─── Baseline ────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: 'Email address',
    id: 'email',
  },
}

// ─── Required ────────────────────────────────────────────────────────────────

export const Required: Story = {
  args: {
    label: 'Full name',
    id: 'full-name',
    required: true,
  },
}

// ─── hint ────────────────────────────────────────────────────────────────────

export const WithHint: Story = {
  args: {
    label: 'Email address',
    id: 'email',
    hint: 'We will send you a confirmation email to this address.',
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: {
    label: 'Small label',
    id: 'small',
    size: 'sm',
  },
}

export const SizeMedium: Story = {
  name: 'Size / Medium',
  args: {
    label: 'Medium label',
    id: 'medium',
    size: 'md',
  },
}

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: {
    label: 'Large label',
    id: 'large',
    size: 'lg',
  },
}

// ─── Composition ─────────────────────────────────────────────────────────────

/** All four validation states side-by-side for a quick visual check. */
export const StateComparison: Story = {
  name: 'Composition / State comparison',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Label label='Default state' id='s-default' state='default' />
      <Label label='Brand state' id='s-brand' state='brand' />
      <Label label='Error state' id='s-error' state='error' />
      <Label label='Success state' id='s-success' state='success' />
      <Label label='Warning state' id='s-warning' state='warning' />
      <Label label='Info state' id='s-info' state='info' />
    </div>
  ),
}

/** All three sizes stacked for a quick visual comparison. */
export const SizeComparison: Story = {
  name: 'Composition / Size comparison',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Label label='Small label' id='c-sm' size='sm' />
      <Label label='Medium label' id='c-md' size='md' />
      <Label label='Large label' id='c-lg' size='lg' />
    </div>
  ),
}

/** Required asterisk across every state. */
export const RequiredStates: Story = {
  name: 'Composition / Required across states',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Label label='Default required' id='r-default' state='default' required />
      <Label label='Brand required' id='r-brand' state='brand' required />
      <Label label='Error required' id='r-error' state='error' required />
      <Label label='Success required' id='r-success' state='success' required />
      <Label label='Warning required' id='r-warning' state='warning' required />
      <Label label='Info required' id='r-info' state='info' required />
    </div>
  ),
}
