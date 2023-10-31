'use client'
import React, { createContext, useContext, useState } from 'react';
import { ItemProps } from '../interfaces/Product';

export interface ChildrenProps {
  children: React.ReactNode
}

// os métodos estão mudando o state do carrinho, mas não retornam nada, por isso o retorno é void
// perceba que eles são todos verbos
interface ICartContext {
  cart: ItemProps[]
  addItem: (item: ItemProps) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
}

// aqui usei o AS para definir os valores default do contexto, que é um objeto vazio e tem o tipo do ICartContext
export const CartContext = createContext<ICartContext>({} as ICartContext)

// no provider vamos criar a lógica que o contexto irá passar para os filhos
const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<ItemProps[]>([]);

  const addItem = (item: ItemProps) => {
    // Aqui ele vai identificar se o item que está no carrinho é igual ao que o cliente está tentando adicionar
    const isInCart = cart.find((i) => i.id === item.id)

    // Mapearemos cada item do cart e verificaremos se o id do item que estamos tentando adicionar corresponde aos itens que já estão lá, se sim, vamos adicionar uma quantidade à ele, se não, vamos adicionar o item novo ao carrinho
    if (isInCart) {
      setCart(
        cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem)
      )
    } else {
      setCart([...cart, { ...item }])
    }
  }

  const removeItem = (itemId: string) => {
    // aqui vamos retornar apenas o item que for diferente do id do itemId, que é o que vai ser removido
    setCart(cart.filter((item) => item.id !== itemId))
  }

  // isso vai setar o carrinho para um array vazio novamente
  const clearCart = () => {
    setCart([])
  }

  return (
    //aqui passamos os contextos que criamos para o provider
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
