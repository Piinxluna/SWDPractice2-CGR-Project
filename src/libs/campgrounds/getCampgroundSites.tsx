export default async function getCampgroundSites(cgid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/campgrounds/${cgid}/sites`
  )

  if (!response.ok) {
    throw new Error('Cannot fetch campground sites')
  }

  return response.json()
}
