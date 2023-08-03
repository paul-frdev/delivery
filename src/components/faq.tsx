import React, { useState } from 'react';
import { Accordion } from './ui/accordion';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerAccordionContainer, staggerTextContainer } from '../constants/variants';
import { Container } from './ui/container';
import boyImage from '../images/faq/boy.svg';
import { accordions } from '../constants';
import { Button } from './ui/button';

export const Faq = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[50px] lg:mb-[80px]" id="faqs">
      <Container>
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32"
        >
          <div className=" w-full lg:max-w-[45%]">
            <motion.div variants={fadeInRight}>
              <h3 className="h3">faq</h3>
              <h2 className="h2 mb-6 lg:mb-12">Questions and Answers on Professional Traffic Permits:</h2>
            </motion.div>
            <motion.div variants={fadeInLeft} className="lg:absolute lg:-right-16 lg:-top-16">
              <img src={boyImage} alt="boy" className="max-w-[708px] w-full h-full max-h-[498px]" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1  gap-x-[20px] gap-y-[10px]"
        >
          {accordions.slice(0, showMore ? accordions.length : 5).map((item) => (
            <Accordion data={item} key={item.id} />
          ))}
        </motion.div>
        {!showMore && (
          <motion.div variants={fadeInRight} className="w-full mt-4">
            <Button onClick={handleShowMoreClick} className="m-auto">
              Show More
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};
