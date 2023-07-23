import React from 'react';
import { Testimonial } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import { clients } from '../../constants/clients';

export const Slider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className='testimonialSlider'
    >
      {clients.map((client: Testimonial) => (
        <SwiperSlide key={client.id}>
          <div className='bg-green-300'>
            <p>{client.message}</p>
            <div>
              <img src={client.image} alt="client" className='w-full max-w-[60px] h-full max-h-[60px]' />
              <h2></h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


