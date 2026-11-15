import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import { ColorTokens } from '@/components/color-token'

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ColorTokens,
    ...components,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
