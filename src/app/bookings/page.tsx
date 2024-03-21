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
    <main className='bg-cgr-gray-10 p-16 w-screen h-screen'>
      <div className='mb-5'>Controls</div>
      <div>
        <p className='text-3xl font-bold mb-6 z-30'>Incoming Booking</p>
        <BookingPanel bookings={activeBookings} />
      </div>
    </main>
  )
}
