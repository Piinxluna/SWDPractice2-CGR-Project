import CampgroundCardHome from '../basic/card/CampgroundCardHome'
import ViewMoreCampgroundCard from '../basic/card/ViewMoreCampgroundCard'

export default function CampgroundPanelHome() {
  const campground = {
    id: '123',
    picture: '/img/campgroundSample.jpg',
    name: 'Campground',
    province: 'Bangkok',
    amount: 10,
    website: 'a',
    googlemap: 'a',
    tel: '012-345-6789',
    facilities: ['tent', 'toilet'],
    totalSite: 10,
  }

  return (
    <div className='grid grid-cols-4 gap-10 mx-10 my-16 justify-center'>
      <CampgroundCardHome campground={campground} />
      <CampgroundCardHome campground={campground} />
      <CampgroundCardHome campground={campground} />
      <ViewMoreCampgroundCard />
    </div>
  )
}
