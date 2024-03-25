export default async function getCampgrounds(filter?: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/campgrounds?${filter}`
  )

  if (!response.ok) {
    throw new Error('Cannot fetch campgrounds data')
  }

  return response.json()
}
