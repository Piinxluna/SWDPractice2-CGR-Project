import BookingPanel from '@/components/complex/BookingPanel'
import SortButton from '@/components/template/SortButton'

export default function Bookings() {
  const mockDate = new Date(Date.now())
  const mockBookings = [
    {
      campground: {
        name: 'campground',
        province: 'Bangkok',
        tel: '012-345-6899',
        picture: '/img/campgroundSample.jpg',
      },
      site: { siteNumber: 1, zone: 'A' },
      date: mockDate,
      id: 'ABC',
    },
    {
      campground: {
        name: 'campground',
        province: 'Bangkok',
        tel: '012-345-6899',
        picture: '/img/campgroundSample.jpg',
      },
      site: { siteNumber: 1, zone: 'A' },
      date: mockDate,
      id: 'ABC',
    },
    {
      campground: {
        name: 'campground',
        province: 'Bangkok',
        tel: '012-345-6899',
        picture: '/img/campgroundSample.jpg',
      },
      site: { siteNumber: 1, zone: 'A' },
      date: mockDate,
      id: 'ABC',
    },
    {
      campground: {
        name: 'campground',
        province: 'Bangkok',
        tel: '012-345-6899',
        picture: '/img/campgroundSample.jpg',
      },
      site: { siteNumber: 1, zone: 'A' },
      date: mockDate,
      id: 'ABC',
    },
  ]

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <div className='flex flex-row flex-wrap justify-between items-baseline space-y-2 mb-8'>
        <div className='flex flex-row w-full md:w-fit space-x-3'>
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
          <SortButton />
        </div>
        <button className='cgr-btn w-full md:w-fit'>Book more</button>
      </div>
      <div className='mb-24'>
        <p className='text-4xl font-bold mb-6 z-30 text-cgr-black'>
          Incoming Booking
        </p>
        <div className='h-1 w-full mt-5 mb-10 bg-cgr-dark-green rounded-xl'></div>
        <BookingPanel bookings={mockBookings} />
      </div>
      <div>
        <p className='text-4xl font-bold mb-6 z-30 text-cgr-black'>
          Achieved Booking
        </p>
        <div className='h-1 w-full mt-5 mb-10 bg-cgr-dark-green rounded-xl'></div>
        <BookingPanel bookings={mockBookings} />
      </div>
    </main>
  )
}
