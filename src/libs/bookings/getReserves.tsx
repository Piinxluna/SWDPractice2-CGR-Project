export default async function getReserves(token: string, query?: string) {
  console.log(query)

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/reserves?${query}`,
    {
      method: 'GET',
      headers: { authorization: `Bearer ${token}` },
    }
  )

  if (!response.ok) {
    throw new Error('Data cannot fetch')
  }

  return response.json()
}
