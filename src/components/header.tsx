import React, { MouseEventHandler, useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import logoImaV1 from '../images/header/logoV1.svg';
import logoImaV2 from '../images/header/logoV2.svg';
import { motion } from 'framer-motion';
import { staggerHeader, fadeInDown } from '../constants/variants';
import { cn, smoothScrollToSection } from '../libs';
import { Container } from './ui/container';
import { Nav } from './nav';
import { Button } from './ui/button';
import { NavMobile } from './navMobile';
import { CgClose } from 'react-icons/cg';

export const Header = () => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const scrollBody = () => {
      if (window.scrollY > 80) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener('scroll', scrollBody);

    return () => window.removeEventListener('scroll', scrollBody);
  }, [header]);

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    const targetSection = event.currentTarget.dataset.href;

    if (targetSection) {
      smoothScrollToSection(`#${targetSection}`);
    }
    setNavMobile(false);
  };
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={staggerHeader}
      className={cn(
        `fixed w-full left-0 ring-0 mx-auto max-w-full w-full z-20 flex justify-between items-center transition-all duration-500`,
        header ? 'bg-white p-3 rounded-md drop-shadow-primary' : 'py-[40px]'
      )}
    >
      <Container className="max-w-[1280px] flex justify-between items-center" variants={fadeInDown}>
        <motion.a variants={fadeInDown} href="/">
          <img className={cn(`h-[50px]`, header ? 'w-[180px]' : 'w-[212px]')} src={header ? logoImaV2 : logoImaV1} alt="logo" />
        </motion.a>
        <div className="hidden lg:flex gap-x-[96px]">
          <Nav isHeader={header} onclick={handleClick} />
          {header && (
            <div className="transition-all duration-500">
              <Button>Contact Us</Button>
            </div>
          )}
        </div>
        <motion.div variants={fadeInDown} onClick={() => setNavMobile((prev) => !prev)} className="lg:hidden cursor-pointer">
          {!navMobile ? (
            <HiMenu size={45} className={cn(`transition-all duration-500`, header ? 'text-4xl text-accent-hover' : 'text-white')} />
          ) : (
            <CgClose size={45} className={cn(`transition-all duration-500`, header ? 'text-4xl text-accent-hover' : 'text-white')} />
          )}
        </motion.div>
        <div
          className={cn(
            `lg:hidden absolute top-full mt-0 w-full left-0 rounded-md overflow-hidden  transition-all duration-500`,
            navMobile ? 'shadow-2xl h-[350px]' : 'shadow-none h-auto'
          )}
        >
          <NavMobile navMobile={navMobile} onclick={handleClick} />
        </div>
      </Container>
    </motion.header>
  );
};
