import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '../../libs';

interface ButtonProps {
  children: React.ReactNode;
  variants?: Variants;
  whileHover?: {
    scale: number;
  };
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ icon, children, variants, onClick, disabled, className, whileHover }) => {
  return (
    <motion.button
      className={cn(
        `h-[60px] bg-accent py-[20px] px-[24px] text-white rounded-[5px] font-body uppercase tracking-[5%] text-base font-medium hover:bg-accent-hover flex items-center gap-6`,
        className
      )}
      variants={variants}
      onClick={onClick}
      disabled={disabled}
      whileHover={whileHover}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
};
