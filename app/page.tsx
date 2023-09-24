import { NavBar } from './components/NavBar'
import { ListContainer } from './components/ItemListContainer'

export default function Home() {
  return (
    <>
      <NavBar />
      <ListContainer name='Hamburguer' price={35} description='200g of a minced ground beef, onions, lettuce and tomatoes' />
    </>
  )
}
