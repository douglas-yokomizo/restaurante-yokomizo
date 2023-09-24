import React from 'react'
import cartLogo from '@/assets/images/cart-icon.png'
import Image from 'next/image'

export const Cart = () => {
    return (
        <button>
            <Image src={cartLogo} alt='cart logo' className='w-12' />
        </button>
    )
}
