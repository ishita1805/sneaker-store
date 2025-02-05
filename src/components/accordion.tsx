import React, { useState } from 'react';
import Icon from './icon';
import icons from './icon/icons.json';

type AccordionItemProps = {
  title: string;
  open?: boolean;
  content: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="border-b border-gray-300 mb-4">
      <button
        className="w-full text-base flex flex-row items-center justify-between text-left px-4 py-2 hover:bg-neutral-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <Icon icon={isOpen ? icons.minus : icons.add} className='h-5 w-5' />
      </button>
      {isOpen && (
        <div className="p-4  font-thin text-sm bg-white border-t border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};

interface Props {
  items: {
    title: string;
    content: React.ReactNode;
    open?: boolean;
  }[]
}
const Accordion = ({ items }: Props ) => {
  return (
    <div className="w-full my-4">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;

Accordion.defaultProps = {
  open: false,
}