import Link from "next/link";
import background from '../assets/images/HeroImg.png'

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h3 className="lg:text-6xl w-3/4 font-semibold">
        Experimente o sabor da culinária japonesa
      </h3>
      <p className="mt-16 mb-20 text-3xl w-1/2">Sinta o sabor das comidas mais populares da cultura japonesa em qualquer lugar e à qualquer hora </p>
      <div className="flex gap-8">
        <Link href='/Menu' >
          <button className="bg-black font-bold text-white py-4 px-10 rounded-[50px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            Peça agora
          </button>
        </Link>
        <Link href='About'>
          <button className="font-bold text-black border border-black py-4 px-10 rounded-[50px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            Saiba mais
          </button>
        </Link>
      </div>
    </div>
  )
}
