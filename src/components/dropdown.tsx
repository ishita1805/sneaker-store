import { useRef, useState } from 'react';
import Icon from './icon'
import icons from './icon/icons.json'
import { useOutsideClick } from '../hooks/useOutsideClick';

interface Props {
    values: {label: string, id: string }[]; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSelect: React.Dispatch<React.SetStateAction<any>>;    
    selected: {label: string; id: string }
}
const Dropdown = ({ values, onSelect, selected }: Props) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const el = useRef(null)
    useOutsideClick(el, () => setExpanded(false));
    return (
      <div ref={el} onClick={() => setExpanded(e => !e)} className="relative flex cursor-pointer p-2 font-medium bg-neutral-100 gap-8 flex-row items-center min-w-36 justify-between">
          {selected.label}
          <Icon icon={!expanded ? icons.more_down : icons.more_up} className="h-4 w-4"/>
          {expanded && <div className='z-[500] absolute shadow-sm w-full left-0 font-normal bg-neutral-100 bottom-0 translate-y-[100%] flex flex-col'>
              {values.map((el) => {
                if (el.id === 'default' && selected.id === el.id) return;
                return <div className={`${selected.id === el.id ? 'text-blue-500' : 'text-neutral-500'} p-2 hover:bg-neutral-200`} onClick={() => {onSelect(el); setExpanded(false)}} key={el.id}>{el.label}</div>
              })}
          </div>}
      </div>
    )
}

export default Dropdown