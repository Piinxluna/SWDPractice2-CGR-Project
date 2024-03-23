import Tag from '../basic/Tag'

export default function CampgroundDetail({
  address,
  googleMap,
  website,
  tel,
  facilities,
}: {
  address: string
  googleMap: string
  website: string
  tel: string
  facilities: string[]
}) {
  return (
    <div>
      {/* address */}
      <div className='flex flex-row my-3'>
        <h1 className='text-xl font-semibold mr-4'>Address</h1>
        <p className='text-lg'>{address}</p>
      </div>

      {/* detail */}
      <table className='text-left my-3 divide-y divide-cgr-gray-40'>
        <tr className='h-10'>
          <th className='w-48'>Google Map</th>
          <td>{googleMap}</td>
        </tr>
        <tr className='h-10'>
          <th className='w-48'>Website</th>
          <td>{website}</td>
        </tr>
        <tr className='h-10'>
          <th className='w-48'>Telephone Number</th>
          <td>{tel}</td>
        </tr>
      </table>

      {/* tag */}
      <h1 className='text-md font-medium'>Facilities</h1>
      <div className='flex flex-row gap-3'>
        {facilities.map((obj) => (
          <Tag size='sm'>{obj}</Tag>
        ))}
      </div>
    </div>
  )
}
