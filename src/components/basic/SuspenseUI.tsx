import { CircularProgress, LinearProgress } from '@mui/material'

export default function SuspenseUI() {
  return (
    <div className='w-full'>
      Loading in progress... <LinearProgress />
    </div>
  )
}
