'use client'
import { useState } from "react"
import { useEffect } from "react"
import { StaticImageData } from "next/image"
import { ItemList } from "../ItemList"
import combinadoPic from '@/assets/images/Combinado.jpeg'
import katsudonPic from '@/assets/images/Katsudon.jpeg'
import sashimiPic from '@/assets/images/sashimis.jpeg'
import ramenPic from '@/assets/images/ramen.jpeg'

interface ProductsProps {
    id: number
    title: string
    price: number
    picture: StaticImageData
}

const products: ProductsProps[] = [
    {
        id: 1,
        title: 'Combinado Especial',
        price: 150,
        picture: combinadoPic
    },
    {
        id: 2,
        title: 'Katsudon',
        price: 50,
        picture: katsudonPic
    },
    {
        id: 3,
        title: 'Sushis & Sashimis',
        price: 120,
        picture: sashimiPic
    },
    {
        id: 4,
        title: 'Shoyu Ramen',
        price: 60,
        picture: ramenPic
    }
]

export const ListContainer = () => {
    const [items, setItems] = useState<ProductsProps[]>([])
    useEffect(() => {
        setTimeout(() => {
            setItems(products);
        }, 500); // delay de 0,5 segundos
    }, []);

    return (
        <div>
            <ItemList items={items} />
        </div>

    )
}
