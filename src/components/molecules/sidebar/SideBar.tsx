/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable tailwindcss/classnames-order */
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useDashBoardContext } from '../../../pages/Layout/DashBoardLayout';
import { IconRepository } from '../../../repository/icons/icon.repository';
import SideBarItem from '../sidebaritem/SideBarItem';
import ThemeToggler from '../theme-toggler/ThemeToggler';
import Heading from '../../ui/heading';

interface isideitem {
  name: string;
  to: string;
  icon: any;
}
// i will prefer this isideitem to be in a file call navigations_links
const sideitems: readonly isideitem[] = [
  {
    name: 'dashboard',
    to: '/dashboard',
    icon: IconRepository.DashboardIcon,
  },
  {
    name: 'event',
    to: '/dashboard/event',
    icon: IconRepository.EvenIcon,
  },
  {
    name: 'transactions',
    to: '/dashboard/transactions',
    icon: IconRepository.CommentIcon,
  },
  {
    name: 'Students',
    to: '/dashboard/students',
    icon: IconRepository.StudentIcon,
  },
  // just add this for testing purposes
  // just imaging if the user is log in not as a (moderator,admin)  and
  // you dont want to show this item on the side bar
  // go to the side bar and see the implementation
  {
    name: 'all students',
    to: '/dashboard/all-students',
    icon: IconRepository.StaffIcon,
  },
  {
    name: 'Fees Payment',
    to: '/dashboard/feesPayment',
    icon: IconRepository.Dollars,
  },
  {
    name: 'statistics',
    to: '/dashboard/statistics',
    icon: IconRepository.StaffIcon,
  },
  {
    name: 'lectures',
    to: '/dashboard/lectures',
    icon: IconRepository.BookopenIcon,
  },
  {
    name: 'accounts',
    to: '/dashboard/accounts',
    icon: IconRepository.UserIcon,
  },
  {
    name: 'chat',
    to: '/dashboard/chat',
    icon: IconRepository.TeacherIcon,
  },
  // ...rest can go here
];

const SideBar = () => {
  const { toggleSideBar, setToggleSideBar, user } = useDashBoardContext();
  return (
    // w-[min(calc(100vw-0.2rem),250px)]--> it will return the smallest size
    //  its just like using minwidth and width to element from getting smaller than a precise size
    <div
      onClick={() => {
        if (setToggleSideBar) {
          setToggleSideBar(false);
        }
      }}
      className={cn(
        `
    h-screen
    z-[5]
    w-full sm:fit bg-red-400/15
fixed
sm:static
opacity-0 invisible
transition-all duration-500
sm:opacity-100 
sm:visible
   `,
        toggleSideBar && 'opacity-100 visible'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()} // stop parent from clicking when clicking on the child
        className={cn(
          `h-svh 
      w-[min(calc(100vw-0.2rem),15rem)]
      bg-color_sidebar dark:bg-black dark:text-white px-4 shadow-sm
      sm:px-6
      transition-[width] duration-700
      sm:!translate-x-0
      -translate-x-full
      `,
          toggleSideBar && 'opacity-100 visible translate-x-0'
        )}
      >
        <div className="flex flex-col h-full ">
          {/* flex this to none to always keep the app logo showing on the sidenav */}
          <div className="flex-none ">
            <Link to={'/dashboard'}>
              <Heading className="flex flex-col my-6 font-serif text-xl text-center uppercase">
                <IconRepository.DjokwaIcon className="w-3/4 mx-auto" />
              </Heading>
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* it will overflow inside the parent container no matter the height */}
            <div className="h-screen ">
              {/* you can remove the h-screen on the div 
                    just put for testing 
                    */}
              {sideitems.map(({ icon, name, to }) => {
                if (
                  user &&
                  user.role !== 'admin' &&
                  to.toLocaleLowerCase() == '/dashboard/all-students'
                )
                  return; // dont display all-student on the sidebar
                // toggle user role to see how it works
                // since user is demo user go to dashboardlayout at loader function and toggle user
                //
                return (
                  <SideBarItem
                    // more props like end replace can be pass to the component because we extend the types from navlink types
                    Icon={icon}
                    key={name}
                    to={to}
                    end // set the active class when at the end // dont how to explain this
                  >
                    {name}
                  </SideBarItem>
                );
              })}
            </div>
          </div>
          {/* flex this to none to always keep the theme toggler showing on the sidenav */}
          <div className="flex-none py-4">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
