import { useState } from "react"
import Icon from "../icon"
import icons from "../icon/icons.json"

interface Props {
    pictures: string[],
    id: string,
    label: string,
    cost: string,
}

const Index = (el: Props) => {
    const [selected, setSelected] = useState<number>(0);

    const movePicture = (op: number) => {
        setSelected((s) => ((s + op  + (el.pictures.length)) % (el.pictures.length)))
    }
    return (
        <div className="flex-flex-col items-center justify-center cursor-pointer">
            <div className='group relative' key={el.id}>
                <img src={el.pictures[selected]} className='w-[50vw] md:w-80 aspect-square object-cover'/>
                <Icon onClick={() => movePicture(-1)} icon={icons.more_left} className="hidden group-hover:flex h-8 w-8 absolute bg-white rounded-full top-[45%] left-4 -translate-y-[50%]" />
                <Icon onClick={() => movePicture(+1)} icon={icons.more_right} className="hidden group-hover:flex h-8 w-8 absolute bg-white rounded-full top-[45%] right-4 -translate-y-[50%]" />
                <div className="flex flex-row absolute bottom-4 left-[50%] -translate-x-[50%] gap-2">
                   {el.pictures.map((_, i) => {
                    if (i > 2) return null;
                    return  <div className={`h-2 w-2 rounded-full ${i === selected || (selected > 1 && i == 2) ? 'bg-white' : 'bg-gray-300'}`}></div>;
                   })}
                </div>
            </div>
            <h1 className='text-base lg:text-base font-normal mt-4 text-center'>{el.label}</h1>
            <div className='text-base lg:text-base font-semibold mt-2 text-center'>{el.cost}</div>
        </div>
    )
}

export default Index