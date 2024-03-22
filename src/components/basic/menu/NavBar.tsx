import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='fixed flex grid grid-cols-3 bg-cgr-white h-14 z-[100] top-0 right-0 left-0 w-screen items-center'>
      <div className='text-left text-cgr-dark-green font-bold text-3xl ms-5'>
        CGR
      </div>
      <div className='text-center'>
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
      <div className='text-right text-cgr-dark-green font-bold me-5'>
        User's Name
      </div>
    </div>
  )
}
