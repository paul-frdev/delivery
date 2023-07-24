import React from 'react'

import { motion } from 'framer-motion'
import { fadeInUp, footerTruckAnim, staggerFooterContainer } from "../constants/variants"
import truckImage from '../images/footer/truck.svg'
import hillImage from '../images/footer/hill.svg'
import logoImage from '../images/footer/logo.svg'
import { Container } from './ui/container'
import { SubscribeForm } from './forms/subscibeForm'

export const Footer = () => {
  return (
    <footer className='bg-darkblue text-white lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[739px] pt-12 lg:p-0 relative'>
      <Container
        variants={staggerFooterContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.1 }}
        className='min-h-[738px] flex flex-col justify-between'
      >
        <motion.div variants={footerTruckAnim} className='hidden lg:flex absolute -top-24 -left-[6.8%] overflow-hidden'>
          <img className='w-full max-w-[430px] h-full max-h-[210px]' src={truckImage} alt="truck" />
        </motion.div>
        <motion.div variants={fadeInUp} className='hidden lg:flex absolute z-10 top-[22px] left-0'>
          <img className='w-full max-w-[137px] h-full max-h-[90px]' src={hillImage} alt="hill" />
        </motion.div>
        <motion.div variants={fadeInUp} className='flex flex-col lg:flex-row items-center lg:pl-[95px] lg:pr-[120px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0'>
          <div className='flex-1 border-l-[10px] border-accent lg:mt-14 w-full max-w-[400px] p-3'>
            <p className='text-[20px] leading-[30px]'>
              We provide traffic management consultants so you get started quickly, contact us for a quote today!
            </p>
          </div>
          <SubscribeForm />
        </motion.div>
        <div>
          <p></p>
        </div>
      </Container>
    </footer>
  )
}
