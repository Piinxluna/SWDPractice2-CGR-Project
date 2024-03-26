import BookingPanel from '@/components/complex/BookingPanel'
import SortButton from '@/components/template/SortButton'
import getReserves from '@/libs/bookings/getReserves'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const queryString1: string =
    'startDate[gte]=' +
    new Date(Date.now()).getFullYear() +
    '-' +
    (new Date(Date.now()).getMonth() + 1) +
    '-' +
    new Date(Date.now()).getDate()
  const queryString2: string =
    'startDate[lt]=' +
    new Date(Date.now()).getFullYear() +
    '-' +
    (new Date(Date.now()).getMonth() + 1) +
    '-' +
    new Date(Date.now()).getDate()

  const incomingBooking: BookedReservesItem[] = (
    await getReserves(session.user?.token, queryString1)
  ).data
  const achievedBooking: BookedReservesItem[] = (
    await getReserves(session.user?.token, queryString2)
  ).data

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <div className='flex flex-row flex-wrap justify-between items-baseline space-y-2 mb-8'>
        <div className='flex flex-row w-full md:w-fit space-x-3'>
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
          {/* <SortButton setFilter={() => {}} /> */}
        </div>
        <Link href='/bookings/create'>
          <button className='cgr-btn w-full md:w-fit'>Book more</button>
        </Link>
      </div>
      <div className='mb-24'>
        <p className='text-4xl font-bold mb-6 z-30 text-cgr-black'>
          Incoming Booking
        </p>
        <div className='h-1 w-full mt-5 mb-10 bg-cgr-dark-green rounded-xl'></div>
        <BookingPanel bookings={incomingBooking} />
      </div>
      <div>
        <p className='text-4xl font-bold mb-6 z-30 text-cgr-black'>
          Achieved Booking
        </p>
        <div className='h-1 w-full mt-5 mb-10 bg-cgr-dark-green rounded-xl'></div>
        <BookingPanel bookings={achievedBooking} />
      </div>
    </main>
  )
}
