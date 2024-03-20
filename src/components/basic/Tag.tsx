export default function Tag({ title, size }: { title: string; size: string }) {
  return (
    <div className='border rounded-md px-4 py-1'>
      <p className={`text-cgr-gray-60 text-${size}`}>{title}</p>
    </div>
  )
}
