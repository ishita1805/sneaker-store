import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import asset from "../assets/story.jpg"
import icons from '../components/icon/icons.json'

const Story = () => {
  const navigate = useNavigate();
  const buttons = [
    { label: 'Explore Collection', icon: icons.chevron_right, onClick: () => {navigate('/collection')}, variant: 'primary'},
    { label: 'Design Your Own', icon: icons.chevron_right, onClick: () => {navigate('/design-your-own')}, variant: 'secondary'},
  ]
  return (
    <div className='flex lg:flex-row flex-col-reverse w-full bg-neutral-100 items-center justify-start'>
        <div className='lg:w-[60vw] px-24 lg:text-left  text-justify'>
            <h1 className='lg:text-2xl text-xl mb-8 lg:text-left text-center font-maharlika'>Make It Yours</h1>
            <p className='text-base font-maga font-thin mt-4'>Hi, I am Ishita. I’ve been creating art since I can remember. Finally at 24, I’m living my 10 year old self's dream.</p>
            <p className='text-base font-maga font-thin mt-4'>I transform fast fashion into wearable art pieces that truly reflect your individuality.  My canvas includes sneakers, bags, clothes, accessories, and even instruments like guitars, keyboards, laptops and more.</p>
            <p className='text-base font-maga font-thin mt-4'>If this is something that interests you, feel free to reach out.</p>
            <div className="flex flex-row  mt-8 gap-4 flex-wrap lg:justify-start justify-center lg:mb-0 mb-12">
              {buttons.map((el, i) => <Button size="sm" key={i} {...el} />)}
            </div>
        </div>
        <img src={asset} className="lg:w-[40vw] md:h-[80vh] h-[90vh] lg:py-0 py-12 w-[80vw] object-cover" />
    </div>
  )
}

export default Story