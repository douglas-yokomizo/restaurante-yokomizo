'use client'
import React, { useState } from 'react'

interface ItemCountProps {
    onCountChange: (newCount: number) => void
}

export const ItemCount: React.FC<ItemCountProps> = ({ onCountChange }) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount);
        }
    };

    return (
        <>
            <div className="flex items-center">
                <button onClick={handleDecrement} className="text-lg px-3 bg-slate-300 rounded-l-3xl">-</button>
                <div className="text-lg px-2 bg-white">
                    {count}
                </div>
                <button onClick={handleIncrement} className="text-lg px-3 bg-orange-300 rounded-r-3xl">+</button>
            </div>
        </>
    )
}
