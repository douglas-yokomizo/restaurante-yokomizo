'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import toast from 'react-hot-toast';
import { firebase_app } from '@/app/config';
import { ItemCount } from '@/app/components/ItemCount'
import { ItemProps } from '@/app/interfaces/Product'
import { useCart } from '@/app/contexts/cartContext';
import { useCounter } from '@/app/contexts/counterContext';

const ItemDetail = ({ params }: { params: { ItemId: string } }) => {

  const router = useRouter()

  const { addItem } = useCart()
  const { counterState } = useCounter()
  const [product, setProduct] = useState<ItemProps>()

  useEffect(() => {
    const db = getFirestore(firebase_app)
    const item = doc(db, 'items', params.ItemId);
    getDoc(item).then((res) => {
      const itemData = {
        id: res.id,
        title: '',
        picture: '',
        description: '',
        price: 0,
        stock: 0,
        quantity: counterState[params.ItemId],
        ...res.data()
      }
      setProduct(itemData)
    })
  }, [])

  const handleAddToCart = () => {

    const id = params.ItemId

    if (counterState[params.ItemId] > 0) {
      addItem({
        id: id,
        title: product?.title ?? '',
        picture: product?.picture ?? '',
        price: product?.price ?? 0,
        quantity: counterState[params.ItemId],
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
      toast.error("Informe quantidade de itens", {
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
    delete counterState[params.ItemId]
  }

  return (
    <>
      <div className='flex items-center gap-10 mt-10 w-2/3 p-5'>
        <Image
          src={product?.picture === undefined ? '/' : product.picture}
          alt={product?.title === undefined ? '/' : product.title}
          width={400}
          height={400}
          className='rounded-3xl shadow-xl'
          priority={true}
        />
        <div className='flex flex-col justify-between items-start w-full gap-6'>
          <h1 className='text-6xl tracking-wider'>
            {product?.title}
          </h1>
          <p className='mb-3'>
            {product?.description}
          </p>
          <div className='flex gap-8 items-center w-full'>
            <ItemCount id={params.ItemId} stock={product?.stock} />
            <span className='font-bold'>
              {product?.stock === 0 ? 'Produto indisponível' : `Disponível: ${product?.stock}`}
            </span>
          </div>
          {
            <button
              className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 mt-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] w-full text-center"
              onClick={() =>
                counterState[params.ItemId] > 0 ? (router.push('/Cart'), handleAddToCart()) : toast.error("Informe quantidade de itens", {
                  style: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontWeight: 'bold'
                  },
                  iconTheme: {
                    primary: '#ffff',
                    secondary: '#ef382b'
                  }
                })}
            >
              Comprar
            </button>}
          <button className="cursor-pointer border-2 font-medium border-blue-950 rounded-full self-center py-2 px-4 hover:bg-orange-500 hover:text-white hover:scale-110 transition-[500] mt-1 w-full" onClick={handleAddToCart}>Adicionar ao carrinho</button>
        </div>
      </div >
    </>
  )
}

export default ItemDetail
