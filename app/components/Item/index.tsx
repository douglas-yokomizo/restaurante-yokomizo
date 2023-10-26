import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ItemCount } from '../ItemCount'
import { ItemProps } from '@/app/interfaces/Product'


export const Item = ({ id, picture, title, price }: ItemProps) => {
  return (
    <div className='w-3/4 lg:w-full m-auto border-2 p-4 border-blue-950 rounded-3xl flex flex-col justify-between hover:scale-105 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.3)] transition ease-out bg-[#ffecc9]'>
      <Link href={`/ItemDetailsContainer/${id}`}>
        <Image
          src={picture}
          alt={title}
          className='rounded-2xl border-2 border-blue-950'
          width={500}
          height={500}
          quality={100}
        />
        <h3
          className='font-semibold text-center text-xl my-4'>{title}
        </h3>
      </Link>
      <div className="flex justify-between items-center px-1">
        <h3 className='text-orange-500 text-lg'>R${price}</h3>
        <ItemCount itemId={id} />
      </div>
      <button type='submit' className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-10">Adicionar ao carrinho
      </button>
    </div>
  )
}
