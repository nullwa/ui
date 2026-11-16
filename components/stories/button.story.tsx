import { defineStory } from '@/lib/story'
import { Button } from '@/core/ui/button'

export const story = defineStory({
  Component: Button,
  args: {
    initial: { label: 'Click me', state: 'default', variant: 'solid', size: 'md', radius: 'md', disabled: false, loading: false, suffix: undefined, prefix: undefined },
  },
})
