import Image from 'next/image'
import Link from 'next/link'
import cartLogo from '@/assets/images/cart-icon.png'

export const Cart = () => {
    return (
        <Link href={'Cart'}>
            <Image src={cartLogo} alt='cart logo' className='w-12 hover:scale-110 transition ease-in-out' />
        </Link>
    )
}
