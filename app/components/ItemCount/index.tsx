'use client'
import React, { useState } from 'react'

interface IStock {
    stock: number
}

export const ItemCount = ({ stock }: IStock) => {
    const [count, setCount] = useState(1)
    return (
        <>
            <div className="flex justify-between items-center">
                <button onClick={() => { count > 0 && setCount(count - 1) }} className="px-3 bg-slate-300 rounded-l-lg">-</button>
                <div className="px-3 bg-white">
                    {count}
                </div>
                <button onClick={() => count < stock ? setCount(count + 1) : alert("Não há essa quantidade no estoque")} className="px-3 bg-orange-300 rounded-r-lg">+</button>
            </div>
        </>
    )
}
