import React from 'react'
import { Item } from '../Item'
import { StaticImageData } from 'next/image'

interface ItemListProps {
    items: {
        id: number
        title: string
        price: number
        picture: StaticImageData
    }[]
}

export const ItemList = ({ items }: ItemListProps) => {
    return (
        <div className="grid grid-cols-4 gap-6 my-8">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}
