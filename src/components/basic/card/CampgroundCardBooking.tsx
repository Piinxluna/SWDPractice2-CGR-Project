import Link from 'next/link'
import Card from './Card'
import Image from 'next/image'
import Tag from '../Tag'

export default function CampgroundCardBooking({ cgid }: { cgid: string }) {
  // const googleMapString = googleMap.split('/').slice(0, 3).join('/')
  // const websiteString = website.split('/').slice(0, 3).join('/')

  return (
    <Link
      href={`/campgrounds/view/${cgid}`}
      className='border border-[3px] border-cgr-light-green px-8 py-5 rounded-2xl mb-4 w-full relative'>
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold'>Campground Name</h1>
        <h2 className='text-md'>Province</h2>
      </div>
      <div className='flex flex-col mt-4'>
        <div>
          <i className='bi bi-compass mr-2'></i> Website : {'mock'}
        </div>
        <div>
          <i className='bi bi-map mr-2'></i> Map : {'Map'}
        </div>
        <div>
          <i className='bi bi-telephone mr-2'></i> Tel : {'Tel'}
        </div>
      </div>
      <div className='text-cgr-dark-green absolute top-5 right-5 text-2xl hover:text-4xl duration-300'>
        <i className='bi bi-arrow-right-circle-fill'></i>
      </div>
    </Link>
  )
}
