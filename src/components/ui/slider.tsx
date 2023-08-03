import React from 'react';
import { Testimonial } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { clients } from '../../constants/clients';

export const Slider: React.FC = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20} slidesOffsetBefore={60} grabCursor={true} className="testimonialSlider">
      {clients.map((client: Testimonial) => (
        <SwiperSlide key={client.id}>
          <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px] pt-[60px] pb-[40px] flex flex-col justify-between">
            <p className="font-light leading-[30px]">{client.message}</p>
            <div className="flex items-center gap-x-5">
              <img src={client.image} alt="client" className="w-full max-w-[60px] h-full max-h-[60px]" />
              <span className="font-semibold">{client.name}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
