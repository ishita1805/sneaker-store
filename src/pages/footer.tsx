/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router';
import logo from '../assets/logo_white.png';
import Icon from '../components/icon';
import icons from '../components/icon/icons.json';
import { subscribeToList } from '../api/googleForms';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState<string>('');
    const [formState, setFormState] = useState<'init' | 'loading' | 'error'>('init');
    const navigate = useNavigate();

    const content = [
        {
            heading: 'Socials',
            list: [
                {text: 'Instagram', external: true, link: 'https://www.instagram.com/ishita.customs'},
                {text: 'X (formerly Twitter)', external: true, link: 'https://www.x.com/ishkbrr'},
            ],
        },
        {
            heading: 'Shop Collection',
            list: [
                {text: 'Sneakers', external: false, link: '/collection?category=sneakers'},
                {text: 'Hoodies', external: false, link: '/collection?category=hoodies'},
                {text: 'Denims', external: false, link: '/collection?category=denims'},
            ],
        },
        {
            heading: 'Help',
            list: [
                {text: 'Privacy Policy', external: false, link: '/privacy-policy?section=all'},
                {text: 'Shipping & Payment', external: false, link: '/privacy-policy?section=shipping-payment'},
                {text: 'Terms of Service', external: false, link: '/privacy-policy?section=terms-of-service'},
            ],
        },
    ]
  return (
    <div className='bg-black px-12 py-12 text-white flex-col w-full'>
        <img src={logo} className='h-16 w-16'/>
        <div className='mt-8 flex flex-col md:flex-row md:flex-wrap'>
            <div className='flex flex-col mb-8 flex-1'>
                <div className='text-lg font-medium font-maharlika mb-2 md:mb-4'>Ishita Kabra</div>
                <div className='w-fit border-solid border-2 border-white flex flex-row items-center'>
                    <input value={email} onKeyDown={async (e) => {
                        if (e.code !== 'Enter' || formState === 'loading') return;
                        try {
                            setFormState('loading')
                           await subscribeToList(email);
                           setFormState('init')
                        } catch(e: any) {
                            console.log(e);
                            setFormState('error')
                        } finally {
                            setEmail('');
                        }
                    }} onChange={(e) => setEmail(e.target.value)} className='w-60 outline-none p-2 bg-transparent placeholder:text-neutral-500' placeholder='Never miss a drop, subscribe' />
                    <Icon onClick={async () => {
                       try {
                        if (formState === 'loading') return;
                        setFormState('loading');
                        await subscribeToList(email);
                        setFormState('init');
                        } catch(e: any) {
                            console.log(e);
                            setFormState('error');
                        } finally {
                            setEmail('');
                        }
                    }} icon={formState === 'loading' ? icons.loading : icons.chevron_right} className='h-9 w-9 p-2 cursor-pointer' />
                </div>
            </div>

            <div className='flex flex-row flex-wrap gap-2 lg:gap-24 md:gap-12'>
                {content.map(({heading, list}) => (
                    <div key={heading} className='flex flex-col min-w-[40%] md:min-w-0'>
                        <div className='text-base font-medium font-maharlika mb-4'>{heading}</div>
                        {list.map((el) => <div key={el.link} onClick={() => el.external ? window.open(el.link, '__blank') : navigate(el.link)} className='text-sm font-thin mb-2 text-neutral-400 cursor-pointer'>{el.text}</div>)}
                    </div>
                ))}
            </div>
        </div>
        <div className='text-sm font-thin text-neutral-400 mt-4'>© 2024 Ishita Kabra</div>
    </div>
  )
}

export default Footer