import CampgroundCardBooking from '../basic/card/CampgroundCardBooking'

export default function CampgroundPanelCampgrounds({
  campgrounds,
}: {
  campgrounds: {
    id: string
    name: string
    province: string
    totalSite: number
    tel: string
    picture: string
    facilities: string[]
  }[]
}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9'>
      {campgrounds.map((obj) => (
        <CampgroundCardBooking campground={obj} />
      ))}
    </div>
  )
}
