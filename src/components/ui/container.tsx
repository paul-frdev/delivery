import React from 'react';
import { cn } from '../../libs';
import { motion, Variants } from 'framer-motion';

interface ContainerPorps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  initial?: string;
  animate?: string;
  whileInView?: string;
  viewport?: {
    once: boolean;
    amount: number;
  };
}
export const Container: React.FC<ContainerPorps> = ({ children, className, variants, initial, animate, viewport, whileInView }) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={cn(`max-w-[1380px] w-full mx-auto px-4`, className)}
      viewport={viewport}
      whileInView={whileInView}
    >
      {children}
    </motion.div>
  );
};
