import Carlendar from '@/components/basic/Calendar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row p-10 gap-10'>
      <Carlendar month={1} year={2024} unavailableDates={[]}/>
      <Carlendar month={3} year={2024} unavailableDates={[]}/>
      <Carlendar month={4} year={2024} unavailableDates={[]}/>
      <Carlendar month={5} year={2024} unavailableDates={[]}/>
    </main>
  )
}
