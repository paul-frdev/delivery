import React from 'react'
import { motion } from 'framer-motion'
import { fadeInDown, fadeInUp, staggerTextContainer } from '../constants/variants'
import { Container } from './ui/container'
import boy from '../images/about/boy.svg'

export const About = () => {
  return (
    <section className='mb-[30px] lg:mb-[60px]'>
      <Container>
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-col justify-center items-center lg:flex-row gap-x-[20px]'
        >
          <motion.div variants={fadeInDown} className='flex-1 mt-[74px]'>
            <h3 className='h3'>About us</h3>
            <p className='lead max-w-[470px] mb-[70px]'>
              The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all.
            </p>
            <div className='bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0 rounded-md'>
              <p className='text-[20px] leading-normal lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]'>How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className='flex-1'>
            <img className='max-w-[575px] w-full h-full max-h-[480px]' src={boy} alt='boy' />
          </motion.div>

        </motion.div>
      </Container>
    </section>
  )
}
