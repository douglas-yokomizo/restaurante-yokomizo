'use client'
import { useEffect, useState } from 'react'
import { useCart } from '../contexts/cartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Checkout = () => {
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const [data, setData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    emailConfirmation: '',
    telefone: ''
  })
  const [orderId, setOrderId] = useState('')
  const totalItem = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
  const order = {
    buyer: { ...data },
    items: [...cart],
    total: { 'Total da Compra': totalItem }
  }
  const invalidForm = (data.nome === '' || data.email === '' || data.email !== data.emailConfirmation || data.sobrenome === '' || data.telefone === '')
  const ordersCollection = collection(db, "orders")

  const createdOrder = async () => {
    const response = await addDoc(ordersCollection, order)
    setOrderId(response.id)
  }


  useEffect(() => {
    if (orderId) {
      toast.success(`Pedido confirmado! ID: ${orderId}`,
        {
          style: {
            backgroundColor: '#09a048',
            color: '#eefff4',
            fontWeight: 'bolder'
          },
          iconTheme: {
            primary: '#eefff4',
            secondary: '#09a048'
          },
          position: 'top-center'
        }

      )
    };
  }, [orderId])

  return (
    <>
      <header className='text-6xl'>
        <h1>Confirmar o pedido</h1>
      </header>
      <div className='flex gap-12'>
        <main className='mt-14 w-2/5 bg-slate-100 p-8 rounded-xl border-2 border-black drop-shadow-xl'>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!invalidForm) {
                await createdOrder()
                router.push('/')
                clearCart()
              } else {
                toast.error('Preencha todos os campos', {
                  style: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontWeight: 'bold'
                  },
                  iconTheme: {
                    primary: '#ffff',
                    secondary: '#ef382b'
                  },
                  position: 'top-center'
                })
              }
            }
            }
            className='flex flex-col gap-5'>
            <h3 className='text-xl font-bold'>Detalhes de pagamento</h3>
            <label className='flex flex-col'>
              <strong className='text-slate-950'>Nome</strong>
              <input
                name='nome'
                type="text"
                className='bg-inherit font-semibold text-black focus:outline-none border-b-2 focus:border-orange-400 py-2'
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                placeholder='João' />
            </label>
            <label className='flex flex-col'>
              <strong className='text-slate-950'>Sobrenome</strong>
              <input
                className='bg-inherit font-semibold text-black focus:outline-none border-b-2 focus:border-orange-400 py-2'
                name='sobrenome'
                type="text"
                onChange={(e) => setData({ ...data, sobrenome: e.target.value })}
                placeholder='Silva' />
            </label>
            <label className='flex flex-col'>
              <strong className='text-slate-950'>Email</strong>
              <input
                className='bg-inherit font-semibold text-black focus:outline-none border-b-2 focus:border-orange-400 py-2'
                name='email'
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder='joao.silva@exemplo.com' />
            </label>
            <label className='flex flex-col'>
              <strong className='text-slate-950'>Confirmar Email</strong>
              <input
                className='bg-inherit font-semibold text-black focus:outline-none border-b-2 focus:border-orange-400 py-2'
                name='emailConfirmation'
                type="email"
                onChange={(e) => setData({ ...data, emailConfirmation: e.target.value })}
                placeholder='joao.silva@exemplo.com' />
            </label>
            <label className='flex flex-col'>
              <strong className='text-slate-950'>Telefone</strong>
              <input
                className='bg-inherit font-semibold text-black focus:outline-none border-b-2 focus:border-orange-400 py-2'
                name='telefone'
                type="tel"
                onChange={(e) => setData({ ...data, telefone: e.target.value })}
                placeholder='+55 11 12345 - 6789' />
            </label>
            <button type='submit' className='font-bold w-full mt-7 bg-white text-black border border-black py-4 px-10 rounded-[50px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-500 hover:shadow-lg hover:text-white'>Confirmar Pagamento</button>
          </form>
        </main>
        <aside className='drop-shadow-xl bg-gradient-to-br h-1/2 from-[#9e0e10] to-[#ff9570] mt-14 w-1/5 py-10 px-5 rounded-xl '>
          <div className='flex flex-col justify-between text-lg font-bold'>
            <p className='text-white'>Total do pedido</p>
            <span className='text-4xl my-4 text-[#fdc255]'>
              <span className='text-white text-lg mr-1'>R$ </span>
              {totalItem}
            </span>
          </div>
        </aside>
      </div >
    </>
  )
}

export default Checkout
