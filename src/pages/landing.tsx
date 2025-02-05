import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import icons from '../components/icon/icons.json'


const Index = () => {
  const navigate = useNavigate();

  const heading = [
    { title: 'wear', subtext: 'अपनी'},
    { title: 'your', subtext: 'कहानी'},
    { title: 'story', subtext: 'अपनाइए'},
  ];
  const buttons = [
    { label: 'Explore Collection', icon: icons.chevron_right, onClick: () => { navigate('/collection')}, variant: 'primary'},
    { label: 'Design Your Own', icon: icons.chevron_right, onClick: () => { navigate('/design-your-own')}, variant: 'secondary'},
  ]

  return (
    <div className=' w-full h-[100vh]'>
      <div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
      <div className="select-none flex flex-row items-center gap-8 lg:gap-12  text-black animate-bg-text">
        {heading.map(({title, subtext}, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
          <h1 className="font-maharlika
           text-black backdrop-blur-sm text-[2.5rem] md:text-[3.5rem] my-1 mx-0 p-0">{title}</h1>
          <p className="text-2xl backdrop-blur-sm m-0 p-0 text-black">{subtext}</p>
        </div>
        ))}
      </div>
      <div className="select-none mt-8 backdrop-blur-sm text-xl max-w-[80vw] font-thin text-center text-black">Transforming fast fashion into wearable art</div>
      <div className="flex flex-row items-center justify-center mt-8 gap-4 md:gap-8 flex-wrap max-w-[80vw]">
        {buttons.map((el, i) => <Button size="sm" key={i} {...el} />)}
      </div>
      </div>
    </div>
  )
}

export default Index