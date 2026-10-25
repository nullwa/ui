import type { Meta, StoryObj } from '@storybook/nextjs'
import { Radio } from '@/common/ui/radio'
import { Badge } from '@/common/ui/badge'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible radio input with support for multiple states, sizes, labels, hints, badges, and left-label layout.',
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────────────────────
    label: {
      control: { type: 'text' },
      description: 'Text label rendered next to the radio button.',
      table: { category: 'Content' },
    },
    hint: {
      control: { type: 'text' },
      description: 'Helper text displayed below the label.',
      table: { category: 'Content' },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Appends a red asterisk to the label when true.',
      table: { category: 'Content', defaultValue: { summary: 'false' } },
    },
    // ── Appearance ───────────────────────────────────────────────────────────
    state: {
      control: { type: 'inline-radio' },
      options: ['default', 'brand', 'error', 'success', 'warning', 'info'],
      description: 'Visual colour state of the radio and its label.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the radio button and label text.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    // ── Layout ───────────────────────────────────────────────────────────────
    labelLeft: {
      control: { type: 'boolean' },
      description: 'Renders the label to the left of the radio button.',
      table: { category: 'Layout', defaultValue: { summary: 'false' } },
    },
    // ── Behaviour ────────────────────────────────────────────────────────────
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the radio — non-interactive with reduced opacity.',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } },
    },
    // ── Slots ─────────────────────────────────────────────────────────────────
    badges: {
      control: false,
      description: 'Array of ReactNodes rendered below the label as a badge row.',
      table: { category: 'Slots' },
    },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

// ─── Baseline ────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    id: 'default',
    label: 'Option one',
    state: 'default',
    size: 'md',
    disabled: false,
    labelLeft: false,
    required: false,
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const StateDefault: Story = {
  name: 'State / Default',
  args: { id: 'state-default', label: 'Default', state: 'default' },
}

export const StateBrand: Story = {
  name: 'State / Brand',
  args: { id: 'state-brand', label: 'Brand', state: 'brand' },
}

export const StateError: Story = {
  name: 'State / Error',
  args: { id: 'state-error', label: 'Error', state: 'error', hint: 'This selection is required.' },
}

export const StateSuccess: Story = {
  name: 'State / Success',
  args: { id: 'state-success', label: 'Success', state: 'success', hint: 'Great choice!' },
}

export const StateWarning: Story = {
  name: 'State / Warning',
  args: { id: 'state-warning', label: 'Warning', state: 'warning', hint: 'Proceed with caution.' },
}

export const StateInfo: Story = {
  name: 'State / Info',
  args: { id: 'state-info', label: 'Info', state: 'info', hint: 'Additional context available.' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: { id: 'size-sm', label: 'Small', size: 'sm' },
}

export const SizeMedium: Story = {
  name: 'Size / Medium',
  args: { id: 'size-md', label: 'Medium', size: 'md' },
}

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: { id: 'size-lg', label: 'Large', size: 'lg' },
}

// ─── Label ────────────────────────────────────────────────────────────────────

export const LabelRight: Story = {
  name: 'Label / Right (default)',
  args: { id: 'label-right', label: 'Label on the right', labelLeft: false },
}

export const LabelLeft: Story = {
  name: 'Label / Left',
  args: { id: 'label-left', label: 'Label on the left', labelLeft: true },
}

export const LabelWithHint: Story = {
  name: 'Label / With hint',
  args: { id: 'label-hint', label: 'Standard delivery', hint: 'Arrives in 5–7 business days' },
}

export const LabelRequired: Story = {
  name: 'Label / Required',
  args: { id: 'label-required', label: 'I agree to the terms', required: true },
}

export const LabelWithHintRequired: Story = {
  name: 'Label / Hint + required',
  args: {
    id: 'label-hint-required',
    label: 'Express delivery',
    hint: 'Arrives in 1–2 business days.',
    required: true,
  },
}

// ─── Badges ───────────────────────────────────────────────────────────────────

export const WithBadges: Story = {
  name: 'Badges / Single',
  args: {
    id: 'badges-single',
    label: 'Pro plan',
    hint: 'Everything in Free, plus advanced features.',
    badges: [<Badge key='popular'>Most popular</Badge>],
  },
}

