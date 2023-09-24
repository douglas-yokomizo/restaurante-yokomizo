import React from 'react'

interface ItemProps {
    name: string
    description: string
    price: number
}

export const ListContainer = ({ name, description, price }: ItemProps) => {
    return (
        <div className='border rounded-3xl'>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-slate-500'>{description}</p>
            <h4 className='text-orange-500'>{price}</h4>
        </div>

    )
}
