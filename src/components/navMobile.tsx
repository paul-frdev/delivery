import { motion } from 'framer-motion';
import { navData } from '../constants';
import React, { MouseEvent } from 'react';
import { Button } from './ui/button';
import { mobileNav } from '../constants/variants';

interface NavMobileProps {
  navMobile?: boolean;
  onclick: (event: MouseEvent<HTMLLIElement>) => void;
}

const variants = {
  opened: {
    y: 0,
    height: '450px',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    y: 0,
    height: 'auto',
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
};

export const NavMobile: React.FC<NavMobileProps> = ({ navMobile, onclick }) => {
  return (
    <motion.nav
      variants={variants}
      initial="closed"
      animate={navMobile ? 'opened' : 'closed'}
      exit="closed"
      className=" bg-accent w-full p-4 pt-8 mt-0"
    >
      <ul className="flex flex-col mb-4 gap-y-4">
        {navData.map((route) => (
          <li key={route.name} data-href={route.href} onClick={onclick}>
            <a className="text-white hover:text-transparent pl-6" href={route.href}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
      <Button className=" bg-accent-hover">Contact Us</Button>
    </motion.nav>
  );
};
