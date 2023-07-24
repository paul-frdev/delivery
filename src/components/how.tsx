import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerTextContainer } from '../constants/variants';
import { Container } from './ui/container';
import girlImage from '../images/how/girl.svg';

export const How = () => {
  return (
    <section className="mb-[50px] lg:mb-[60px]">
      <Container>
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row items-center"
        >
          <motion.div variants={fadeInRight} className="flex-1 mb-8 lg:mb-0">
            <img src={girlImage} alt="girl" className="max-w-[720px] w-full max-h-[678px] h-full" />
          </motion.div>
          <motion.div variants={fadeInLeft} className="flex-1 justify-end flex">
            <div className="w-full max-w-[465px]">
              <h3 className="h3">How to apply</h3>
              <p className="lead">
                When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination:
                requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to
                confirm your application for a traffic permit by the company's company signer or CEO.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
