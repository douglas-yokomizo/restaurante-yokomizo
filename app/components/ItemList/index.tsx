import React from 'react'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules'
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
            scrollbar={{ draggable: true, hide: true }}
            mousewheel={{ sensitivity: 5 }}
            modules={[Mousewheel, Scrollbar, Navigation]}
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
    )
}
