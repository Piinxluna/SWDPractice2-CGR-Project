import CampgroundCardHome from '../basic/card/CampgroundCardHome'
import ViewMoreCampgroundCard from '../basic/card/ViewMoreCampgroundCard'

export default function CampgroundPanelHome({
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-16 justify-center'>
      {campgrounds.map((obj) => (
        <CampgroundCardHome campground={obj} />
      ))}
      <ViewMoreCampgroundCard />
    </div>
  )
}
