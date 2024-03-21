import BookingCard from '@/components/basic/card/BookingCard'

export default function BookingPanel({
  bookings,
}: {
  bookings: {
    campground: { name: string; province: string; tel: string; picture: string }
    site: { siteNumber: number; zone: string }
    date: Date
    id: string
  }[]
}) {
  return (
    <div className='grid grid-cols-2 gap-6'>
      {bookings.map((obj) => (
        <BookingCard
          campground={obj.campground}
          site={obj.site}
          date={obj.date}
          id={obj.id}
        />
      ))}
    </div>
  )
}
