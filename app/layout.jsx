import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darkysadow\'s First Shopify project',
  description: 'Stack: Tailwind CSS, Next.js Shopify Storefront API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'min-h-screen bg-slate-50 bg-gradient-to-b text-black flex flex-col w-[100%] items-center'}>
        <header className='flex flex-row justify-center items-center w-[100%] mb-2 '>
          <nav className='py-3 container flex flex-row justify-between items-center relative before:absolute before:w-[100%] before:h-[0.5px] before:bg-slate-900 before:bottom-0 before:rounded '>
            <p className='font-extrabold text-2xl'>Logo.</p>
            <ul className='flex flex-row justify-center items-center gap-5 font-medium'>
              <li><Link href={'/tables'}>Tables</Link></li>
              <li><Link href={'/'}>Home</Link></li>
            </ul>
          </nav>
        </header>
        <main className='flex flex-col items-center w-[100%]'>
          {children}
        </main>
        <footer className='flex flex-row justify-center items-center w-[100%] bg-zinc-400 mt-auto'>
        <nav className='py-3 container flex flex-row-reverse justify-between items-center'>
            <p className='font-extrabold text-2xl'>Logo.</p>
            <ul className='flex flex-row justify-center items-center gap-5 font-medium'>
              <li><Link href={'/tables'}>Tables</Link></li>
              <li><Link href={'/'}>Home</Link></li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  )
}
