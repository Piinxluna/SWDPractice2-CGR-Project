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
    
      const [name,setName] = useState(mockCampground.name)
      const [tel,setTel] = useState(mockCampground.tel)
      const [houseNo,setHouseNo] = useState(mockCampground.address.houseNo)
      const [lane,setLane] = useState(mockCampground.address.lane)
      const [road,setRoad] = useState(mockCampground.address.road)
      const [subdistrict,setSubdistrict] = useState(mockCampground.address.subdistrict)
      const [district,setDistrict] = useState(mockCampground.address.district)
      const [province,setProvince] = useState(mockCampground.address.province)
      const [postalcode,setPostalCode] = useState(mockCampground.address.postalcode)
      const [website,setWebsite] = useState(mockCampground.website)
    //   const [tentForRent, setTentForRent] = useState(false);
    //   const [toilet, setToilet] = useState(false);
    //   const [electricity, setElectricity] = useState(false);
    //   const [parking, setParking] = useState(false);
    //   const [wifi, setWifi] = useState(false);

 return(

    <main className='bg-white px-4 py-8 sm:px-10 md:px-16 lg:px-36 xl:px-72 2xl:px-96 min-h-screen '>
        <h1 className='text-4xl font-bold text-cgr-dark-green flex justify-center py-12'>
            Create Booking
        </h1>
        <Card>
            <div className='px-6'>
            <div className='text-lg gap-5 mb-8 flex flex-col ml-12'>
                <div className='flex flex-row items-center mr-6 mt-8'>
                    <div className='w-2/5'><p className='font-medium'>Campground Name :</p></div>
                    <TextField
                        required
                        id='campgroundName'
                        label='Campground Name'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'><p className='font-medium'>Telephone :</p></div>
                    <TextField
                        required
                        id='tel'
                        label='Telephone Number'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={tel}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTel(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'><p className='font-medium'>Address :</p></div>
                    <TextField
                        required
                        id='houseno'
                        label='House Number'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 mr-4'
                        value={houseNo}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setHouseNo(event.target.value)
                        }}
                    />
                    <TextField
                        required
                        id='lane'
                        label='Lane'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2'
                        value={lane}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setLane(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'></div>
                    <TextField
                        id='road'
                        label='Road'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={road}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRoad(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'></div>
                    <TextField
                        required
                        id='subdistrict'
                        label='Subdistrict'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 mr-4'
                        value={subdistrict}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSubdistrict(event.target.value)
                        }}
                    />
                    <TextField
                        required
                        id='district'
                        label='Dictrict'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 '
                        value={district}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDistrict(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                    <div className='w-2/5'></div>
                    <TextField
                        required
                        id='province'
                        label='Province'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2 mr-4'
                        value={province}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setProvince(event.target.value)
                        }}
                    />
                    <TextField
                        required
                        id='postalcode'
                        label='Postal code'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-1/2'
                        value={postalcode}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPostalCode(event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-row items-center mr-6 '>
                <div className='w-2/5'><p className='font-medium'>Website :</p></div>
                    <TextField
                        id='website'
                        label='Website'
                        variant='outlined'
                        size='small'
                        InputProps={{ style: { borderRadius: '10px' } }}
                        className='w-full'
                        value={website}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setWebsite(event.target.value)
                        }}
                    />
                </div>
            <div className='flex flex-row items-center mr-6 '>
                <div className='w-1/3'><p className='text-medium'>Facility :</p></div>
                <div className='flex flex-wrap mt-4'>
                    <FormControlLabel label="Tent for rent" control={<CGRCheckBox/>}/>
                    <FormControlLabel label="Toilet" control={<CGRCheckBox/>}/>
                    <FormControlLabel label="Electricity" control={<CGRCheckBox/>}/>
                    <FormControlLabel label="Parking" control={<CGRCheckBox/>}/>
                    <FormControlLabel label="Wifi" control={<CGRCheckBox/>}/>
                </div>
            </div>
            <div className="mb-1 flex flex-row">
                <div className='w-2/5'>Upload Image : </div>
                <div className="">
                    <input type="file" id="Campground Image" className='mr-28'/>
                </div>
            </div>
            </div>
            <div className='flex justify-center py-5'>
                <button className='cgr-btn w-1/2'>Create</button>
            </div></div>
            </Card>
    </main>
 )}