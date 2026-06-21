import type { Meta, StoryObj } from '@storybook/nextjs'
import { Checkbox } from '@/common/ui/checkbox'
import { Badge } from '@/common/ui/badge'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible checkbox input with support for multiple states, sizes, labels, hints, badges, and left-label layout.',
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────────────────────
    label: {
      control: { type: 'text' },
      description: 'Text label rendered next to the checkbox.',
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
      description: 'Visual colour state of the checkbox and its label.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the checkbox and label text.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    // ── Layout ───────────────────────────────────────────────────────────────
    labelLeft: {
      control: { type: 'boolean' },
      description: 'Renders the label to the left of the checkbox.',
      table: { category: 'Layout', defaultValue: { summary: 'false' } },
    },
    // ── Behaviour ────────────────────────────────────────────────────────────
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the checkbox — non-interactive with reduced opacity.',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } },
    },
    // ── Slots ─────────────────────────────────────────────────────────────────
    badges: {
      control: false,
      description: 'Array of ReactNodes rendered below the label as a badge row.',
      table: { category: 'Slots' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

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
  args: { id: 'state-error', label: 'Error', state: 'error', hint: 'This field is required.' },
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
  args: { id: 'label-hint', label: 'Send me updates', hint: 'Weekly digest of new features and tips' },
}

export const LabelRequired: Story = {
  name: 'Label / Required',
  args: { id: 'label-required', label: 'I agree to the terms', required: true },
}

export const LabelWithHintRequired: Story = {
  name: 'Label / Hint + required',
  args: {
    id: 'label-hint-required',
    label: 'I agree to the terms',
    hint: 'You must accept the terms to continue.',
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
        <Checkbox key={state} id={`grid-${state}`} state={state} label={state} hint={`${state} hint text`} />
      ))}
    </div>
  ),
}

/** All three sizes with label + hint for visual alignment check. */
export const SizeComparison: Story = {
  name: 'Composition / Size comparison',
  render: () => (
    <div className='flex flex-col gap-4'>
      <Checkbox id='comp-sm' size='sm' label='Small option' hint='Hint at small size' />
      <Checkbox id='comp-md' size='md' label='Medium option' hint='Hint at medium size' />
      <Checkbox id='comp-lg' size='lg' label='Large option' hint='Hint at large size' />
    </div>
  ),
}

/** Typical checkbox group — notification preferences. */
export const NotificationPreferences: Story = {
  name: 'Composition / Notification preferences',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Checkbox id='notif-email' label='Email notifications' hint='Receive updates via email' defaultChecked />
      <Checkbox id='notif-sms' label='SMS notifications' hint='Receive updates via text message' />
      <Checkbox id='notif-push' label='Push notifications' hint='Receive updates in the browser' />
    </div>
  ),
}

/** Feature selection with badges. */
export const FeatureSelection: Story = {
  name: 'Composition / Feature selection',
  render: () => (
    <div className='flex flex-col gap-4'>
      <Checkbox id='feature-basic' label='Basic analytics' hint='Page views, sessions, and bounce rate.' defaultChecked />
      <Checkbox id='feature-advanced' label='Advanced analytics' hint='Funnels, cohorts, and retention reports.' state='brand' badges={[<Badge key='popular'>Most popular</Badge>]} />
      <Checkbox id='feature-export' label='Data export' hint='Download raw data as CSV or JSON.' badges={[<Badge key='new'>New</Badge>, <Badge key='pro'>Pro only</Badge>]} />
    </div>
  ),
}

/** Left-label layout — useful for settings-style lists. */
export const SettingsList: Story = {
  name: 'Composition / Settings list (label left)',
  render: () => (
    <div className='flex flex-col gap-3 w-64'>
      <Checkbox id='setting-marketing' label='Marketing emails' labelLeft hint='Promotions and offers' defaultChecked />
      <Checkbox id='setting-product' label='Product updates' labelLeft hint='New features and improvements' />
      <Checkbox id='setting-security' label='Security alerts' labelLeft hint='Sign-ins and account changes' defaultChecked />
    </div>
  ),
}

/** Error state in a group — e.g. validation feedback. */
export const ValidationError: Story = {
  name: 'Composition / Validation error',
  render: () => (
    <div className='flex flex-col gap-3'>
      <Checkbox id='terms' state='error' label='I agree to the terms and conditions' hint='You must accept the terms to continue.' />
      <Checkbox id='privacy' state='error' label='I have read the privacy policy' disabled />
    </div>
  ),
}
