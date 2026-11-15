import '@/styles/global.css'
import { Geist } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider/next'

const geist = Geist({
  subsets: ['latin'],
})

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={geist.className} suppressHydrationWarning>
      <body className='flex flex-col min-h-screen'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
