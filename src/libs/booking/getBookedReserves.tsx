export default async function getBookedReserves(filter?: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/reserves/booked-reserves?${filter}`
  )

  if (!response.ok) {
    throw new Error('Data cannot fetch')
  }

  return response.json()
}
