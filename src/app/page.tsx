import BookingCard from '@/components/basic/card/BookingCard'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <BookingCard campground={{name : 'Campground1', province : 'Bangkok', tel : 'a', picture : '/img/campgroundSample.jpg'}} site={{siteNumber : 1, zone : 'a'}} date={new Date(Date.now())} id='fuck' />
    </main>
  )
}
