import React from 'react'
import { ItemProps } from '../Item'
import Image from 'next/image'

export const ItemDetail = ({ item }: ItemProps) => {
    return (
        <>
            <Image src={item.picture} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>

        </>
    )
}
