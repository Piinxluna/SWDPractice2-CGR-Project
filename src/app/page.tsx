import Carlendar from '@/components/basic/Calendar'
import Tag from '@/components/basic/Tag'
import CampgroundCardHome from '@/components/basic/card/CampgroundCardHome'
import { TextField } from '@mui/material'

export default function Home() {
  return (
    <main className='flex flex-row p-10 gap-10'>
      <CampgroundCardHome
        campground={{
          id: 'a',
          name: 'Capmground1',
          province: 'Bangkok',
          totalSite: 10,
          tel: '085-xxx-xxxx',
          picture: '/img/campgroundSample.jpg',
          facilities: ['toilet', 'electric'],
        }}
      />
    </main>
  )
}
