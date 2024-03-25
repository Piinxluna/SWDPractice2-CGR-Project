export default async function getCampgroundSite(cgid: string, sid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/campgrounds/${cgid}/sites/${sid}`
  )

  if (!response.ok) {
    throw new Error('Data cannot fetch')
  }

  return response.json()
}
