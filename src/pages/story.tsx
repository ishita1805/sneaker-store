import Button from "../components/button";
import icons from '../components/icon/icons.json'

const Story = () => {
  const buttons = [
    { label: 'Explore Collection', icon: icons.chevron_right, onClick: () => {}, variant: 'primary'},
    { label: 'Design Your Own', icon: icons.chevron_right, onClick: () => {}, variant: 'secondary'},
  ]
  return (
    <div className='flex flex-row flex-wrap w-full bg-neutral-100 items-center justify-start'>
        <div className='w-full lg:w-[50vw] py-24 px-12'>
            <h1 className='text-2xl mb-8 font-maharlika'>Make It Yours</h1>
            <p className='text-base font-maharlika mt-4'>Hi, I am Ishita. I’ve been creating art since I can remember. Finally at 24, I’m living my 10 year old self's dream.</p>
            <p className='text-base font-maharlika mt-4'>I transform fast fashion into one-of-a-kind art pieces that truly reflect your individuality.  My canvas includes sneakers, watches, clothes, accessories, and even instruments like guitars, keyboards, laptops and more.</p>
            <p className='text-lg font-maharlika mt-4'>If this is something that interests you, Feel free to reach out.</p>
            <div className="flex flex-row  mt-8 gap-4 flex-wrap">
                    {buttons.map((el, i) => <Button size="sm" key={i} {...el} />)}
                  </div>
        </div>
    </div>
  )
}

export default Story