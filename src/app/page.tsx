import BookingCard from '@/components/basic/card/BookingCard'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <BookingCard campground={{name : 'Campground1', province : 'Bangkok', tel : '085-xxx-xxxx', picture : '/img/campgroundSample.jpg'}} site={{siteNumber : 1, zone : 'A'}} date={new Date(Date.now())} id='fuck' />
    </main>
  )
}
