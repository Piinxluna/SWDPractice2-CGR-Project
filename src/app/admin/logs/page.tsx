'use client'

import { useRouter } from 'next/navigation'

export default function LogsTable() {
  const router = useRouter()
  const mockCampgrounds = [
    {
      user: '123456',
      accessedAt: new Date(Date.now()),
      type: 'Login',
      id: 'ABCDEFG1',
    },
    {
      user: '123456',
      accessedAt: new Date(Date.now()),
      type: 'Login',
      id: 'ABCDEFG2',
    },
  ]

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <h1 className='text-cgr-black text-4xl font-bold mb-4'>Logs</h1>
      <div className='flex flex-row flex-wrap justify-start items-baseline space-x-3 space-y-2 mb-8 w-full'>
        <input
          type='text'
          className='cgr-search-box placeholder-cgr-dark-green w-54 md:w-128'
          placeholder='Find something...'
        />
        <input
          type='text'
          className='cgr-search-box placeholder-cgr-dark-green'
          placeholder='Find something...'
        />
      </div>
      <table className='cgr-table'>
        <tr className='h-10'>
          <th className='w-4/12'>User id</th>
          <th className='w-3/12'>Accessed at</th>
          <th className='w-1/12'>Type</th>
          <th className='w-2/12'>View user</th>
          <th className='w-2/12'>Delete</th>
        </tr>
        {mockCampgrounds.map((obj) => (
          <tr key={obj.id}>
            <td>{obj.user}</td>
            <td>{obj.accessedAt.toUTCString()}</td>
            <td className='text-center'>{obj.type}</td>
            <td className='text-center'>
              <button
                className='cgr-btn-outline-gray'
                onClick={() => {
                  router.push(`/admin/users/view/${obj.user}`)
                }}>
                View User
              </button>
            </td>
            <td className='text-center'>
              <button
                className='cgr-btn-red'
                onClick={() => {
                  if (confirm('Please confirm to delete this log')) {
                    // Delete
                  }
                }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
