import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getCampgrounds from '@/libs/campgrounds/getCampgrounds'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function CampgroundsTable() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const campground: CampgroundItem[] = (await getCampgrounds()).data

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <h1 className='text-cgr-black text-4xl font-bold mb-4'>Campgrounds</h1>
      <div className='flex flex-row flex-wrap justify-between items-baseline space-y-2 mb-8'>
        <div className='flex flex-row w-full md:w-fit space-x-3'>
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
        </div>
        <Link href='/admin/campgrounds/create' className='w-full md:w-fit'>
          <button className='cgr-btn w-full md:w-fit'>Create Campground</button>
        </Link>
      </div>
      <table className='cgr-table'>
        <tr className='h-10'>
          <th className='w-2/6'>Campground name</th>
          <th className='w-1/6'>Province</th>
          <th className='w-1/6'>Telephone</th>
          <th className='w-1/6'>Site amount</th>
          <th className='w-1/6'>View</th>
        </tr>
        {campground.map((obj) => (
          <tr key={obj._id}>
            <td>{obj.name}</td>
            <td>{obj.address.province}</td>
            <td>{obj.tel}</td>
            <td className='text-center'>{obj.amount}</td>
            <td className='text-center'>
              <Link href={`/admin/campgrounds/view/${obj._id}`}>
                <button className='cgr-btn-outline-gray'>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
