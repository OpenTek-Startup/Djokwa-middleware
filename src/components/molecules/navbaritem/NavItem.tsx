import { NavLink } from 'react-router-dom';
import { iSideBarItemsProps } from '../sidebaritem/SideBarItem';
import { cn } from '../../../lib/utils';
type iNavProps = Omit<iSideBarItemsProps, 'animateClassName' | 'Icon'> & {
  hideSpan?: boolean;
};

const NavItem = ({
  children,
  to,

  className,
  hideSpan,

  ...props
}: iNavProps) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        cn(
          'text-lg dark:text-white uppercase group text-black hover:text-blue-400',
          className,
          isActive && 'active'
        )
      }
    >
      {children}
      {!hideSpan && (
        <span className="h-[2px] group-hover:w-full  group-[.active]:w-full w-0 transition-all duration-500 mx-auto rounded-full  bg-[var(--color-bg-sidebar)] block max-w-[min(80%,30rem)]"></span>
      )}
    </NavLink>
  );
};

export default NavItem;
