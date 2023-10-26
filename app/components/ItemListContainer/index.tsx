'use client'
import { useState, useEffect } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db, firebase_app } from "@/app/config";
import { ItemList } from "../ItemList"
import { ItemProps } from "@/app/interfaces/Product"

firebase_app

export const ListContainer = () => {
  const [items, setItems] = useState<ItemProps[]>([])
  useEffect(() => {

    const itemsCollection = collection(db, 'items')

    getDocs(itemsCollection).then((res) => {
      const itemData = res.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        picture: doc.data().picture,
        description: doc.data().description,
        stock: doc.data().stock
      }));
      setItems(itemData)
    })

  }, []);

  return (
    <div >
      <ItemList items={items} />
    </div>

  )
}
