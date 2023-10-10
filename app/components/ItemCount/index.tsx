'use client'
import React, { useState } from 'react'

interface IStock {
    stock: number
}

export const ItemCount = ({ stock }: IStock) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="flex justify-between items-center">
                <button onClick={() => { count > 0 && setCount(count - 1) }} className="text-lg px-3 bg-slate-300 rounded-l-3xl">-</button>
                <div className="text-lg px-2 bg-white">
                    {count}
                </div>
                <button onClick={() => count < stock ? setCount(count + 1) : alert("Não há essa quantidade no estoque")} className="text-lg px-3 bg-orange-300 rounded-r-3xl">+</button>
            </div>
        </>
    )
}
