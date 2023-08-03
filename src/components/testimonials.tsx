import React from 'react';

import { motion } from 'framer-motion';
import { fadeInUp, staggerTextContainer } from '../constants/variants';
import { Container } from './ui/container';
import { Slider } from './ui/slider';

export const Testimonials = () => {
  return (
    <section className="relative min-h-[600px]">
      <Container>
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          animate="animate"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp} className="w-[40%]">
            <h3 className="h3">testimonials</h3>
            <h2 className="h2 mb-6">Our Awesome Clients</h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-[60%] lg:absolute overflow-hidden lg:right-0">
            <Slider />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
