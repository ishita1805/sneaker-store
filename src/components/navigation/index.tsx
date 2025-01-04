import logo from '../../assets/logo_black.svg'
import icons from '../../components/icon/icons.json'
import Icon from '../../components/icon'
import { useState } from 'react'

const Index = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className='z-[9000] sticky top-0 w-full'>
      <div className='flex lg:hidden w-full'>
        <div className={`flex relative cursor-pointer font-thin font-maga  ${expanded ? 'bg-white': 'backdrop-blur-sm'} w-full py-4  px-12 flex-row items-center justify-between`}>
          <Icon onClick={() => setExpanded((e) => !e)} icon={expanded ? icons.close : icons.hamburger} className={'h-8 w-8'} />
          <div className='h-12'>
            <img src={logo} className='h-full' />
          </div>
        </div>
       {expanded && <div className='absolute top-20 shadow-md font-thin text-sm bg-white w-full flex flex-col px-12 pb-6 gap-6 cursor-pointer'>
          <div>Shop</div>
          <div>Design Yours</div>
          <div>My Story</div>
          <div>Wishlist</div>
          <div>Cart</div>
          <div className=''>Login</div>
        </div>}
      </div>
      <div className="hidden relative lg:flex flex-row w-full py-4 px-12 gap-12 items-center cursor-pointer font-thin font-maga backdrop-blur-sm">
          <div>Shop</div>
          <div className="absolute bottom-0 translate-y-[100%] p-2 w-60  backdrop-blur-lg">
            <div>Sneakers</div>
            <div>Hoodies</div>
            <div>T-shirts</div>
            <div>Skirts</div>
            <div>Watches</div>
          </div>
          <div>Design Yours</div>
          <div>My Story</div>
          <div className='flex flex-1 h-16 items-center justify-center'>
              <img src={logo} className='mr-20 h-full' />
          </div>
          <div>Wishlist</div>
          <div>Cart</div>
          <div className=''>Login</div>
      </div>
    </div>
  )
}

export default Index
