import React from 'react'

import { motion } from 'framer-motion'
import { fadeInUp, staggerTextContainer } from '../constants/variants'
import { Container } from './ui/container'
import { Slider } from './ui/slider'

export const Testimonials = () => {
  return (
    <section className='relative min-h-[600px]'>
      <Container>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-[40%]'>
            <h3 className='h3'>testimonials</h3>
            <h2 className='h2 mb-6'>Our Awesome Clients</h2>
          </div>
          <div className='lg:w-[60%] lg:absolute lg:right-0'>
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  )
}
