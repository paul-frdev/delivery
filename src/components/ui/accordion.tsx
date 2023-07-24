import { Disclosure, Transition } from '@headlessui/react';
import { Accordion as AccordionType } from '../../types';
import React from 'react';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface AccordionProps {
  data: AccordionType;
}

export const Accordion: React.FC<AccordionProps> = ({ data }) => {

  return (
    <motion.div
      initial="initial"
      animate={'animate'}
      variants={{
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 },
      }}
    >
      <Disclosure as="div" className="max-w-[550px] lg:max-w-[650px] w-full m-auto">
        {({ open }) => (
          <>
            <div className=" drop-shadow-primary bg-white rounded-[10px] transition-all duration-300">
              <div className="flex justify-start items-center w-full h-[90px] px-[35px]">
                <Disclosure.Button
                  className="flex items-center justify-between w-full"
                >
                  <span className="lead font-semibold leading-snug text-left p-2">{data.question}</span>
                  <span className="transition-all duration-300">
                    {open ? (
                      <motion.div initial="initial" animate={{ rotate: 180 }}>
                        <HiOutlineMinus size={20} className=" text-accent rotate-180 transition" />{' '}
                      </motion.div>
                    ) : (
                      <motion.div initial="initial" animate={{ rotate: 0 }}>
                        <HiOutlinePlus size={20} className=" text-accent rotate-180 transition" />
                      </motion.div>
                    )}
                  </span>
                </Disclosure.Button>
              </div>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  as="div"
                  className="p-4 bg-[#fff7f5] rounded-[10px] drop-shadow-primary font-Roboto text-[16px] leading-[30px] border-t border-gray-300 transition-all duration-500"
                >
                  {data.answer}
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </motion.div>

  );
};
