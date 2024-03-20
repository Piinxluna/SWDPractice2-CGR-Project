export default function Tag({
  children,
  size,
  px,
  py,
}: {
  children: React.ReactNode
  size?: string
  px?: string
  py?: string
}) {
  if (!size) size = 'md'
  if (!px) px = '4'
  if (!py) py = '1'

  return (
    <div className={`border rounded-md px-${px} py-${py}`}>
      <p className={`text-cgr-gray-60 text-${size} flex flex-row gap-1`}>
        {children}
      </p>
    </div>
  )
}
