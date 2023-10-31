
export interface ItemProps {
  id: string
  title: string
  price: number
  picture: string
  description?: string
  stock?: number
  quantity: number
}

// aqui a lista recebe items, que é do tipo array de items
export interface ItemListProps {
  items: ItemProps[]
}
