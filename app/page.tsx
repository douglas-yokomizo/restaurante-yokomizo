import Link from "next/link";

export default function Home() {
  return (
    <>
      <h3 className="lg:text-6xl w-3/4 font-semibold mt-16">
        Um Convite ao Sabor e à Cultura do Japão
      </h3>
      <h4 className="mt-16 mb-20 text-3xl w-2/3">Descubra a diversidade e a sofisticação da culinária japonesa em nosso restaurante, que oferece desde os clássicos sushis e sashimis até as delícias da cozinha quente.
      </h4>
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
    </>
  )
}
