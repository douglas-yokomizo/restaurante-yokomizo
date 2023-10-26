'use client'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <>
      <div className="container w-2/3">
        <div className='flex items-center justify-between'>
          <h1 className='text-6xl'>Seu Carrinho</h1>
          <button className='hover:ease-in-out hover:scale-110 text-lg duration-300 transition text-red-400'>Esvazie o carrinho</button>
        </div>
        <div className='flex justify-center mt-5 mb-7 uppercase border-b-2 py-4'>
          <h3 className='w-3/5'>
            Item
          </h3>
          <h3 className='w-1/5 text-center'>
            Quantidade
          </h3>
          <h3 className='w-1/5 right-0 text-right '>
            Preço
          </h3>
        </div>
      </div>
      <ul>
        {cart.map((item) =>
          <li>{item.name} {item.quantity}</li>
        )}
      </ul>
    </>
  )
}

export default Cart
