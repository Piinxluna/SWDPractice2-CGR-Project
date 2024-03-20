import { getMonthName } from '@/utils/getMonthName'

export default function Component({
  month,
  year,
  unavailableDates,
}: {
  month: number
  year: number
  unavailableDates: number[]
}) {
  const date = new Date(year, month, 0)
  const totalDay = date.getDate()
  const monthName = getMonthName(month)
  const beforeThisMonth = new Date(year, month-1, 1).getDay() 

  let availability = []

  for(let day = 1; day <= beforeThisMonth; day++){
    availability.push(
      <div className='bg-transpirent text-xs text-center w-5 h-5'></div>
    )
  }

  for (let day = 1; day <= totalDay; day++) {
    if (unavailableDates.includes(day)) {
      availability.push(
        <div className='bg-cgr-red text-xs text-center w-5 h-5'></div>
      )
    } else {
      availability.push(
        <div className='bg-cgr-gray-40 text-xs text-center w-5 h-5 py-0.5 px-auto'>
          {day}
        </div>
      )
    }
  }

  return (
    <div>
      <p>{beforeThisMonth}</p>
      <p className='text-gray-60 font-semibold text-center mb-2'>{monthName}</p>
      <div className='grid grid-cols-7 gap-2'>{availability}</div>
    </div>
  )
}
