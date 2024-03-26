'use client'

import { useState } from 'react'
import { MenuItem, Select, TextField } from '@mui/material'

import Card from '@/components/basic/card/Card'

export default function Component() {
  const mockBooking = {
    name: 'Campground1',
    zone: 'A',
    sitenumber: '1',
    preferredname: 'Cg1',
    amount: '4',
    tentsizew: '5',
    tentsizel: '6',
    date: '3/25/2024',
  }

  const [cgName, setCgName] = useState(mockBooking.name)
  const [zone, setZone] = useState(mockBooking.zone)
  const [siteNumber, setSiteNumber] = useState(mockBooking.sitenumber)
  const [preferredName, setPreferredName] = useState(mockBooking.preferredname)
  const [amount, setAmount] = useState(mockBooking.amount)
  const [tentSizeW, setTentSizeW] = useState(mockBooking.tentsizew)
  const [tentSizeL, setTentSizeL] = useState(mockBooking.tentsizel)
  const [date, setDate] = useState(mockBooking.date)

  return (
    <main className='bg-white px-4 py-8 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen '>
      <Card>
        <h1 className='text-4xl font-bold text-cgr-dark-green flex justify-center py-12'>
          Create Booking
        </h1>
        <div className='px-6'>
          <div className='text-lg gap-5 mb-8 flex flex-col ml-12'>
            <div className='flex flex-row mr-6'>
              <div className='w-1/3'>
                <p className='font-medium text-l '>Campground Name:</p>
              </div>
              <Select
                labelId='CamgroundName'
                id='campground-name'
                value={cgName}
                label='Campground Name'
                placeholder='Campground Name'
                onChange={(e) => setCgName(e.target.value)}
                className='w-full'>
                <MenuItem value={'campground1'}>Campground1</MenuItem>
                <MenuItem value={'campground2'}>Campground2</MenuItem>
                <MenuItem value={'campground3'}>Campground3</MenuItem>
              </Select>
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Zone:</p>
              </div>
              <Select
                labelId='Zone'
                id='zone'
                value={zone}
                label='Zone'
                onChange={(e) => setZone(e.target.value)}
                className='w-full'>
                <MenuItem value={'zoneA'}>A</MenuItem>
                <MenuItem value={'zoneB'}>B</MenuItem>
                <MenuItem value={'zoneC'}>C</MenuItem>
              </Select>
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Site Number:</p>
              </div>
              <Select
                labelId='Site Number'
                id='sitenumber'
                value={siteNumber}
                label='Site Number'
                onChange={(e) => setSiteNumber(e.target.value)}
                className='w-full'>
                <MenuItem value={'site1'}>1</MenuItem>
                <MenuItem value={'site2'}>2</MenuItem>
                <MenuItem value={'site3'}>3</MenuItem>
              </Select>
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Preferred Name:</p>
              </div>
              <TextField
                required
                id='preferredName'
                label='Name'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='w-full'
                value={preferredName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPreferredName(event.target.value)
                }}
              />
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Amount:</p>
              </div>
              <TextField
                required
                id='amount'
                label='Amount'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='w-full'
                value={amount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAmount(event.target.value)
                }}
              />
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Tent Size:</p>
              </div>
              <TextField
                required
                id='tentSizeW'
                label='Width(meter)'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='w-1/2 mr-4'
                value={tentSizeW}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTentSizeW(event.target.value)
                }}
              />
              <TextField
                required
                id='tentSizeL'
                label='Length(meter)'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='w-1/2'
                value={tentSizeL}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTentSizeL(event.target.value)
                }}
              />
            </div>
            <div className='flex flex-row items-center mr-6'>
              <div className='w-1/3'>
                <p className='font-medium'>Date:</p>
              </div>
              <TextField
                type='date'
                id='date'
                label='Date'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='w-full'
                value={date}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDate(event.target.value)
                }}
              />
            </div>
          </div>
          <div className='flex justify-center py-6'>
            <button className='cgr-btn w-1/2'>Done</button>
          </div>
        </div>
      </Card>
    </main>
  )
}
