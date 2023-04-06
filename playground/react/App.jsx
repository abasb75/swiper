/* eslint-disable no-restricted-globals */
import React from 'react';
// eslint-disable-next-line
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

const App = () => {
  return (
    <main>
      <h1>Swipperjs :</h1>
      <Swiper
        activeLastSlideClass={false}
        modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3.3}
        threshold={2}
        spaceBetween={10}
        navigation
        scrollbar
        mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <h1>@abasb75/swiper with activeLastSlideClass</h1>
      <Swiper
        activeLastSlideClass={true}
        rewind={true}
        modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3.3}
        threshold={2}
        spaceBetween={10}
        navigation
        scrollbar
        mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default App;
