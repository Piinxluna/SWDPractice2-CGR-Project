import CampgroundCardBooking from '@/components/basic/card/CampgroundCardBooking'
import Card from '@/components/basic/card/Card'
import Image from 'next/image'

export default function BookingView({ params }: { params: { bid: string } }) {
  const mockDate = new Date(Date.now())
  const mockBookings = new Map()
  mockBookings.set('ABC', {
    campground: {
      name: 'campground',
      province: 'Bangkok',
      tel: '012-345-6789',
      picture: '/img/campgroundSample.jpg',
      preferredName: 'Test',
    },
    site: { siteNumber: 1, zone: 'A', sitesize: '10 * 15 m.' },
    date: '2 March 2024',
  })
  mockBookings.set('DEF', {
    campground: {
      name: 'campground',
      province: 'Bangkok',
      tel: '066-666-6666',
      picture: '/img/campgroundSample.jpg',
      preferredName: 'Test2',
    },
    site: { siteNumber: 1, zone: 'A', sitesize: '10 * 10 m.' },
    date: '3 March 2024',
  })
  mockBookings.set('GHI', {
    campground: {
      name: 'campground',
      province: 'Bangkok',
      tel: '032-444-5555',
      picture: '/img/campgroundSample.jpg',
      preferredName: 'Test3',
    },
    site: { siteNumber: 1, zone: 'A', sitesize: '10 * 10 m.' },
    date: '4 March 2024',
  })
  mockBookings.set('JKL', {
    campground: {
      name: 'campground',
      province: 'Bangkok',
      tel: '098-765-4321',
      picture: '/img/campgroundSample.jpg',
      preferredName: 'Test4',
    },
    site: { siteNumber: 1, zone: 'A', sitesize: '10 * 15 m.' },
    date: '5 March 2024',
  })

  return (
    <main className='bg-white px-1 py-10 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <Card>
        <div className='flex flex-col'>
          <div className='flex flex-row '>
            <h1 className='text-2xl font-bold text-cgr-dark-green mt-12 ml-12 w-1/2'>
              Booking Date : {mockBookings.get(params.bid).date}
            </h1>
            <div className='relative'>
              <button className='cgr-btn-outline mt-12 ml-12 mr-2 mb-8'>
                Edit
              </button>
              <button className='cgr-btn-red'>Delete</button>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col w-1/2 ml-12'>
              {/* <CampgroundCardBooking campground={(mockBookings.get(params.bid)).campground}/> */}
              <p className='text-xl mb-2'>
                <strong>Site Number</strong> :{' '}
                {mockBookings.get(params.bid).site.siteNumber}
              </p>
              <p className='text-xl mb-2'>
                <strong>Zone</strong> : {mockBookings.get(params.bid).site.zone}
              </p>
              <p className='text-xl'>
                <strong>Site Number</strong> :{' '}
                {mockBookings.get(params.bid).site.sitesize}
              </p>
            </div>
            <Image
              src={'/img/LoginCard.jpg'}
              alt={'Campground pic'}
              width={400}
              height={200}
              className='object-cover rounded-t-xl mr-8 mb-8'
            />
          </div>
          <div className='flex justify-center'>
            <hr style={{ width: '90%' }} />
          </div>
          <p className='text-xl mt-8 mb-2 ml-12'>
            <strong>Preferred Name</strong> :{' '}
            {mockBookings.get(params.bid).campground.preferredName}
          </p>
          <p className='text-xl mb-2 ml-12'>
            <strong>Tent size</strong> :{' '}
            {mockBookings.get(params.bid).site.zone}
          </p>
          <p className='text-xl mb-12 ml-12'>
            <strong>Site Number</strong> :{' '}
            {mockBookings.get(params.bid).site.sitesize}
          </p>
        </div>
      </Card>
    </main>
  )
}
