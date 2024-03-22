'use client'

import { useState } from 'react'
import { TextField } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

import Card from '@/components/basic/card/Card'

export default function Component({ params }: { params: { type: string } }) {
  const title = params.type === 'create' ? 'Create new' : 'Edit'
  const submitBtnTitle = params.type === 'create' ? 'Create' : 'Done'

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [houseNum, setHouseNum] = useState('')
  const [lane, setLane] = useState('')
  const [road, setRoad] = useState('')
  const [subdistrict, setSubdistrict] = useState('')
  const [district, setDistrict] = useState('')
  const [province, setProvince] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [googleMap, setGoogleMap] = useState('')
  const [website, setWebsite] = useState('')
  const [facilities, setFacilities] = useState({
    tentForRent: false,
    toilet: false,
    electricity: false,
    wifi: false,
    parking: false,
    breakfast: false,
    store: false,
  })

  const handleChangeFacilities = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFacilities({
      ...facilities,
      [event.target.name]: event.target.checked,
    })
    alert(event.target.name)
  }

  // For upload button
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  })

  return (
    <main className='bg-white min-h-screen px-14 py-16'>
      <div>
        <h1 className='text-4xl font-bold text-cgr-dark-green mb-8'>
          {title} campground
        </h1>
        <Card>
          <div className='px-14 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-lg items-center gap-4'>
              <p>Campground name : </p>
              <TextField
                required
                id='name'
                label='Campground name'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='col-span-2 lg:col-span-3'
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value)
                }}
              />
              <p>Telephone number : </p>
              <TextField
                required
                id='tel'
                label='Telephone number'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='col-span-2 lg:col-span-3'
                value={tel}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTel(event.target.value)
                }}
              />
              <p className='self-start pt-1'>Address : </p>
              <div className='grid grid-cols-1 md:grid-cols-2 col-span-2 lg:col-span-3 gap-3 items-start'>
                <TextField
                  id='houseNum'
                  label='House number'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={houseNum}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHouseNum(event.target.value)
                  }}
                />
                <TextField
                  id='lane'
                  label='Lane'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={lane}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setLane(event.target.value)
                  }}
                />
                <TextField
                  id='road'
                  label='Road'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  className='md:col-span-2'
                  value={road}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRoad(event.target.value)
                  }}
                />
                <TextField
                  id='subdistrict'
                  label='Sub-district'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={subdistrict}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSubdistrict(event.target.value)
                  }}
                />
                <TextField
                  id='district'
                  label='District'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={district}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDistrict(event.target.value)
                  }}
                />
                <TextField
                  required
                  id='province'
                  label='Province'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={province}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setProvince(event.target.value)
                  }}
                />
                <TextField
                  id='postalCode'
                  label='Postal code'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  value={postalCode}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPostalCode(event.target.value)
                  }}
                />
                <TextField
                  required
                  id='googleMap'
                  label='Google map link'
                  variant='outlined'
                  size='small'
                  InputProps={{ style: { borderRadius: '10px' } }}
                  className='md:col-span-2'
                  value={road}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRoad(event.target.value)
                  }}
                />
              </div>
              <p>Website : </p>
              <TextField
                required
                id='website'
                label='Website'
                variant='outlined'
                size='small'
                InputProps={{ style: { borderRadius: '10px' } }}
                className='col-span-2 lg:col-span-3'
                value={website}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setWebsite(event.target.value)
                }}
              />
              <p className='self-start pt-1'>Facilities : </p>
              <div className='col-span-2 lg:col-span-3'>
                <FormGroup className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.tentForRent}
                        onChange={handleChangeFacilities}
                        name='tentForRent'
                      />
                    }
                    label='Tent'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.toilet}
                        onChange={handleChangeFacilities}
                        name='toilet'
                      />
                    }
                    label='Toilet & Shower'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.electricity}
                        onChange={handleChangeFacilities}
                        name='electricity'
                      />
                    }
                    label='Electricity'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.wifi}
                        onChange={handleChangeFacilities}
                        name='wifi'
                      />
                    }
                    label='Wifi'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.parking}
                        onChange={handleChangeFacilities}
                        name='parking'
                      />
                    }
                    label='Parking'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.breakfast}
                        onChange={handleChangeFacilities}
                        name='breakfast'
                      />
                    }
                    label='Breakfast'
                  />{' '}
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#339989',
                          '&.Mui-checked': { color: '#339989' },
                        }}
                        checked={facilities.store}
                        onChange={handleChangeFacilities}
                        name='store'
                      />
                    }
                    label='Convenience store'
                  />
                </FormGroup>
              </div>
              <p>Upload image : </p>
              <Button
                component='label'
                role={undefined}
                variant='contained'
                tabIndex={-1}
                className='bg-cgr-dark-green active:bg-cgr-dark-green hover:bg-cgr-dark-green focus:bg-cgr-dark-green'>
                Upload file
                <VisuallyHiddenInput type='file' />
              </Button>
            </div>
            <div className='flex place-content-center w-full'>
              <button className='cgr-btn mt-8 w-full md:w-2/3'>
                {submitBtnTitle}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
