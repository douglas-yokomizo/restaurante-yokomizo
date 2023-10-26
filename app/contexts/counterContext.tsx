'use client'
import { createContext, useContext, useState } from 'react';
import { ChildrenProps } from './cartContext';

// As chaves em volta significam que o itemId é uma CHAVE do tipo number e retorna um VALOR do tipo number também
interface CounterState {
  [itemId: number]: number
}

// Definindo uma interface para representar o contexto de contadores
interface ICounterContext {
  counterState: CounterState
  increment: (itemId: number) => void
  decrement: (itemId: number) => void
}

// Criando um contexto para compartilhar informações e funções de contadores
const CounterContext = createContext<ICounterContext>({} as ICounterContext);

// Criando um provedor de contexto que envolve componentes filhos
export const CounterProvider = ({ children }: ChildrenProps) => {
  // Inicializando o estado dos contadores como um objeto vazio
  const [counterState, setCounterState] = useState<CounterState>({});

  // Aqui itemId é chave do item que queremos atualizar
  const increment = (itemId: number) => {
    // isso aqui está criando um novo OBJETO onde a CHAVE é o itemID e o VALOR é a contagem atualizada
    setCounterState(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  // Função para decrementar um contador associado a um item
  const decrement = (itemId: number) => {
    setCounterState(prevState => ({
      ...prevState,
      [itemId]: prevState[itemId] > 0 ? prevState[itemId] - 1 : 0
    }));
  };

  // Retorna o provedor de contexto com as informações e funções dos contadores
  return (
    <CounterContext.Provider value={{ counterState, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => useContext(CounterContext)
