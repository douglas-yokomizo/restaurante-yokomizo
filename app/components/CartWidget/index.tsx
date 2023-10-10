import React from 'react'
import Image from 'next/image'
import cartLogo from '@/assets/images/cart-icon.png'

export const Cart = () => {
    return (
        <button>
            <Image src={cartLogo} alt='cart logo' className='w-12' />
        </button>
    )
}
