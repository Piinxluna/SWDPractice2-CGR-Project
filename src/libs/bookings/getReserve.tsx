export default async function getReserve(token: string, rid: string | null) {
  if (rid === null) return 'rid must nor be null'

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/reserves/${rid}`,
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
