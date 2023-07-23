import { Button } from './ui/button';
import girlImage from '../images/hero/girl.svg';
import truckImage from '../images/hero/truck.svg';
import boyImage from '../images/hero/boy.svg';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, girlAnim, boyAnim, heroTruckAnim } from '../constants/variants';
import { Container } from './ui/container';
import { CgArrowLongRight } from 'react-icons/cg';

export const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <Container variants={staggerContainer} initial="initial" animate="animate" className="relative max-w-[1200px] min-h-[800px] lg:min-h-[950px]">
        <motion.h1 variants={fadeInDown} className="h1 max-w-[740px] text-white pt-[12rem] mb-[60px]">
          Your awesome traffic permit consultant.
        </motion.h1>
        <Button icon={<CgArrowLongRight />} variants={fadeInDown} whileHover={{ scale: 1.05 }} className="btn">
          Get Started
        </Button>
        <motion.div variants={girlAnim} className="hidden lg:flex absolute bottom-0">
          <img src={girlImage} alt="girl" className="w-[206px] h-[465px]" />
        </motion.div>
        <motion.div variants={heroTruckAnim} className="hidden lg:flex absolute -bottom-[25%] -left-[30%]">
          <img src={truckImage} alt="truck" className="w-[811px] h-[365px]" />
        </motion.div>
        <motion.div variants={boyAnim} className="hidden lg:flex absolute right-[380px] bottom-0 z-10">
          <img src={boyImage} alt="boy" className="w-[206px] h-[495px]" />
        </motion.div>
      </Container>
    </section>
  );
};
