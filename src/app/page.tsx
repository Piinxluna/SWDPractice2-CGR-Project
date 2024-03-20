import Card from '@/components/basic/card/Card'
import { TextField } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <div className='p-10 flex flex-col gap-4 text-center'>
          <h1 className='text-2xl font-medium'>Login Form</h1>
          <TextField id="outlined-basic" label="Email" variant="outlined" InputProps={{style: {borderRadius: "10px"}}}/>
          <TextField type='password' id="outlined-basic" label="Password" variant="outlined" InputProps={{style: {borderRadius: "10px"}}}/>
          <button className='cgr-btn'>Summit</button>
        </div>
      </Card>
    </main>
  )
}
