import type { Metadata } from 'next'
import { Urbanist, Fuggles } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './contexts/cartContext'
import { CounterProvider } from './contexts/counterContext'
import NavBar from './components/NavBar'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'

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
        <Toaster position='top-right' />
        <CounterProvider>
          <CartProvider>
            <NavBar />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </CartProvider>
        </CounterProvider>
      </body>
    </html >
  )
}
