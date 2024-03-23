import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import Image from 'next/image'
import Link from 'next/link'
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

export default function AdminViewCampground({
  params,
}: {
  params: { cgid: string }
}) {
  const mockdataCampground = new Map()
  mockdataCampground.set('ABCDEFG1', {
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
  })

  mockdataCampground.set('ABCDEFG2', {
    name: 'Campground 2',
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
  })

  return (
    <main className='px-4 py-14 sm:px-10 md:px-16 lg:px-36 xl:px-60 2xl:px-80'>
      <Card>
        {/* campground detail */}
        <div className='p-10'>
          <div className='flex flex-wrap justify-between'>
            <h1 className='text-3xl font-bold text-cgr-dark-green'>
              {mockdataCampground.get(params.cgid).name}
            </h1>
            <div>
              <Link href={`/admin/campgrounds/edit?cgid=${params.cgid}`}>
                <button className='cgr-btn-outline'>Edit</button>
              </Link>
              <button className='cgr-btn-red ml-5'>Delete</button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            <div>
              <CampgroundDetail
                address={mockdataCampground.get(params.cgid).address}
                googleMap={mockdataCampground.get(params.cgid).googleMap}
                website={mockdataCampground.get(params.cgid).website}
                tel={mockdataCampground.get(params.cgid).tel}
                facilities={mockdataCampground.get(params.cgid).facilities}
              />
            </div>
            <div className='h-full w-full'>
              <Image
                src={mockdataCampground.get(params.cgid).picture}
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
          <div className='flex flex-row items-end mb-5'>
            <h1 className='text-2xl font-semibold text-cgr-dark-green mr-2'>
              {mockdataCampground.get(params.cgid).totalSite}
            </h1>
            <h1 className='text-lg font-medium'>Sites</h1>
            <Link
              href={`/admin/campgrounds/create/${params.cgid}`}
              className='ml-10'>
              <button className='cgr-btn'>Create Site</button>
            </Link>
          </div>
          <table className='cgr-table'>
            <tr>
              <th>Zone</th>
              <th>Site Number</th>
              <th>Size</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
            {mockdataCampground
              .get(params.cgid)
              .sites.map(
                (obj: {
                  sid: string | null
                  zone: string | number | null
                  siteNumber: string | number | null
                  size: string | null
                }) => (
                  <tr key={obj.sid} className='text-center'>
                    <td>{obj.zone}</td>
                    <td>{obj.siteNumber}</td>
                    <td>{obj.size}</td>
                    <td>
                      <Link
                        href={`/admin/campgrounds/view/${params.cgid}/${obj.sid}`}>
                        <button className='cgr-btn-outline-gray'>view</button>
                      </Link>
                    </td>
                    <td>
                      {/* doesn't set yet */}
                      <button className='cgr-btn-red'>Delete</button>
                    </td>
                  </tr>
                )
              )}
          </table>
        </div>
      </Card>
    </main>
  )
}
