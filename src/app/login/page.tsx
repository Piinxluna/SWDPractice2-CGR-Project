'use client'

import { useState } from 'react'
import { TextField } from '@mui/material'
import Image from 'next/image'

import Card from '@/components/basic/card/Card'
import Link from 'next/link'

export default function Component() {
  const mockUser = {
    name: 'panda',
    password : '12345678'
  }

  const [username, setUsername] = useState(mockUser.name)
  const [password, setPassword] = useState(mockUser.password)

  return (
    <main className='bg-white px-1 py-10 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen'>
      <Card>
      <div className="w-full h-60 relative rounded-t-xl">
        <Image
         src={'/img/LoginCard.jpg'}
         alt={'Login Card'}
         fill = {true}
         className="object-cover rounded-t-xl"/>
      </div>
        <h1 className='text-4xl font-bold text-cgr-dark-green flex justify-center py-6'>
            Login
        </h1>
        <div className='px-12 py-3'>
          <div className='flex flex-col items-center text-lg gap-5 mb-3'>
            <TextField
              required
              id='username'
              label='Username'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px'} }}
              className='md:col-span-2 w-[80%] mb-2'
              value={username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value)
              }}></TextField>
            <TextField
              type='password'
              id='password'
              label='Password'
              variant='outlined'
              size='small'
              InputProps={{ style: { borderRadius: '10px' } }}
              className='md:col-span-2 w-[80%] mb-2'
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              helperText='You can leave this box empty, enter password only if you want to change it'
            />
          </div>
          <div className='flex flex-row mt-4 mb-6 ml-20'>
            <button className='cgr-btn w-[40%]'>Login</button>
            <p className='text-sm ml-2 mt-3'>Don't have an account?</p>
            <Link href="/register" className='text-sm ml-2 mt-3 text-cgr-dark-green'>Register Now!</Link>
          </div>
        </div>
      </Card>
    </main>
  )
}
