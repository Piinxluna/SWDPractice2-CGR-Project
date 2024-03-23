'use client'

import { useState } from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  const [menuSpan, setMenuSpan] = useState(false)

  return (
    <div className='fixed flex grid grid-cols-5 bg-cgr-white h-14 z-[100] top-0 right-0 left-0 w-screen items-center justify-between'>
      <div className='text-left text-cgr-dark-green font-bold text-3xl ml-7 w-fill'>
        CGR
      </div>

      {/* incase of bigger than breakpoinr md */}
      <div className='text-center col-span-3 hidden md:block'>
        <NavbarItem path='/'>
          <i className='bi bi-house-fill mr-2'></i>Home
        </NavbarItem>
        <NavbarItem path='/campgrounds'>
          <i className='bi bi-tree-fill mr-2'></i>Campgrounds
        </NavbarItem>
        <NavbarItem path='/bookings'>
          <i className='bi bi-bookmarks-fill mr-2'></i>My Booking
        </NavbarItem>
      </div>
      <div className='text-right text-cgr-dark-green font-bold me-8 w-fill hidden md:block'>
        User's Name
      </div>

      <div className='md:hidden col-span-4 text-right mr-7'>
        <button
          onClick={() => {
            setMenuSpan(!menuSpan)
          }}>
          Menu
          {menuSpan ? (
            <i className='bi bi-caret-up-fill ml-2'></i>
          ) : (
            <i className='bi bi-caret-down ml-2'></i>
          )}
        </button>
      </div>
      {menuSpan ? (
        <div
          className='md:hidden absolute mt-60 bg-cgr-gray-20 rounded-lg w-fill px-10 py-3 right-10 flex flex-col gap-y-4'
          onClick={() => {
            setMenuSpan(!menuSpan)
          }}>
          <NavbarItem path='/'>
            <i className='bi bi-house-fill mr-2'></i>Home
          </NavbarItem>
          <NavbarItem path='/campgrounds'>
            <i className='bi bi-tree-fill mr-2'></i>Campgrounds
          </NavbarItem>
          <NavbarItem path='/bookings'>
            <i className='bi bi-bookmarks-fill mr-2'></i>My Booking
          </NavbarItem>
          <NavbarItem path='/user'>
            <i className='bi bi-person-fill mr-2'></i>User's Name
          </NavbarItem>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
