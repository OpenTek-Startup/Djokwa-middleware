import React from 'react';
import { cn } from '../../../lib/utils';
import { demoUser } from '../../../constants/demoData';
import Heading from '../../ui/heading';
import deskImage from '../../../assets/Images/desk.png';

interface iUserCard {
  className?: string;
  direction?: 'row' | 'column'; // this is how the card to display
}
const DisplaySubInformation = ({
  key_,
  value,
}: {
  key_: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-2 ">
      <Heading className="flex items-center">{key_}:</Heading>
      <p className="text-sm  text-gray-600  lg:text-xl">{value}</p>
    </div>
  );
};
const UserProfileCard = ({ className, direction }: iUserCard) => {
  return (
    <div
      className={cn(
        'rounded-sm flex-wrap gap-y-4 flex w-[calc(100%-0.4rem)]-- w-fit max-w-3xl gap-x-4 items-center mx-auto-- shadow-md ring-[1px] ring-black min-h-12 py-3 px-4',
        className,
        direction == 'column' && 'flex-col '
      )}
    >
      <div
        className={cn(
          'flex-none size-[min(5rem,calc(100vw-1rem))] lg:size-[min(8rem,calc(100vw-1rem))] rounded-full bg-black',
          direction == 'column' && 'size-[min(10rem,calc(100vw-1rem))] '
        )}
      >
        <img
          src={deskImage}
          className="size-full object-fit rounded-full"
          alt="image here"
        />
      </div>
      <div className="flex flex-col">
        {/* dispay user information here  */}
        {demoUser.user !== null && (
          <>
            <DisplaySubInformation
              key_="fullName"
              value={demoUser?.user?.fullname}
            />
            <DisplaySubInformation key_="Email" value={demoUser?.user?.email} />
            <DisplaySubInformation key_="Role" value={demoUser?.user?.role} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
