import Link from 'next/link'

export default function CampgroundsTable() {
  const mockCampgrounds = [
    {
      name: 'Campground',
      province: 'Bangkok',
      tel: '012-345-6789',
      amount: 20,
      id: 'ABCDEFG1',
    },
    {
      name: 'Campground',
      province: 'Bangkok',
      tel: '012-345-6789',
      amount: 20,
      id: 'ABCDEFG2',
    },
  ]

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
          <input
            type='text'
            className='cgr-search-box placeholder-cgr-dark-green w-full'
            placeholder='Find something...'
          />
        </div>
        <Link href='/admin/campgrounds/create' className='w-full md:w-fit'>
          <button className='cgr-btn w-full md:w-fit'>Creat Campground</button>
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
        {mockCampgrounds.map((obj) => (
          <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.province}</td>
            <td>{obj.tel}</td>
            <td className='text-center'>{obj.amount}</td>
            <td className='text-center'>
              <Link href={`/admin/campgrounds/view/${obj.id}`}>
                <button className='cgr-btn-outline-gray'>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
