'use client'
import { ItemCount } from "../ItemCount"

interface ItemProps {
    name: string
    description: string
    price: number
}

export const ListContainer = ({ name, description, price }: ItemProps) => {

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className='h-80 border-2 p-4 border-amber-500 rounded-3xl flex flex-col justify-between'>
                <h3 className='font-semibold'>{name}</h3>
                <p className='text-slate-500'>{description}</p>
                <div className="flex justify-between items-center">
                    <h4 className='text-orange-500'>R${price}</h4>
                    <ItemCount stock={6} />
                </div>
                <input type="submit" value='Adicionar ao carrinho' className="border-2 font-medium border-orange-300 rounded-full self-center py-2 px-4 hover:bg-orange-400 hover:text-white transition-[500]" />
            </div>
        </div>

    )
}
