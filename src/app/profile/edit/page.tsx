'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { TextField } from '@mui/material'

import Card from '@/components/basic/card/Card'
import getMe from '@/libs/user/getMe'
import SuspenseUI from '@/components/basic/SuspenseUI'

export default function Component() {
  const { data: session } = useSession()
  if (!session || !session.user.token) return null

  const [isReady, setIsReady] = useState(false)
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const user = (await getMe(session.user.token)).data
      setName(user.name)
      setTel(user.tel)
      setEmail(user.email)
    }
    fetchData()
    setIsReady(true)
  }, [])

  if (!isReady) return <SuspenseUI />

  return (
    <main className='bg-white px-4 py-10 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <h1 className='text-4xl font-bold text-cgr-dark-green mb-8'>
        Edit Your Profile
      </h1>
      <Card>
        <div className='px-12 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 text-lg gap-5 mb-3'>
            <p className='font-medium'>Name : </p>
            <TextField
              required
              id='name'
              label='Name'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px' } }}
              className='md:col-span-2'
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
            <p className='font-medium'>Telephone number : </p>
            <TextField
              required
              id='tel'
              label='Telephone number'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px' } }}
              className='md:col-span-2'
              value={tel}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTel(event.target.value)
              }}
            />
            <p className='font-medium'>Email : </p>
            <TextField
              required
              id='email'
              label='Email'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px' } }}
              className='md:col-span-2'
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
            />{' '}
            <p className='font-medium'>Password : </p>
            <TextField
              type='password'
              id='password'
              label='Password'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px' } }}
              className='md:col-span-2'
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              helperText='You can leave this box empty, enter your password only if you want to change it'
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button className='cgr-btn w-full'>Done</button>
          </div>
        </div>
      </Card>
      <div className='flex justify-end mt-10'>
        <button
          className='cgr-btn-red'
          onClick={() => {
            if (confirm('Are you sure to delete your account?')) {
              // delete account
            }
          }}>
          Delete account
        </button>
      </div>
    </main>
  )
}
