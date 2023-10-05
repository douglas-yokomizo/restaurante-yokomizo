'use client'
import { ItemList } from "../ItemList"
import combinadoPic from '@/assets/images/Combinado.jpeg'
import katsudonPic from '@/assets/images/Katsudon.jpeg'
import sashimiPic from '@/assets/images/sashimis.jpeg'
import ramenPic from '@/assets/images/ramen.jpeg'
import { useState } from "react"
import { useEffect } from "react"

const products = [
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
    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItems(products);
        }, 2000); // delay de 2 segundos
    }, []);

    return (
        <div>
            <ItemList items={items} />
        </div>

    )
}
