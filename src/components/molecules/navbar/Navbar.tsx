// import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Button } from '../../ui/button';
import Heading from '../../ui/heading';
import NavItem from '../navbaritem/NavItem';
import { Menu } from 'lucide-react';
import ThemeToggler from '../theme-toggler/ThemeToggler';
import { useState } from 'react';
import SpringModal from '../../ui/Modal';
import { Link } from 'react-router-dom';
import { IconRepository } from '../../../repository/icons/icon.repository';
import useGetLoginUser from '../../../utils/userUtils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/ui/avatar';
// import { useDashBoardContext } from '../../../pages/Layout/DashBoardLayout';
// type Props = {}
type iNavProp = {
  name: string;
  to: string;
};
const navLinks: readonly iNavProp[] = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'dashboard',
    to: '/dashboard',
  },
  {
    name: 'about-us',
    to: '/about',
  },
  {
    name: 'contact-us',
    to: '/contact',
  },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const user = useGetLoginUser(); // if the user login he will update the state of the user
  // const { user:U } = useDashBoardContext() // doing this will throw an error  because we are trying to use a context outside a provider

  return (
    <>
      <SpringModal className="md:hidden" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => {
            // if (link.name.toLowerCase() == 'dashboard' && user == null) return // dont show dashboard option if user is null
            return (
              <NavItem
                hideSpan
                onClick={() => {
                  setIsOpen(false);
                }}
                className="bg-red-200 max-w-fit px-6"
                to={link.to}
                key={link.to}
              >
                {link.name}
              </NavItem>
            );
          })}
        </div>
        {user ? (
          'user'
        ) : (
          <Button
            className="text-lg mt-4 flex-none
              uppercase
              w-[min(25rem,calc(100%-2rem))] block mx-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            <Link to="auth" className="block w-full">
              login
            </Link>
          </Button>
        )}
      </SpringModal>
      <nav className="bg-white z-[1000] dark:bg-gray-950 dark:text-white px-4  sticky h-14 top-0 shadow-sm w-full flex ">
        <div className="max-w-7xl mx-auto flex w-full items-center h-full justify-between">
          <Link to="/">
            <Heading className="flex flex-col my-6 font-serif text-xl text-center uppercase">
              <IconRepository.DjokwaIcon className="w-3/4  mx-auto" />
            </Heading>
          </Link>
          <div className="flex items-center ">
            <div className="md:flex items-center space-x-3 px-4 hidden">
              {navLinks.map((link) => {
                return (
                  <NavItem
                    className="text-sm lg:text-lg capitalize flex-none"
                    to={link.to}
                    key={link.to}
                  >
                    {link.name}
                  </NavItem>
                );
              })}
              {user ? (
                <Link to="/dashboard">
                  {/* we can redirect the user base on s/he role 
                  e.g 
                  if(user.role === "admin"){
                  //goto  admin dashboard
                  }
                  else(user.role === "student"){
                  //goto  student dashboard
                  }
                  
                  */}
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt={String(user.userId)}
                    />
                    <AvatarFallback>{user.fullname}</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <Button className="px-6 bg-color_sidebar py-1 flex-none">
                  <Link to="auth" className="block w-full">
                    login
                  </Link>
                </Button>
              )}
              <ThemeToggler className="size-4" containerClassName="lg:w-16" />
            </div>
            <ThemeToggler
              className="size-4 "
              containerClassName="w-16 md:hidden"
            />
            <span
              className="size-8 ml-2 md:hidden flex items-center justify-center hover:ring-[1px] hover:bg-slate-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={25} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
