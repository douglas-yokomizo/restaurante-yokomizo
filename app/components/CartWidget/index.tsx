import Image from 'next/image'
import Link from 'next/link'
import cartLogo from '@/assets/images/cart-icon.png'
import { useCart } from '@/app/contexts/cartContext'

export const Cart = () => {
  const { cart } = useCart()

  // aqui percorremos todos itens do carrinho, com um valor inicial 0, e vamos somando a QUANTITY de cada ITEM à esse TOTAL
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href={'/Cart'} className='relative'>
      <div className='absolute -right-5 -top-3 rounded-full'>
        <span className='text-2xl px-3 font-bold text-center'>{totalQuantity === 0 ? null : totalQuantity}</span>
      </div>
      <Image src={cartLogo} alt='cart logo' className='w-12 hover:scale-110 transition ease-in-out' />
    </Link>
  )
}
