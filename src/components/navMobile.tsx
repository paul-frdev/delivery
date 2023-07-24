import { motion } from 'framer-motion';
import { navData } from '../constants';
import React from 'react';
import { Button } from './ui/button';
import { mobileNav, mobileNavItem } from '../constants/variants';

interface NavMobileProps {
  navMobile?: boolean;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
}

export const NavMobile: React.FC<NavMobileProps> = ({ navMobile }) => {
  return (
    <motion.nav
      initial={false}
      animate={navMobile ? "open" : "closed"}
      className=" bg-accent w-full p-4"
    >
      <motion.ul variants={mobileNav} className="flex flex-col mb-4 gap-y-4 transition-all duration-500">
        {navData.map((route) => (
          <li key={route.name}
          >
            <a className="text-white" href={route.href}>
              {route.name}
            </a>
          </li>
        ))}
      </motion.ul>
      <Button>Contact Us</Button>
    </motion.nav>
  );
};
