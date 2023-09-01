import TopSidebar from '@/components/shared/TopSidebar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/shared/LeftSidebar'
import BottomSidebar from '@/components/shared/BottomSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopSidebar />

        <LeftSidebar />
        {children}

        <BottomSidebar/>
        </body>
    </html>
  )
}
