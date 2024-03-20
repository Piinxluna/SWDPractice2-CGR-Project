export default function Button () {
  return(
    <div className="flex flex-col text-center">
      <h1 className="text-lg font-medium my-2">You Can copy code and paste in to your components</h1>
      <div className="my-2">
        <button className='cgr-btn'>Button Primary</button>
      </div>
      <div className="my-2">
        <button className='cgr-btn-outline'>Button Outline</button>
      </div>
      <div className="my-2">
        <button className='cgr-btn-red'>Button Red</button>
      </div>
      <div className="my-2">
        <button className='cgr-btn-outline-gray'>Button Outline Gray</button>
      </div>
    </div>
  )
}