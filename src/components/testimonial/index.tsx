interface Props {
  user: string;
  label: string;
  text: string;
  picture: string;
}

const Testimonial = (props: Props) => {
  const { user, label, text, picture } = props;

  return (
    <div className="relative border-solid delay-100 transition-all h-40 w-[90vw] md:w-80 max-w-80 border-neutral-100 border-[1px] bg-white p-4 rounded-md shadow-sm flex flex-row group">
      <div className="flex flex-col overflow-hidden">
        <div className="font-maharlika text-base text-neutral-400">{user}</div>
        <div className="font-maga text-xs text-neutral-800 mb-2">{label}</div>
        <p className="font-maga text-sm text-neutral-950 relative text-ellipsis overflow-hidden max-h-24 group-hover:w-full">{text}</p>
      </div>
      <img src={picture} className="w-auto aspect-square ml-2 rounded-md group-hover:absolute group-hover:top-4 group-hover:right-4 group-hover:h-12" />
    </div>
  )
}

export default Testimonial