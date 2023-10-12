import type { Metadata } from 'next'
import { Urbanist, Fuggles } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar/page'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-urbanist'
})

const fuggles = Fuggles({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fuggles'
})

export const metadata: Metadata = {
  title: 'Restaurante Yokz',
  description: 'Restaurante Yokz',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${urbanist.variable} ${fuggles.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html >
  )
}
