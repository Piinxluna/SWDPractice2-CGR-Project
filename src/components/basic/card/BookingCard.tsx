import Image from 'next/image'
import Link from 'next/link'

import Card from '@/components/basic/card/Card'
import { getMonthName } from '@/utils/getMonthName'

export default function Component({
  campground,
  site,
  date,
  id,
}: {
  campground: { name: string; province: string; tel: string; picture: string }
  site: { siteNumber: number; zone: string }
  date: Date
  id: string
}) {
  return (
    <Link href={`/bookings/${id}`}>
      <Card>
        <div className='p-0 flex flex-row'>
          <Image
            src={campground.picture}
            alt={`${campground.name} picture`}
            width={0}
            height={0}
            sizes='100vw'
            className='object-cover w-1/4 rounded-l-xl shadow-none'></Image>
          <div className='w-3/4 p-6'>
            {/* Card Title */}
            <div className='mb-4'>
              <p className='text-2xl font-bold text-cgr-black'>{campground.name}</p>
              <p className='text-md font-light'>{campground.province}</p>
            </div>

            {/* Card Detail */}
            <div className='my-4 flex flex-row flex-wrap space-y-1 text-sm'>
              <i className='bi bi-signpost-split row-span-2 w-full md:w-1/12'></i>
              <div className='w-11/12'>
                <p>Site number : {site.siteNumber}</p>
                <p>Zone : {site.zone}</p>
              </div>

              <i className='bi bi-telephone w-full md:w-1/12'></i>
              <p className='w-11/12'>Tel : {campground.tel}</p>
            </div>

            {/* Booking Date */}
            <div className='mt-3 text-cgr-dark-green font-bold text-lg'>
              Booking date : {date.getDate()} {getMonthName(date.getMonth())}{' '}
              {date.getFullYear()}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
