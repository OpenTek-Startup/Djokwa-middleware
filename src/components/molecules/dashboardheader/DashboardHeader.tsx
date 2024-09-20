import { BsChevronDown } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { IconRepository } from '../../../repository/icons/icon.repository';
import Heading from '../../ui/heading';
import SearchComponent from '../search-component/Search';

import { Menu } from 'lucide-react';
import { useDashBoardContext } from '../../../pages/Layout/DashBoardLayout';
import Logout from '../../logout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../ui/dropdown'; // this is coming from shadcn
import ThemeToggler from '../theme-toggler/ThemeToggler';
interface iIcons {
  icon: typeof IconRepository.AccountDoorIcon;
  href?: string; // if the user clicks the icons tak the user the desire page
}
const icons: readonly iIcons[] = [
  {
    icon: IconRepository.MailIcon,
    href: '/login',
  },
  {
    icon: IconRepository.BellIcon,
    href: '/login',
  },
];
const RenderIcons = ({
  icon: Icon,

  href,
}: iIcons) => {
  const baseClassName =
    'rounded-full  flex-none size-6 md:size-8 ring-[1px] shadow-lg flex justify-center items-center';

  if (href) {
    return (
      <Link className={baseClassName} to={href}>
        <Icon height={15} width={15} />
      </Link>
    );
  }
  return (
    <div className={baseClassName}>
      <Icon height={15} width={15} />
    </div>
  );
};
const DashboardHeader = () => {
  const { toggleSideBar, setToggleSideBar, user } = useDashBoardContext();
  const location = useLocation();

  return (
    // give it sticky position to make it always at the top
    <div className="flex-none bg-white dark:bg-black dark:text-white h-14  sticky top-0 left-0 ring-0 z-[1000]  w-full shadow-lg  px-2  flex items-center">
      <div className="flex gap-x-8 w-full max-w-7xl px-4 mx-auto  justify-between items-center">
        {/* 3 row layout  */}
        <div className="flex-none flex lg:static items-center gap-x-2 ">
          <span
            className="md:hidden "
            onClick={() => {
              if (setToggleSideBar) {
                setToggleSideBar(!toggleSideBar);
              }
            }}
          >
            {/* this will be used to toggle the side bar since it will not show on smaller screens */}
            <Menu size={25} />
          </span>
          <Link to={'/dashboard'} className="font-black text-black">
            <Heading className="text-black text-sm  font-poppins">
              {location.pathname.split('/').reverse()[0].toUpperCase()}{' '}
              {/* name changes base on the page the user is on */}
            </Heading>
          </Link>
        </div>
        <div className="flex flex-col flex-1">
          <SearchComponent
            containerClassName="w-[min(30rem,calc(100%-2rem))] mx-auto
                        hidden md:flex
                        "
          />
        </div>

        <div>
          <div className="flex-none items-center flex gap-x-2 md:gap-x-3">
            <ThemeToggler
              className="size-4"
              containerClassName="w-16  lg:w-24"
            />
            {icons.map((icon) => (
              <RenderIcons key={icon.href} {...icon} />
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <div className="rounded-full  flex-none size-6 md:size-8 ring-[1px] shadow-lg flex justify-center items-center">
                    <IconRepository.UserIcon height={15} width={15} />
                  </div>
                  <span className="mr-2">
                    <BsChevronDown width={20} height={20} />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!w-fit flex flex-col gap-y-2 justify-center items-center  p-0">
                <Logout />
                <Link
                  to={'/dashboard/' + user?.role + '/profile'}
                  className="text-black"
                >
                  Profile
                </Link>
                <Link to="/">visit site</Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
