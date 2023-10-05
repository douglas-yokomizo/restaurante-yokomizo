import React from 'react'
import { ItemCount } from '../ItemCount'
import Image, { StaticImageData } from 'next/image'

interface ItemProps {
    item: {
        id: number
        title: string
        price: number
        picture: StaticImageData
    }
}

const ItemDetails = ({ item: { picture, title } }: ItemProps) => (
    <div>
        <Image src={picture} alt={title} className='rounded-2xl border-2 border-blue-950 ' />
        <h3 className='font-semibold text-center text-xl my-4'>{title}</h3>
    </div>
)

const ItemFooter = ({ item: { price } }: ItemProps) => (
    <div className="flex justify-evenly items-center">
        <h4 className='text-orange-500 text-lg'>R${price}</h4>
        <ItemCount stock={6} />
    </div>
)

export const Item = ({ item }: ItemProps) => {
    return (
        <div className='w-3/4 lg:w-full m-auto border-2 p-4 border-blue-950 rounded-3xl flex flex-col justify-between bg-[#ffecc9]'>
            <ItemDetails item={item} />
            <ItemFooter item={item} />
            <button type='submit' className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-10">Adicionar ao carrinho</button>
        </div>
    )
}
