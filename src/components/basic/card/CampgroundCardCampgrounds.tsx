import Image from 'next/image'
import Link from 'next/link'

import Card from '@/components/basic/card/Card'
import Tag from '@/components/basic/Tag'

export default function CampgroundCardCampgrounds({
  campground,
}: {
  campground: CampgroundCard
}) {
  return (
    <Link href={`/campgrounds/view/${campground.id}`}>
      <Card>
        <div className='p-0 flex flex-row'>
          <Image
            src={campground.picture}
            alt={`${campground.name} picture`}
            width={0}
            height={0}
            sizes='100vw'
            className='object-cover w-2/5 rounded-l-xl shadow-none'></Image>
          <div className='w-3/5 p-6'>
            {/* Card Title */}
            <div className='mb-4'>
              <p className='text-2xl font-bold text-cgr-black'>
                {campground.name}
              </p>
              <p className='text-md font-light'>{campground.province}</p>
            </div>

            {/* Card Detail */}
            <div className='my-4 flex flex-col space-y-1 text-sm'>
              <div className='flex flex-row'>
                <i className='bi bi-signpost-split w-fill me-3'></i>
                <p>Site number : {campground.amount}</p>
              </div>
              <div className='flex flex-row'>
                <i className='bi bi-telephone w-fill me-3'></i>
                <p className=''>Tel : {campground.tel}</p>
              </div>
            </div>

            {/* Booking Date */}
            <div className='flex flex-row flex-wrap space-x-2'>
              {campground.facilities.map((data) => (
                <Tag size='sm'>{data}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
