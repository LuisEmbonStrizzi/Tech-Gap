import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className='text-cyan-500'>Hola mundo</div>
  )
}
