'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/app/contexts/cartContext'
import { ItemCount } from '@/app/components/ItemCount'
import combinadoPic from '@/assets/images/Menu/Combinado.jpeg'


const ItemDetail = () => {
    const [itemCount, setItemCount] = useState(0)
    const { addItem } = useCart()

    const handleAddToCart = () => {
        itemCount == 0 ? alert('Adicione itens ao carrinho') : alert(`${itemCount} itens adicionados ao carrinho`)
    }

    return (
        <>
            <div className='flex items-center gap-12'>
                <Image src={combinadoPic} alt='' width={400} />
                <div className='flex flex-col justify-between items-start w-1/3 gap-5'>
                    <h1 className='text-6xl'>Combinado Especial</h1>
                    <p className='mb-5'>O combinado japonês é um prato típico da culinária oriental, que reúne diferentes tipos de preparações com arroz, peixes e frutos do mar.</p>
                    <ItemCount onCountChange={setItemCount} />
                    <Link href={'/Cart'} className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] w-full text-center">
                        Comprar
                    </Link>
                    <button onClick={handleAddToCart} className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-1 w-full">Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail