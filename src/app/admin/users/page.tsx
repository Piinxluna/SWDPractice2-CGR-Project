import Link from 'next/link'

export default function UsersTable() {
  const mockUser = [
    {
      name: 'AAAAAAAAA',
      email: 'A@gmail.com',
      tel: '012-345-6789',
      role: 'customer',
      id: 'U1',
    },
    {
      name: 'BBBBBBBBBB',
      email: 'B@gmail.com',
      tel: '012-345-6789',
      role: 'customer',
      id: 'U2',
    },
    {
      name: 'CCCCCCCCCC',
      email: 'C@gmail.com',
      tel: '012-345-6789',
      role: 'customer',
      id: 'U3',
    },
  ]

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <h1 className='text-cgr-black text-4xl font-bold mb-4'>Users</h1>
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
          <th className='w-2/6'>Name</th>
          <th className='w-1/6'>Email</th>
          <th className='w-1/6'>Telephone</th>
          <th className='w-1/6'>Role</th>
          <th className='w-1/6'>View</th>
        </tr>
        {mockUser.map((obj) => (
          <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.tel}</td>
            <td className='text-center'>{obj.role}</td>
            <td className='text-center'>
              <Link href={`/admin/users/view/${obj.id}`}>
                <button className='cgr-btn-outline-gray'>View</button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
