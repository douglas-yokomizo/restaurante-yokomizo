import React from 'react'
import Image from 'next/image'
import aboutImg from '@/assets/images/About.jpeg'

const About = () => {

  return (
    <>
      <div className='bg-white opacity-95 p-9 rounded-2xl w-11/12 m-auto'>
        <section className='flex items-center justify-between'>
          <Image src={aboutImg} className='w-1/2 rounded-3xl border-blue-950 border-4' alt='restaurant images'></Image>
          <article className='w-[40%] flex flex-col justify-between items-start gap-8'>
            <h2 className='text-5xl tracking-widest border-b-2 border-blue-950'>Sobre nós</h2>
            <p className='text-lg'>O restaurante nasceu do sonho de um casal de imigrantes japoneses que chegou ao Brasil em 1950. Eles queriam compartilhar a sua cultura e a sua culinária com os brasileiros, e abriram o seu primeiro estabelecimento em uma pequena casa no bairro da Liberdade, em São Paulo.
            </p>
            <p className='text-lg'>
              O restaurante logo se tornou famoso pela qualidade e pela variedade dos seus pratos, que incluem sushi, sashimi, karaage, ramen e muito mais.
            </p>
            <p className='text-lg'>
              Hoje, o Yokz é um dos restaurantes japoneses mais tradicionais e prestigiados do Brasil, com filiais em várias cidades do país onde os clientes podem apreciar a autêntica gastronomia japonesa, em um ambiente acolhedor e familiar.
            </p>
          </article>
        </section>
      </div>
    </>
  )
}

export default About
