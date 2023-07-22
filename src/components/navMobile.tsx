import React from 'react'
import { navData } from '../constants'

export const NavMobile = () => {
  return (
    <nav className=' bg-accent w-full p-4'>
      <ul className='flex flex-col gap-y-4'>
        {navData.map((route) => (
          <li key={route.name}>
            <a className='text-white hover:text-accent transition-all duration-300' href={route.href}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
