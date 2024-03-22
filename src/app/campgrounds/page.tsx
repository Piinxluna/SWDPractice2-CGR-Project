import CampgroundPanelCampgrounds from '@/components/complex/CampgroundPanelCampgrounds'

export default function Campgrounds() {
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
    <div className='px-5 pt-7'>
      <div className='text-4xl font-bold mb-6 z-30 text-cgr-black'>
        Campgrounds
      </div>
      <div className='h-1 w-full mt-5 mb-10 bg-cgr-dark-green rounded-xl'></div>
      <CampgroundPanelCampgrounds campgrounds={mockCampgrounds} />
    </div>
  )
}
