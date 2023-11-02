'use client'
import Image from 'next/image'
import { useCart } from '../contexts/cartContext'
import emptyCart from '@/assets/images/empty-cart.png'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Cart = () => {
  const { cart, clearCart, removeItem } = useCart()

  const totalItem = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

  if (cart.length === 0) {
    return (
      <>
        <div className='w-2/3'>
          <div className='flex flex-col items-center'>
            <Image src={emptyCart} alt='empty cart' />
            <h3 className='text-2xl font-bold'>Seu carrinho está vazio</h3>
            <Link href={'/Menu'} className='mt-5 cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] text-center'>
              Volte ao Menu
            </Link>
          </div>
        </div>
      </>
    )
  } else {

    return (
      <>
        <main className='flex justify-between'>
          <section className="container w-2/3 pb-5">
            <div className='flex items-center justify-between'>
              <h1 className='text-6xl'>Seu Carrinho</h1>
              <button className='hover:ease-in-out hover:scale-110 text-lg duration-300 transition text-red-400' onClick={() => clearCart()}>🗑️ Esvazie o carrinho</button>
            </div>
            <div className='itemsCart bg-slate-50 px-10 border-2 my-5 border-black opacity-95 rounded-2xl'>
              <div className='flex justify-center mt-5 uppercase border-b-2 py-4'>
                <h3 className='w-3/5'>
                  Item
                </h3>
                <h3 className='w-1/5 text-center'>
                  Quantidade
                </h3>
                <h3 className='w-1/5 text-right '>
                  Preço
                </h3>
              </div>
              <ul>
                {cart.map((item) =>
                  <li className='flex justify-between items-center py-5 border-b-2' key={item.id}>
                    <span className='w-3/5 flex gap-5 items-center'>
                      <Image src={item.picture} alt={item.title} width={100} height={100} className='rounded-3xl' />
                      <h3 className='font-semibold text-xl w-1/4'>
                        {item.title}
                      </h3>
                      <button className='text-lg text-red-600 hover:scale-150 transition ease-in-out' onClick={() => {
                        removeItem(item.id); toast.success("Item removido", {
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
                      }}
                      >
                        X
                      </button>
                    </span>
                    <span className='w-1/5 text-center text-xl font-semibold'>
                      {item.quantity}
                    </span>
                    <span className='w-1/5 text-right font-semibold text-xl'>
                      R$ {item.quantity * item.price}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </section>
          <aside className='bg-slate-50 w-1/4 h-fit mt-[78px] p-5 rounded-xl border-2 border-black'>
            <h3 className='text-2xl border-b-2 pb-2 mb-4'>Resumo do Pedido</h3>
            {cart.map((item) =>
              <li key={item.id} className='text-gray-500 flex justify-between'>
                x{item.quantity} {item.title}
                <span>
                  R$ {item.quantity * item.price}
                </span>
              </li>
            )}
            <div className='flex justify-between text-lg text-right border-t-2 my-4 pt-2 font-bold'>
              <p>Total do pedido</p>
              R$ {totalItem}
            </div>
            <Link href={'/Checkout'}>
              <button className='w-full bg-orange-400 font-bold text-white py-4 px-10 rounded-[50px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200'>Confirmar pedido</button>
            </Link>
          </aside>
        </main>
      </>
    )
  }
}

export default Cart
