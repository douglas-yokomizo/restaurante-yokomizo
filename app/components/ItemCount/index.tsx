'use client'
import { useCounter } from '@/app/contexts/counterContext'

export const ItemCount = ({ id }: any) => {
  const { counterState, decrement, increment } = useCounter()


  return (
    <>
      <div className="flex items-center">
        <button
          onClick={() => decrement(id)}
          className="text-lg px-3 bg-slate-300 rounded-l-3xl hover:scale-110 transition ease-in">
          -
        </button>
        <div className="text-lg px-2 bg-white w-[31px] text-center">
          {counterState[id] || 0}
        </div>
        <button
          onClick={() => increment(id)}
          className="text-lg px-3 bg-orange-300 rounded-r-3xl hover:scale-110 transition ease-in">+
        </button>
      </div>
    </>
  )
}
