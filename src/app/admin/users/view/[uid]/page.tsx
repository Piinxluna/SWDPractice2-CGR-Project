import Link from 'next/link'

import Card from '@/components/basic/card/Card'

export default function AdminViewUser({ params }: { params: { uid: string } }) {
  const mockUser = new Map()

  mockUser.set('U1', {
    name: 'AAAAAAA',
    tel: '02-xxx-xxxx',
    email: 'A@gmail.com',
  })
  mockUser.set('U2', {
    name: 'BBBBBBBB',
    tel: '02-xxx-xxxx',
    email: 'B@gmail.com',
  })
  mockUser.set('U3', {
    name: 'CCCCCCCCCC',
    tel: '02-xxx-xxxx',
    email: 'C@gmail.com',
  })

  return (
    <main className='bg-white p-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <h1 className='text-4xl font-bold text-cgr-dark-green mb-8'>
        User's information
      </h1>
      <Card>
        <div className='px-10 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 text-lg gap-3 mb-3'>
            <p className='font-medium'>Name : </p>
            <p className='md:col-span-2'>{mockUser.get(params.uid).name}</p>
            <p className='font-medium'>Telephone number : </p>
            <p className='md:col-span-2'>{mockUser.get(params.uid).tel}</p>
            <p className='font-medium'>Email : </p>
            <p className='md:col-span-2'>{mockUser.get(params.uid).email}</p>
          </div>
          <div className='flex justify-end gap-4'>
            <Link href={`/admin/users/edit?uid=${params.uid}`}>
              <button className='cgr-btn-outline'>Edit</button>
            </Link>
            <button className='cgr-btn-red'>Delete</button>
          </div>
        </div>
      </Card>
    </main>
  )
}
