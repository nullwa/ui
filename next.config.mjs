import { createMDX } from 'fumadocs-mdx/next'
import { createNextStory } from '@fumadocs/story/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

/** @type{import('NextStoryOptions')} */
const withStory = createNextStory()

export default withStory(withMDX(config))
