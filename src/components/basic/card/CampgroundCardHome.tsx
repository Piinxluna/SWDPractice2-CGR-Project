import Link from 'next/link'
import Card from './Card'
import Image from 'next/image'
import Tag from '../Tag'

export default function CampgroundCardHome({
  campground,
}: {
  campground: {
    id: string
    name: string
    province: string
    totalSite: number
    tel: string
    picture: string
    facilities: string[]
  }
}) {
  return (
    <Link
      href={`/campgrounds/${campground.id}`}
      className='hover:scale-105 duration-300'>
      <Card>
        <div className='flex flex-col'>
          <Image
            src={campground.picture}
            alt={`${campground.name} picture`}
            width={0}
            height={0}
            sizes='100vh'
            className='object-cover w-full h-48 rounded-t-xl shadow-none'
          />
          <div className='px-6 pt-4 pb-6'>
            {/* title */}
            <p className='text-2xl font-semibold text-cgr-black'>
              {campground.name}
            </p>
            <p className='text-md font-light'>{campground.province}</p>
            {/* total site */}
            <div className='flex flex-row text-sm mt-3'>
              <i className='bi bi-signpost-split w-fill me-3'></i>
              <p>Site number : {campground.totalSite}</p>
            </div>
            {/* tel */}
            <div className='flex flex-row text-sm'>
              <i className='bi bi-telephone w-fill me-3'></i>
              <p className=''>Tel : {campground.tel}</p>
            </div>
            {/* facilities */}
            <div className='flex flex-row gap-2 mt-4'>
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
