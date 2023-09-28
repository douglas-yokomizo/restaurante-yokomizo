import { NavBar } from './components/NavBar'
import { ListContainer } from './components/ItemListContainer'

export default function Home() {
  return (
    <>
      <NavBar />
      <ListContainer name='Temaki de Salmão' price={35} description='Nori crocante envolvendo uma combinação perfeita de arroz temperado, salmão fresco, cream cheese e cebolinha' />
    </>
  )
}
