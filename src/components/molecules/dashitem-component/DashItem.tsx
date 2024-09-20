import { cn } from '../../../lib/utils';
import { dashBoardItemsProps } from '../../../types/input.type';
import Heading from '../../ui/heading';
import deskImage from '../../../assets/Images/desk.png';

interface iDashItem extends Partial<dashBoardItemsProps> {
  // using partial because we dont have real data or demo data now
  className?: string;
}
const DashItem = ({ className }: iDashItem) => {
  // i
  return (
    <div
      className={cn(
        ' flex-none relative group hover:ring-[2px]  dark:shadow-sm  dark:bg-black dark:text-white p-2 border py-2 lg:py-3 mb-4 block rounded-md shadow-lg shadow-gray-400  ring-[1px] ring-[var(--color-bg-sidebar)] transition-all duration-300 bg-white',
        className
      )}
    >
      <div className="grid grid-cols-[auto,1fr] gap-4">
        <div className="overflow-hidden size-10 bg-black rounded-full">
          <img
            src={deskImage}
            alt="user image"
            className="size-full rounded-full object-cover"
          />
        </div>
        <div>
          <Heading className="text-lg lg:text-lg font-black font-bricolage">
            Student
          </Heading>
          <p className="text-sm">3455</p>
        </div>
      </div>
    </div>
  );
};

export default DashItem;
