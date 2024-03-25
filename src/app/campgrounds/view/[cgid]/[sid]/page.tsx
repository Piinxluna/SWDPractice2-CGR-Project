import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import Calendar from '@/components/basic/Calendar'
import Link from 'next/link'
import getCampgroundSite from '@/libs/campgrounds/getCampgroundSite'

export default async function ViewCampgroundSite({
  params,
}: {
  params: { cgid: string; sid: string }
}) {
  const campgroundSiteJson: CampgroundSiteJson = await getCampgroundSite(
    params.cgid,
    params.sid
  )
  const campground: CampgroundItem = campgroundSiteJson.campground
  const campgroundSite: CampgroundSiteItem = campgroundSiteJson.site

  const addressType: (keyof {
    houseNumber: string
    lane: string
    road: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
    link: string
  })[] = [
    'houseNumber',
    'lane',
    'road',
    'subDistrict',
    'district',
    'province',
    'postalCode',
  ]
  const address: string[] = []
  for (let type of addressType) {
    let sth = campground.address[type]
    address.push(sth)
  }
  const addressString = address.join(' ')

  // alforithm to find the month to show in availablilty
  const today = new Date(Date.now())
  const month = today.getMonth() + 1
  const year = today.getFullYear()

  return (
    <main className='px-4 py-14 sm:px-10 md:px-16 lg:px-32 xl:px-48 2xl:px-80'>
      <Card>
        {/* campground detail */}
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-cgr-dark-green'>
            {campground.name}
          </h1>
          <div className='flex flex-wrap justify-between mt-2 mb-4'>
            <h2 className='text-2xl font-medium text-cgr-dark-green'>
              Zone : {campgroundSite.zone} | Number : {campgroundSite.number}
            </h2>
            <p className='text-lg'>
              size :{' '}
              {`${campgroundSite.size.slength} * ${campgroundSite.size.swidth}`}
            </p>
          </div>
          <div className='flex flex-wrap justify-between'>
            <CampgroundDetail
              address={addressString}
              googleMap={campground.address.link}
              website={campground.website}
              tel={campground.tel}
              facilities={campground.facilities}
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
              month={month}
              year={year}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
            <Calendar
              month={month + 1}
              year={year}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
            <Calendar
              month={month + 2}
              year={year}
              unavailableDates={[1, 2, 3, 5, 7, 9]}
            />
          </div>
        </div>
      </Card>
    </main>
  )
}
