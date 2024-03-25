import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getReserves from '@/libs/bookings/getReserves'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function BookingsTable() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const booking: MyReservesItem[] = (await getReserves(session.user?.token))
    .data

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <h1 className='text-cgr-black text-4xl font-bold mb-4'>Booking</h1>
      <div className='flex flex-row flex-wrap justify-between items-baseline space-y-2 mb-8'>
        <div className='flex flex-row w-full md:w-fit space-x-3'>
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
        </div>
      </div>
      <table className='cgr-table'>
        <tr className='h-10'>
          <th className='w-2/6'>User</th>
          <th className='w-1/6'>Date</th>
          <th className='w-1/6'>Campground Name</th>
          <th className='w-1/6'>Zone</th>
          <th className='w-1/6'>Site Number</th>
          <th className='w-1/6'>View</th>
        </tr>
        {booking.map((obj) => (
          <tr key={obj._id}>
            <td>{obj.preferredName}</td>
            <td>{obj.startDate.toString()}</td>
            <td>{obj.campground.name}</td>
            <td className='text-center'>{obj.site.zone}</td>
            <td className='text-center'>{obj.site.number}</td>
            <td className='text-center'>
              <Link href={`/booking/view/${obj._id}`}>
                <button className='cgr-btn-outline-gray'>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
