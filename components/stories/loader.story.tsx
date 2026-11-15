import { defineStory } from '@/lib/story'

import { Loader } from '@/core/ui/loader'

export const story = defineStory({
  Component: Loader,
  args: {
    initial: { label: 'churning', variant: 'drive' },
  },
})
