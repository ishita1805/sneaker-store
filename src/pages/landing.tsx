import Button from "../components/button";
import icons from '../components/icon/icons.json'


const index = () => {
  const heading = [
    { title: 'Wear', subtext: 'अपनी'},
    { title: 'Your', subtext: 'कहानी'},
    { title: 'Style.', subtext: 'अपनाइए'},
  ];
  const buttons = [
    { label: 'Explore Collection', icon: icons.chevron_right, onClick: () => {}, variant: 'primary'},
    { label: 'Design Your Own', icon: icons.chevron_right, onClick: () => {}, variant: 'secondary'},
  ]

  return (
    <div className='landing-bg w-full h-[95vh] flex flex-col items-center justify-center relative bg-[#fcfaf7]'>
      <div className="flex flex-row items-center gap-8 lg:gap-12 backdrop-blur-sm bg-heading animate-bg-text">
        {heading.map(({title, subtext}, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
          <h1 className="font-maharlika font-medium text-[2.5rem] md:text-[3.5rem] my-1 mx-0 p-0">{title}</h1>
          <p className="text-2xl m-0 p-0">{subtext}</p>
        </div>
        ))}
      </div>
      <div className="mt-12 text-xl backdrop-blur-sm max-w-[80vw] text-center">Redefining streetwear, One artwork at a time</div>
      <div className="flex flex-row items-center justify-center mt-8 gap-4 md:gap-8 flex-wrap max-w-[80vw]">
        {buttons.map((el, i) => <Button size="sm" key={i} {...el} />)}
      </div>
    </div>
  )
}

export default index