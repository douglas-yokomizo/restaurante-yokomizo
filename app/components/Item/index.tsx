import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { ItemCount } from '../ItemCount'

export interface ItemProps {
    item: {
        id: number
        title: string
        price: number
        picture: StaticImageData
        description?: string
    }
}

const ItemHeader = ({ item: { picture, title } }: ItemProps) => (
    <a>
        <Image src={picture} alt={title} className='rounded-2xl border-2 border-blue-950' />
        <h3 className='font-semibold text-center text-xl my-4'>{title}</h3>
    </a>
)

const ItemFooter = ({ item: { price } }: ItemProps) => (
    <div className="flex justify-between items-center px-1">
        <h3 className='text-orange-500 text-lg'>R${price}</h3>
        <ItemCount />
    </div>
)

export const Item = ({ item, item: { id } }: ItemProps) => {
    return (
        <div className='w-3/4 lg:w-full m-auto border-2 p-4 border-blue-950 rounded-3xl flex flex-col justify-between hover:scale-105 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.3)] transition ease-out bg-[#ffecc9]'>
            <Link href={`/ItemDetailsContainer/${id}`}>
                <ItemHeader item={item} />
            </Link>
            <ItemFooter item={item} />
            <button type='submit' className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-10">Adicionar ao carrinho
            </button>
        </div>
    )
}
