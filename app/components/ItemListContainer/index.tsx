'use client'
import { ItemList } from "../ItemList"
import combinadoPic from '@/assets/images/Combinado.jpeg'
import katsudonPic from '@/assets/images/Katsudon.jpeg'
import sashimiPic from '@/assets/images/sashimis.jpeg'
import ramenPic from '@/assets/images/ramen.jpeg'

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

    return (
        <div>
            <ItemList items={products} />
        </div>

    )
}
