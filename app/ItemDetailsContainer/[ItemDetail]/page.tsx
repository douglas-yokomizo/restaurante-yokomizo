'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { firebase_app } from '@/app/config';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { ItemCount } from '@/app/components/ItemCount'
import { ItemProps } from '@/app/interfaces/Product'

firebase_app

const ItemDetail = () => {
  const [product, setProduct] = useState<ItemProps>()

  useEffect(() => {
    const db = getFirestore()
    const item = doc(db, 'items', '0pVoGGH2U0EZiV2N1cCs');
    getDoc(item).then((res) => {
      const itemData = (res.id, {
        ...res.data()
      })
      setProduct(itemData)
    })
  }, [])

  return (
    <>
      <div className='flex items-center gap-12 mt-10'>
        <Image
          src={product?.picture}
          alt={product?.title}
          width={400}
          height={400}
          className='rounded-3xl shadow-xl'
        />
        <div className='flex flex-col justify-between items-start w-1/3 gap-5'>
          <h1 className='text-6xl'>
            {product?.title}
          </h1>
          <p className='mb-5'>
            {product?.description}
          </p>
          <ItemCount />
          <Link href={'/Cart'} className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 mt-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] w-full text-center">
            Comprar
          </Link>
          <button className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-1 w-full">Adicionar ao carrinho</button>
        </div>
      </div >
      <div className='flex items-center gap-12'>
        <div className='flex flex-col justify-between items-start w-1/3 gap-5'>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
