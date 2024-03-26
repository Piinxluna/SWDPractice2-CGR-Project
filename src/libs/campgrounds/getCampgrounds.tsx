export default async function getCampgrounds(query?: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/campgrounds?${query}&limit=1000`
  )

  if (!response.ok) {
    throw new Error('Cannot fetch campgrounds data')
  }

  return response.json()
}
