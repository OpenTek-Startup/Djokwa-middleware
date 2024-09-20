import React from 'react';

interface DropDownMenuCardsProps {
  title: string;
  onclick: (title: string) => void;
}

const DropDownMenuCards: React.FC<DropDownMenuCardsProps> = ({
  title,
  onclick,
}) => {
  return (
    <div
      onClick={() => onclick(title)}
      className="w-72 h-fit my-2 mx-4 flex  uppercase ring-ringborderdropdown ring-2 bg-white rounded-sm rounded-s-md hover:bg-ringborderdropdown  transition delay-75 duration-400 ease-in-out cursor-pointer"
    >
      <span className="flex justify-center items-center pl-3  font-bold">
        {title}
      </span>
    </div>
  );
};

export default DropDownMenuCards;