export const WithMultipleBadges: Story = {
  name: 'Badges / Multiple',
  args: {
    id: 'badges-multiple',
    label: 'Enterprise plan',
    hint: 'Custom limits, SSO, and priority support.',
    badges: [<Badge key='new'>New</Badge>, <Badge key='recommended'>Recommended</Badge>],
  },
}

// ─── Behaviour ────────────────────────────────────────────────────────────────

export const Checked: Story = {
  args: { id: 'checked', label: 'Selected option', defaultChecked: true },
}

export const Disabled: Story = {
  args: { id: 'disabled', label: 'Unavailable option', disabled: true },
}

export const DisabledChecked: Story = {
  name: 'Disabled / Checked',
  args: { id: 'disabled-checked', label: 'Locked selection', disabled: true, defaultChecked: true },
}

// ─── Composition ─────────────────────────────────────────────────────────────

/** All 6 states at a glance. */
export const StateGrid: Story = {
  name: 'Composition / State grid',
  render: () => (
    <div className='flex flex-col gap-3'>
      {(['default', 'brand', 'error', 'success', 'warning', 'info'] as const).map((state) => (
        <Radio key={state} id={`grid-${state}`} name='state-grid' state={state} label={state} hint={`${state} hint text`} />
      ))}
    </div>
  ),
}

/** All three sizes with label + hint for visual alignment check. */
export const SizeComparison: Story = {
  name: 'Composition / Size comparison',
  render: () => (
    <div className='flex flex-col gap-4'>
      <Radio id='comp-sm' name='size-comp' size='sm' label='Small option' hint='Hint at small size' />
      <Radio id='comp-md' name='size-comp' size='md' label='Medium option' hint='Hint at medium size' />
      <Radio id='comp-lg' name='size-comp' size='lg' label='Large option' hint='Hint at large size' />
    </div>
  ),
}

/** Typical radio group — delivery options. */
export const DeliveryOptions: Story = {
  name: 'Composition / Delivery options',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Radio id='delivery-standard' name='delivery' label='Standard delivery' hint='5–7 business days · Free' defaultChecked />
      <Radio id='delivery-express' name='delivery' label='Express delivery' hint='1–2 business days · $9.99' />
      <Radio id='delivery-overnight' name='delivery' label='Overnight delivery' hint='Next business day · $24.99' />
    </div>
  ),
}

/** Pricing plan selection with badges. */
export const PricingPlans: Story = {
  name: 'Composition / Pricing plans',
  render: () => (
    <div className='flex flex-col gap-4'>
      <Radio id='plan-free' name='plan' label='Free' hint='Up to 3 projects, 1 GB storage.' />
      <Radio id='plan-pro' name='plan' label='Pro' hint='Unlimited projects, 100 GB storage, priority support.' state='brand' badges={[<Badge key='popular'>Most popular</Badge>]} defaultChecked />
      <Radio id='plan-enterprise' name='plan' label='Enterprise' hint='Custom limits, SSO, and a dedicated account manager.' badges={[<Badge key='new'>New</Badge>, <Badge key='custom'>Custom pricing</Badge>]} />
    </div>
  ),
}

/** Left-label layout — useful for settings-style lists. */
export const SettingsList: Story = {
  name: 'Composition / Settings list (label left)',
  render: () => (
    <div className='flex flex-col gap-3 w-64'>
      <Radio id='notif-all' name='notifications' label='All notifications' labelLeft hint='Every event in real time' defaultChecked />
      <Radio id='notif-important' name='notifications' label='Important only' labelLeft hint='Mentions and direct messages' />
      <Radio id='notif-none' name='notifications' label='None' labelLeft hint='Disable all alerts' />
    </div>
  ),
}

/** Error state in a group — e.g. validation feedback. */
export const ValidationError: Story = {
  name: 'Composition / Validation error',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Radio id='payment-card' name='payment' state='error' label='Credit card' hint='Please select a payment method to continue.' />
      <Radio id='payment-paypal' name='payment' state='error' label='PayPal' disabled />
    </div>
  ),
}
