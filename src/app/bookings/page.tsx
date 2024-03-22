import BookingPanel from '@/components/complex/BookingPanel'

export default function Home() {
  const mockDate = new Date(Date.now())
  const activeBookings = [
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
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen px-18'>
      <div className='flex flex-row flex-wrap justify-start align-items-start space-y-2 mb-8'>
        <div className='flex flex-row basis-2/5 space-x-3'>
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green'
            placeholder='Find something...'
          />
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green'
            placeholder='Find something...'
          />
        </div>
        <div className='basis-0 lg:basis-2/5'></div>
        <button className='cgr-btn basis-1/5'>Book more</button>
      </div>
      <div className='mb-12'>
        <p className='text-3xl font-bold mb-6 z-30'>Incoming Booking</p>
        <BookingPanel bookings={activeBookings} />
      </div>
      <div>
        <p className='text-3xl font-bold mb-6 z-30'>Achieved Booking</p>
        <BookingPanel bookings={activeBookings} />
      </div>
    </main>
  )
}
