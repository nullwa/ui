import { defineStory } from '@/lib/story'
import { Avatar } from '@/core/ui/avatar'

export const story = defineStory({
  Component: Avatar,
  args: {
    initial: { src: '', alt: '', fallback: 'sw', size: 'md', radius: 'rounded' },
  },
})
