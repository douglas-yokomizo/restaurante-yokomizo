import Link from 'next/link'
import Image from 'next/image'
import { Fuggles } from 'next/font/google'
import sushi from '../../../assets/images/sushi-logo.png'

const fuggles = Fuggles({ weight: '400', subsets: ['latin'] })

export const Logo = () => {
    return (
        <Link href='/' className={fuggles.className}>
            <div className='flex items-center gap-5'>
                <Image src={sushi} alt='sushi logo' className='w-16' />
                <h1 className='text-7xl'>
                    Yokz
                </h1>
            </div>
        </Link>
    )
}
