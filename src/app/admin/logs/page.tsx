import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getLogs from '@/libs/log/getLogs'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function LogsTable() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const logsJson: LogJson = await getLogs(session.user?.token)
  const logs: LogItem[] = logsJson.data

  return (
    <main className='bg-cgr-gray-10 p-16 w-screen min-h-screen'>
      <h1 className='text-cgr-black text-4xl font-bold mb-4'>Logs</h1>
      <div className='flex flex-row flex-wrap justify-start items-baseline space-x-3 space-y-2 mb-8 w-full'>
        <input
          type='text'
          className='cgr-search-box placeholder-cgr-dark-green w-54 md:w-128'
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
        {logs.map((obj) => (
          <tr key={obj._id}>
            <td>{obj.user}</td>
            <td>{new Date(obj.accessedAt).toUTCString()}</td>
            <td className='text-center'>{obj.action}</td>
            <td className='text-center'>
              <Link href={`/admin/users/view/${obj.user}`}>
                <button className='cgr-btn-outline-gray'>View User</button>
              </Link>
            </td>
            <td className='text-center'>
              <button
                className='cgr-btn-red'
                // onClick={() => {
                //   if (confirm('Please confirm to delete this log')) {
                //     // Delete
                //   }
                // }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
