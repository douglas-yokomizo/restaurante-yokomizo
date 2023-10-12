import React from 'react'

const Contact = () => {
    return (
        <form className='flex flex-col w-1/3 max-w-1/2 gap-8 mt-20'>
            <label className='flex flex-col'>
                <strong>
                    Nome:
                </strong>
                <input type="text" placeholder='Insira seu nome' className='border-b-2 p-3 focus:outline-none' />
            </label>
            <label className='flex flex-col'>
                <strong>
                    Email:
                </strong>
                <input type="email" placeholder='Insira seu email' className='border-b-2 p-3 focus:outline-none' />
            </label>
            <label className='flex flex-col'>
                <strong>
                    Telefone:
                </strong>
                <input type="text" placeholder='Somente números' className='border-b-2 p-3 focus:outline-none' />
            </label>
            <label className='flex flex-col'>
                <strong>
                    Mensagem:
                </strong>
                <textarea placeholder='Digite sua mensagem' className='border-2 px-3 py-9 mt-4 focus:outline-none resize-none h-28' />
            </label>
            <button className='hover:bg-indigo-700 bg-indigo-600 text-white hover:ease-in-out hover:scale-105 transition rounded-full p-2'>Enviar</button>
        </form>
    )
}

export default Contact