import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import getCampground from '@/libs/campgrounds/getCampground'
import getCampgroundSites from '@/libs/campgrounds/getCampgroundSites'
import { getServerSession } from 'next-auth'
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

export default async function AdminViewCampground({
  params,
}: {
  params: { cgid: string }
}) {
  const campground: CampgroundItem = (await getCampground(params.cgid)).data

  const campgroundSites: CampgroundSitesJson = await getCampgroundSites(
    params.cgid
  )

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

  return (
    <main className='px-4 py-14 sm:px-10 md:px-16 lg:px-36 xl:px-60 2xl:px-80'>
      <Card>
        {/* campground detail */}
        <div className='p-10'>
          <div className='flex flex-wrap justify-between'>
            <h1 className='text-3xl font-bold text-cgr-dark-green'>
              {campground.name}
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
                address={addressString}
                googleMap={campground.address.link}
                website={campground.website}
                tel={campground.tel}
                facilities={campground.facilities}
              />
            </div>
            <div className='h-full w-full'>
              {campground.pictures.length != 0 ? (
                <Image
                  src={`${process.env.BACKEND_URL}/images/${campground.pictures[0]}`}
                  alt={`${campground.name} picture`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ objectFit: 'cover' }}
                  className='w-full h-full rounded-lg'></Image>
              ) : (
                <div className='w-1/4 rounded-xl shadow-none bg-cgr-gray-10 w-full h-full flex items-center justify-center'>
                  <div>
                    <i className='bi bi-image h-full text-3xl'></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* site */}
        <div className='px-10 py-4'>
          <div className='flex flex-row items-end mb-5'>
            <h1 className='text-2xl font-semibold text-cgr-dark-green mr-2'>
              {campground.amount}
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
            {campgroundSites.sites.map((obj) => (
              <tr key={obj._id} className='text-center'>
                <td>{obj.zone}</td>
                <td>{obj.number}</td>
                <td>{obj.size.swidth + '*' + obj.size.slength}</td>
                <td>
                  <Link href={`/campgrounds/view/${params.cgid}/${obj._id}`}>
                    <button className='cgr-btn-outline-gray'>view</button>
                  </Link>
                </td>
                <td>
                  <button className='cgr-btn-outline-red'>delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Card>
    </main>
  )
}
