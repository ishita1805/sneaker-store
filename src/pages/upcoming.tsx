import Button from '../components/button'
import upcoming from '../assets/upcoming.jpeg'

const Upcoming = () => {
  return (
    <div className="px-12 py-24 flex flex-col items-center justify-center font-maharlika">
      <div className='text-base mb-4'>15th January 2025</div>
      <h1 className='text-2xl mb-2'>Upcoming Drop</h1>
      <div className='text-base mb-4'>Nike Calm Slides - Green Day</div>
      <div className='text-base font-medium font-maga mb-4 text-red-500'>Limited Addition - Only 20 Pairs</div>
      <div>
        <img src={upcoming} className='min-h-[50vh] max-h-[50vh] aspect-square rounded-md mb-4 shadow-sm' />
      </div>
      <Button label='Pre Book Now!' onClick={()=>{}} variant='primary' size='lg' />
    </div>
  )
}

export default Upcoming