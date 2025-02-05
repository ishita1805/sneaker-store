import Button from '../components/button'
import upcoming from '../assets/upcoming.jpg'
import { useNavigate } from 'react-router-dom'
import products from '../content/products';

const Upcoming = () => {
  const navigate = useNavigate();

  const product = products.find(p => p.limited);
  return (
    <div className="flex md:flex-row items-center justify-between flex-col">
      <div>
        <img src={upcoming} className='md:w-[50vw] h-[80vh] md:h-[90vh] object-cover w-[80vw] md:mt-0 mt-12' />
      </div>
      <div className='flex-grow px-12 md:py-24 py-12 flex flex-col items-center justify-center'>
        <div className='md:text-base text-sm font-maga font-light mb-4'>15th January 2025</div>
        <h1 className='md:text-4xl text-2xl font-maharlika mb-6'>Upcoming Drop</h1>
        <div className='md:text-lg text-base mb-2 font-maharlika'>{product?.label}</div>
        <p className='mb-2 md:text-lg text-base font-thin'>Get these slides at the lowest prices. Grab yours now!</p>
        <div className='md:text-lg text-base  font-normal font-maga mb-6 text-red-500'>Pre Book Now - Only 20 Pairs</div>
        <Button label='Pre Book Now' className="font-maga" onClick={()=>{ navigate('/product/nike-greenday-slides')}} variant='primary ' size='sm' />
      </div>
    </div>
  )
}

export default Upcoming