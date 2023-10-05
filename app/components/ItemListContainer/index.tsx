'use client'
import { ItemList } from "../ItemList"
import temakiPic from '@/assets/images/temaki.jpg'

const products = [
    {
        id: 1,
        title: 'Temaki Especial',
        price: 24,
        picture: temakiPic
    },
    {
        id: 2,
        title: 'Temaki de Salmão',
        price: 24,
        picture: temakiPic
    },
    {
        id: 3,
        title: 'Temaki Califórnia',
        price: 24,
        picture: temakiPic
    },
    {
        id: 3,
        title: 'Temaki Califórnia',
        price: 24,
        picture: temakiPic
    },
    {
        id: 3,
        title: 'Temaki Califórnia',
        price: 24,
        picture: temakiPic
    },
]

export const ListContainer = () => {

    return (
        <div>
            <ItemList items={products} />
        </div>

    )
}
