import Link from 'next/link'

export default function BookingsTable() {
  const mockUser = [
    {
      name: 'AAAAAAAAA',
      date: new Date(Date.now()),
      campground: 'Campground1',
      zone: 'A',
      site: '1',
      id: 'B1',
    },
    {
      name: 'BBBBBBBBBB',
      date: new Date(Date.now()),
      campground: 'Campground1',
      zone: 'A',
      site: '1',
      id: 'B2',
    },
    {
      name: 'CCCCCCCCCC',
      date: new Date(Date.now()),
      campground: 'Campground1',
      zone: 'B',
      site: '1',
      id: 'B3',
    },
  ]

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
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
        </div>
        <Link href='/admin/campgrounds/create' className='w-full md:w-fit'>
          <button className='cgr-btn w-full md:w-fit'>Create User</button>
        </Link>
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
        {mockUser.map((obj) => (
          <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.date.toString()}</td>
            <td>{obj.campground}</td>
            <td className='text-center'>{obj.zone}</td>
            <td className='text-center'>{obj.site}</td>
            <td className='text-center'>
              <Link href={`/booking/view/${obj.id}`}>
                <button className='cgr-btn-outline-gray'>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
