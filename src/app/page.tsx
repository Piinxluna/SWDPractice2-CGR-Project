import CampgroundCardHome from '@/components/basic/card/CampgroundCardHome'
import Banner from '@/components/complex/Banner'
import CampgroundPanelHome from '@/components/complex/CampgroundPanelHome'

export default function Home() {
  const mockCampgrounds = [
    {
      id: '1',
      name: 'campground1',
      province: 'Bangkok',
      totalSite: 1000,
      tel: '012-345-6789',
      picture: '/img/campgroundSample.jpg',
      facilities: ['toilet', 'parking'],
    },
    {
      id: '1',
      name: 'campground1',
      province: 'Bangkok',
      totalSite: 1000,
      tel: '012-345-6789',
      picture: '/img/campgroundSample.jpg',
      facilities: ['toilet', 'parking'],
    },
    {
      id: '1',
      name: 'campground1',
      province: 'Bangkok',
      totalSite: 1000,
      tel: '012-345-6789',
      picture: '/img/campgroundSample.jpg',
      facilities: ['toilet', 'parking'],
    },
  ]

  return (
    <main>
      <Banner />
      <CampgroundPanelHome campgrounds={mockCampgrounds} />
    </main>
  )
}
