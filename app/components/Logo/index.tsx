import React from 'react'
import { Fuggles } from 'next/font/google'
import Image from 'next/image'
import sushi from '../../../assets/images/sushi-logo.png'

const fuggles = Fuggles({ weight: '400', subsets: ['latin'] })

export const Logo = () => {
    return (
        <a href='#' className={fuggles.className}>
            <div className='flex items-center gap-5'>
                <Image src={sushi} alt='sushi logo' className='w-16' />
                <h1 className='text-7xl'>
                    Yokz
                </h1>
            </div>
        </a>
    )
}
