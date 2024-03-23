import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import Calendar from '@/components/basic/Calendar'
import Link from 'next/link'

export default function ViewCampgroundSite({
  params,
}: {
  params: { cgid: string; sid: string }
}) {
  const mockdataCampground = {
    name: 'Campground 1',
    address: '254 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330',
    googleMap: 'https://g.co/kgs/n29KzgK',
    website: 'https://www.chula.ac.th/',
    tel: '02-215-3555',
    facilities: ['toilet', 'park', 'tent for rent'],
    picture: '/img/campgroundSample.jpg',
    totalSite: 30,
    sites: [
      {
        sid: '1',
        zone: 'A',
        siteNumber: '1',
        size: '10 * 15',
      },
      {
        sid: '2',
        zone: 'A',
        siteNumber: '2',
        size: '10 * 15',
      },
      {
        sid: '3',
        zone: 'A',
        siteNumber: '3',
        size: '10 * 15',
      },
      {
        sid: '4',
        zone: 'B',
        siteNumber: '1',
        size: '10 * 15',
      },
    ],
  }

  // alforithm to find the month to show in availablilty
  const today = new Date(Date.now())
  const month = []
  const year = []

  let tempMonth = today.getMonth() + 1
  let tempYear = today.getFullYear()
  for (let i = 0; i < 3; i++) {
    if (tempMonth > 12) {
      tempMonth = 1
      tempYear += 1
    } else {
      tempMonth += 1
    }
    month.push(tempMonth)
    year.push(tempYear)
  }

  return (
    <main className='px-4 py-14 sm:px-10 md:px-16 lg:px-32 xl:px-48 2xl:px-80'>
      <Card>
        {/* campground detail */}
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-cgr-dark-green'>
            {mockdataCampground.name}
          </h1>
          <div className='flex flex-wrap justify-between mt-2 mb-4'>
            <h2 className='text-2xl font-medium text-cgr-dark-green'>
              Zone : {mockdataCampground.sites[1].zone} | Number :{' '}
              {mockdataCampground.sites[1].siteNumber}
            </h2>
            <p className='text-lg'>size : {mockdataCampground.sites[1].size}</p>
          </div>
          <div className='flex flex-wrap justify-between'>
            <CampgroundDetail
              address={mockdataCampground.address}
              googleMap={mockdataCampground.googleMap}
              website={mockdataCampground.website}
              tel={mockdataCampground.tel}
              facilities={mockdataCampground.facilities}
            />
            <Link
              href={`/bookings/create?sid=${params.sid}`}
              className='right-0 w-full lg:w-fit h-fit self-end mt-5'>
              <button className='cgr-btn'>Book Now</button>
            </Link>
          </div>
        </div>
        {/* site */}
        <div className='px-10 py-4'>
          <hr></hr>
          <div className='text-center my-5'>
            <h1 className='text-2xl font-semibold text-cgr-dark-green mr-2'>
              Availability
            </h1>
          </div>
          <div className='flex flex-wrap justify-center px-0 md:px-14px-48 mb-5 gap-16'>
            <Calendar
              month={month[0]}
              year={year[0]}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
            <Calendar
              month={month[1]}
              year={year[1]}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
            <Calendar
              month={month[2]}
              year={year[2]}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
          </div>
        </div>
      </Card>
    </main>
  )
}
