import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import Image from 'next/image'
import Link from 'next/link'

export default function ViewCampground({
  params,
}: {
  params: { cgid: string }
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

  return (
    <main className='px-4 py-14 sm:px-10 md:px-16 lg:px-36 xl:px-60 2xl:px-80'>
      <Card>
        {/* campground detail */}
        <div className='p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <h1 className='text-3xl font-bold text-cgr-dark-green'>
                {mockdataCampground.name}
              </h1>
              <CampgroundDetail
                address={mockdataCampground.address}
                googleMap={mockdataCampground.googleMap}
                website={mockdataCampground.website}
                tel={mockdataCampground.tel}
                facilities={mockdataCampground.facilities}
              />
            </div>
            <div className='h-full w-full'>
              <Image
                src={mockdataCampground.picture}
                alt='campground image'
                width={0}
                height={0}
                sizes='100vw'
                style={{ objectFit: 'cover' }}
                className='w-full h-full rounded-lg'></Image>
            </div>
          </div>
        </div>
        {/* site */}
        <div className='px-10 py-4'>
          <div className='flex flex-row items-end'>
            <h1 className='text-2xl font-semibold text-cgr-dark-green mr-2'>
              {mockdataCampground.totalSite}
            </h1>
            <h1 className='text-lg font-medium'>Sites</h1>
          </div>
          <table className='cgr-table'>
            <tr>
              <th>Zone</th>
              <th>Site Number</th>
              <th>Size</th>
              <th>View</th>
            </tr>
            {mockdataCampground.sites.map((obj) => (
              <tr key={obj.sid} className='text-center'>
                <td>{obj.zone}</td>
                <td>{obj.siteNumber}</td>
                <td>{obj.size}</td>
                <td>
                  <Link href={`/campgrounds/view/${params.cgid}/${obj.sid}`}>
                    <button className='cgr-btn-outline-gray'>view</button>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Card>
    </main>
  )
}
