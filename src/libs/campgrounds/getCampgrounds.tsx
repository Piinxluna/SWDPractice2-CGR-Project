export default async function getCampgrounds() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/campgrounds`)

  if (!response.ok) {
    throw new Error('Data cannot fetch')
  }

  return response.json()
}
