'use client'

import { useState } from 'react'
import { Checkbox, FormControlLabel, MenuItem, Select, TextField } from '@mui/material'

import Card from '@/components/basic/card/Card'
import CGRCheckBox from '@/components/template/CheckBox'

export default function Component() {


      const mockCampground = {
        name: 'Campground1',  
        tel : '02-345-6789',
        address : {
            houseNo : "123",
            lane : "222",
            road : "BanThudThond",
            subdistrict : "RongMueng",
            district : "Pathumwan",
            province : "Bangkok" ,
            postalcode : "12345"
        },
        website : "www.google.com",
      }

      const [zone,setZone] = useState('')
      const [siteNo,setSiteNo] = useState('')
      const [siteSizeW,setSiteSizeW] = useState('')
      const [siteSizeL,setSiteSizeL] = useState('')

 return(

    <main className='bg-white px-4 py-4 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen '>
        <h1 className='text-4xl font-bold text-cgr-dark-green py-6'>
            Create new site
        </h1>
        <Card>
            <div className='ml-12 py-8'><strong className='text-2xl'>Site in <span className='text-cgr-dark-green'>{mockCampground.name}</span></strong>
            <div className='flex flex-row text-x mt-4'>
                <strong className='mr-3'>Address: </strong> {mockCampground.address.houseNo}  {mockCampground.address.lane}, {mockCampground.address.road},
                {mockCampground.address.subdistrict}, {mockCampground.address.district}, {mockCampground.address.province}, {mockCampground.address.postalcode}
            </div>
            <div className='flex flex-row text-x mt-4'>
                <strong className='mr-3'>Tel: </strong> {mockCampground.tel}
            </div></div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='mb-10'>
                <hr style={{ width: '90%' }} /> 
            </div>
            <div className='px-6'>
            <div className='text-lg gap-5 mb-8 flex flex-col ml-12'>
                <div className='flex flex-row items-center mr-12 '>
                    <div className='w-2/5'><p className='font-medium'>Zone :</p></div>
                    <TextField
                        required
                        id='zone'
                        label='Zone'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={zone}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setZone(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-12 '>
                    <div className='w-2/5'><p className='font-medium'>Site number :</p></div>
                    <TextField
                        required
                        id='siteno'
                        label='Site number'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={siteNo}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSiteNo(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'><p className='font-medium'>Site size :</p></div>
                    <TextField
                        required
                        id='sitewidth'
                        label='Width (Meter)'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 mr-4'
                        value={siteSizeW}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSiteSizeW(event.target.value)
                        }}
                    />
                    <TextField
                        required
                        id='sitelength'
                        label='Length (Meter)' 
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 mr-4'
                        value={setSiteSizeL}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSiteSizeL(event.target.value)
                        }}
                    />
                </div>
            <div className='flex justify-center mt-5 mb-10'>
                <button className='cgr-btn w-1/2'>Create</button>
            </div></div></div>
            </Card>
    </main>
 )}