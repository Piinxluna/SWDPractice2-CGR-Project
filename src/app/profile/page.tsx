import Link from 'next/link'

import Card from '@/components/basic/card/Card'

export default function Component() {
  const mockUser = {
    name: 'panda',
    tel: '0123456789',
    email: 'test@gmail.com',
  }

  return (
    <main className='bg-white p-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <h1 className='text-4xl font-bold text-cgr-dark-green mb-8'>
        Your Profile
      </h1>
      <Card>
        <div className='px-10 py-8'>
          <Link href='/profile/edit' className='flex justify-end'>
            <button className='cgr-btn-outline'>Edit</button>
          </Link>
          <div className='grid grid-cols-1 md:grid-cols-3 text-lg gap-3 mb-3'>
            <p className='font-medium'>Name : </p>
            <p className='md:col-span-2'>{mockUser.name}</p>
            <p className='font-medium'>Telephone number : </p>
            <p className='md:col-span-2'>{mockUser.tel}</p>
            <p className='font-medium'>Email : </p>
            <p className='md:col-span-2'>{mockUser.email}</p>
          </div>
        </div>
      </Card>
    </main>
  )
}
