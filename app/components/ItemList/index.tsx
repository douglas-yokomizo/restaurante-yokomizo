import React from 'react'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import { Item } from '../Item'
import 'swiper/swiper-bundle.css'


interface ItemListProps {
    items: {
        id: number
        title: string
        price: number
        picture: StaticImageData
    }[]
}

export const ItemList = ({ items }: ItemListProps) => {

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 4
                }
            }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id} className='p-10'>
                    <Item item={item} />
                </SwiperSlide>
            ))}
        </Swiper >
        // <div className="p-14 grid grid-cols-1 lg:w-full w-3/4 lg:grid-cols-4 gap-6 my-8">
        //     {items.map((item) => (
        //         <Item key={item.id} item={item} />
        //     ))}
        // </div>
    )
}
