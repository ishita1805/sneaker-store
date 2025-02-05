import { useRef } from "react";
import icons from '../components/icon/icons.json';
import { useOutsideClick } from "../hooks/useOutsideClick";
import Icon from "./icon";
interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
  const elemRef = useRef(null);
  useOutsideClick(elemRef, onClose);
	

  return (
    <div className="fixed z-[999999] top-0 left-0 size-full bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center">
      <div ref={elemRef} className="relative bg-white rounded-sm font-maga shadow-sm border-solid border-[1px] border-neutral-100">
        <Icon icon={icons.close} className="absolute h-6 w-6 cursor-pointer top-4 right-4" onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default Modal