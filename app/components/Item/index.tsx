import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { ItemCount } from '../ItemCount'
import { ItemProps } from '@/app/interfaces/Product'
import { useCart } from '@/app/contexts/cartContext'
import { useCounter } from '@/app/contexts/counterContext'



export const Item = ({ id, picture, title, price, stock }: ItemProps) => {

  const { addItem } = useCart()
  const { counterState } = useCounter()

  const handleAddToCart = () => {
    const itemId = id
    const counterValue = counterState[itemId]
    const inStock = stock === undefined ? 0 : stock
    const hasItem = counterValue > 0 && counterValue <= inStock


    if (hasItem) {
      addItem({
        id: itemId,
        title: title,
        picture: picture,
        price: price,
        quantity: counterValue,
      });
      toast.success('Item adicionado', {
        style: {
          backgroundColor: '#09a048',
          color: '#eefff4',
          fontWeight: 'bolder'
        },
        iconTheme: {
          primary: '#eefff4',
          secondary: '#09a048'
        }
      })
    } else {
      toast.error("Quantidade inválida", {
        style: {
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 'bold'
        },
        iconTheme: {
          primary: '#ffff',
          secondary: '#ef382b'
        }
      })
    }
    delete counterState[itemId]
  }

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
        <h3 className='font-semibold text-center text-xl my-4'>
          {title}
        </h3>
      </Link>
      <div className="flex justify-between items-center px-1">
        <h3 className='text-orange-500 text-lg'>
          R${price}
        </h3>
        <ItemCount id={id} stock={stock} />
      </div>
      <span className='text-right h-1 mt-3 px-1 text-sm font-semibold'>
        (Disponível: {stock})
      </span>
      <button
        type='submit'
        className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-10 text-black bg-orange-300"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
}
