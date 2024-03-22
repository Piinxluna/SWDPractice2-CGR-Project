import Link from 'next/link'
import CampgroundCardHome from '../basic/card/CampgroundCardHome'
import Card from '../basic/card/Card'

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
      {/* link for view more */}
      <Link
        href={'/campgrounds'}
        className='flex h-full hover:scale-105 duration-300'>
        <Card>
          <div className='text-center p-10 h-full content-center grid'>
            <div>
              <i className='bi bi-book-half text-7xl drop-shadow-2xl'></i>
              <br />
              <h1 className='text-4xl drop-shadow-2xl'>View More</h1>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}
