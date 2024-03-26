import Link from 'next/link'

import Card from '@/components/basic/card/Card'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUser from '@/libs/users/getUser'
import deleteUser from '@/libs/users/deleteUser'

export default async function AdminViewUser({
  params,
}: {
  params: { uid: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const user: UserItem = (await getUser(session.user?.token, params.uid)).data

  return (
    <main className='bg-white p-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <h1 className='text-4xl font-bold text-cgr-dark-green mb-8'>
        User's information
      </h1>
      <Card>
        <div className='px-10 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 text-lg gap-3 mb-3'>
            <p className='font-medium'>Name : </p>
            <p className='md:col-span-2'>{user.name}</p>
            <p className='font-medium'>Telephone number : </p>
            <p className='md:col-span-2'>{user.tel}</p>
            <p className='font-medium'>Email : </p>
            <p className='md:col-span-2'>{user.email}</p>
          </div>
          <div className='flex justify-end gap-4'>
            <Link href={`/admin/users/edit?uid=${params.uid}`}>
              <button className='cgr-btn-outline'>Edit</button>
            </Link>
          </div>
        </div>
      </Card>
    </main>
  )
}
