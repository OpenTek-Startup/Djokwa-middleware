import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import Heading from '../ui/heading';

export interface iSingleAccount {
  icon: string;
  title: string;
  to: string;
}

const SingleAccount = ({ icon, title, to }: iSingleAccount) => {
  return (
    <div className="min-h-16 shadow-lg space-y-2 w-full shadow-secondaryColor/60 flex-none border-[1px] mb-6 rounded-sm p-1 py-4">
      <img
        className="h-[15rem] w-full object-contain mb-4 "
        alt={title}
        src={icon}
      />

      <Link to={to}>
        <Button className="w-[min(calc(100%-1rem),30rem)] mx-auto bg-secondaryColor h-14 shadow-sm  flex justify-between items-center">
          <Heading className="text-sm lg:text-lg">{title}</Heading>
          <PlusCircle />
        </Button>
      </Link>
    </div>
  );
};

export default SingleAccount;
