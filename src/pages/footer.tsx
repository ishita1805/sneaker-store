import logo from '../assets/logo_white.png';
import Icon from '../components/icon';
import icons from '../components/icon/icons.json';

const Footer = () => {
    const content = [
        {
            heading: 'Socials',
            list: [
                {text: 'Instagram', link: ''},
                {text: 'X (formerly Twitter)', link: ''},
            ],
        },
        {
            heading: 'Shop Collection',
            list: [
                {text: 'Sneakers', link: ''},
                {text: 'Hoodies', link: ''},
                {text: 'T-shirts', link: ''},
                {text: 'Skirts', link: ''},
                {text: 'Watches', link: ''},
            ],
        },
        {
            heading: 'Help',
            list: [
                {text: 'Privacy Policy', link: ''},
                {text: 'Exchange Policy', link: ''},
                {text: 'Shipping & Payment', link: ''},
                {text: 'Terms of Service', link: ''},
            ],
        },
    ]
  return (
    <div className='bg-black px-12 py-12 text-white flex-col'>
        <img src={logo} className='h-16 w-16'/>
        <div className='mt-8 flex flex-col md:flex-row md:flex-wrap'>
            <div className='flex flex-col mb-8 flex-1'>
                <div className='text-lg font-medium font-maharlika mb-2 md:mb-4'>Ishita Kabra</div>
                <div className='w-fit border-solid border-2 border-white flex flex-row items-center'>
                    <input className='w-60 outline-none p-2 bg-transparent placeholder:text-neutral-500' placeholder='Never miss a drop, subscribe' />
                    <Icon icon={icons.chevron_right} className='h-9 w-9 p-2 cursor-pointer' />
                </div>
            </div>

            <div className='flex flex-row flex-wrap gap-2 lg:gap-24 md:gap-12'>
                {content.map(({heading, list}) => (
                    <div className='flex flex-col min-w-[40%] md:min-w-0'>
                        <div className='text-base font-medium font-maharlika mb-4'>{heading}</div>
                        {list.map((el) => <div className='text-sm font-thin mb-2 text-neutral-400'>{el.text}</div>)}
                    </div>
                ))}
            </div>
        </div>
        <div className='text-sm font-thin text-neutral-400 mt-4'>© 2024 Ishita Kabra | Photo by Leonardo Yip on Unsplash</div>
    </div>
  )
}

export default Footer