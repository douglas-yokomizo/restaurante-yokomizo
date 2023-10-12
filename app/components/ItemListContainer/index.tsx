'use client'
import { useState } from "react"
import { useEffect } from "react"
import { StaticImageData } from "next/image"
import { ItemList } from "../ItemList"
import combinadoPic from '@/assets/images/Menu/Combinado.jpeg'
import katsudonPic from '@/assets/images/Menu/Katsudon.jpeg'
import sashimiPic from '@/assets/images/Menu/sashimis.jpeg'
import ramenPic from '@/assets/images/Menu/ramen.jpeg'
import omuricePic from '@/assets/images/Menu/omurice.jpeg'
import karaagePic from '@/assets/images/Menu/karaage.jpeg'
import teishokuPic from '@/assets/images/Menu/teishoku.jpeg'
import tempuraPic from '@/assets/images/Menu/tempura.jpeg'

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
        title: 'Ramen',
        price: 60,
        picture: ramenPic
    },
    {
        id: 5,
        title: 'Omurice',
        price: 45,
        picture: omuricePic
    },
    {
        id: 6,
        title: 'Karaage de Frango',
        price: 40,
        picture: karaagePic
    },
    {
        id: 7,
        title: 'Teishoku de Anchova',
        price: 75,
        picture: teishokuPic
    },
    {
        id: 8,
        title: 'Tempura Variado',
        price: 60,
        picture: tempuraPic
    },
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
