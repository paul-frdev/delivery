import React, { MouseEvent, MouseEventHandler } from 'react';
import { navData } from '../constants';
import { cn } from '../libs';

interface NavProps {
  isHeader: boolean;
  onclick: (event: MouseEvent<HTMLLIElement>) => void;
}
export const Nav: React.FC<NavProps> = ({ isHeader, onclick }) => {
  return (
    <nav className="flex items-center transition-all duration-500">
      <ul className={cn(`flex gap-[56px] items-center`, !isHeader ? ' mr-60' : 'mr-0')}>
        {navData.map((route) => (
          <li key={route.name} onClick={onclick} data-href={route.href}>
            <a
              className={cn(`cursor-pointer hover:text-accent-hover transition duration-300`, isHeader ? 'text-primary' : 'text-white')}
              href={route.href}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
