'use client'
import { useState } from 'react'
import { useCounter } from '@/app/contexts/counterContext'

export const ItemCount = ({ itemId }: any) => {
  const { counterState, decrement, increment } = useCounter()

  return (
    <>
      <div className="flex items-center">
        <button onClick={() => decrement(itemId)} className="text-lg px-3 bg-slate-300 rounded-l-3xl">-</button>
        <div className="text-lg px-2 bg-white">
          {counterState[itemId] || 0}
        </div>
        <button onClick={() => increment(itemId)} className="text-lg px-3 bg-orange-300 rounded-r-3xl">+</button>
      </div>
    </>
  )
}
