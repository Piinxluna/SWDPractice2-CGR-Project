'use client'

import Card from '@/components/basic/card/Card'
import CampgroundDetail from '@/components/complex/CampgroundDetail'
import deleteCampground from '@/libs/campgrounds/deleteCampground'
import getCampground from '@/libs/campgrounds/getCampground'
import getCampgroundSites from '@/libs/campgrounds/getCampgroundSites'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SuspenseUI from '@/components/basic/SuspenseUI'

export default function AdminViewCampground({
  params,
}: {
  params: { cgid: string }
}) {
  const router = useRouter()

  const { data: session } = useSession()
  if (!session || !session.user.token || session.user.role !== 'admin') {
    router.replace('/')
    return null
  }

  const [isReady, setIsReady] = useState(false)
  const [campground, setCampground] = useState<CampgroundItem | null>(null)
  const [campgroundSites, setCampgroundSites] =
    useState<CampgroundSitesJson | null>(null)
  const [addressString, setAddressString] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const campground = (await getCampground(params.cgid)).data
      setCampground(campground)
      setCampgroundSites(await getCampgroundSites(params.cgid))
      console.log(campground)

      const address: string[] = []
      for (let type of addressType) {
        let data = campground.address[type]
        address.push(data)
      }
      setAddressString(address.join(' '))
    }
    fetchData()
    setIsReady(true)
  }, [])

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

  if (!isReady || !campground || !campgroundSites) return <SuspenseUI />

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
              <button
                className='cgr-btn-red ml-5'
                onClick={async () => {
                  if (confirm('Are you sure to delete this campground?')) {
                    await deleteCampground(session.user.token, params.cgid)
                    router.back()
                  }
                }}>
                Delete
              </button>
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
