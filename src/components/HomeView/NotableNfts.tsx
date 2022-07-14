import s from './Home.module.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

export default function NotableNfts() {
  return (
    <section className="limit my-6">
      <h2 className="text-center text-2xl font-bold">Notable Nfts</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  )
}
