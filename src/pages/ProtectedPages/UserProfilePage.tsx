import { ArrowLeft, Settings } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomNavLink from '../../components/molecules/Links/CustomLink';
import Heading from '../../components/ui/heading';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';
// import { ScrollArea, ScrollBar } from '../../components/ui/scroll-area'
import { useDashBoardContext } from '../Layout/DashBoardLayout';
import { Scrollable } from '../../components/ui/Scrollable';
const UserProfilePage = () => {
  const { user } = useDashBoardContext();
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full -mt-2">
      <div className="min-h-[12rem]  bg-orange-400">
        <span
          className=" rounded-full sm:hidden text-white font-medium
                size-10 grid place-items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={25} />
        </span>
      </div>
      <div className=" mx-2 lg:mx-8 -mt-14 min-h-24  ">
        <div className="flex flex-col lg:items-start gap-y-6 lg:flex-row gap-x-4 min-h-[25rem]">
          <div className="flex-none overflow-hidden lg:w-[20rem] bg-white pt-5 rounded-sm shadow-sm">
            <div className="relative w-fit  mx-auto">
              <Avatar className="size-32">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={String(user?._id)}
                />
                <AvatarFallback>{user && user?.firstName}</AvatarFallback>
              </Avatar>
            </div>
            <div className="mb-6">
              <h2 className="text-center font-medium mt-4 text-sm text-gray-600  leading-tight -mb-0.5 italic">
                {user?._id ?? '11122'}
              </h2>
              <h2 className="text-center font-medium text-lg text-gray-600  leading-tight -mb-0.5 italic">
                {user?.firstName ?? 'RoseMary'}
              </h2>
              <h2 className="text-center font-medium text-lg text-gray-800  italic">
                {user?.email}
              </h2>
            </div>
            <div className="flex flex-col space-y-2 divide-y-[1px] border-t border-b ">
              {Array.from({ length: 4 }, (_, idx) => {
                console.log(_);
                return (
                  <div
                    key={idx}
                    className="flex p-2 px-4 justify-between items-center w-full max-w-md mx-auto"
                  >
                    <h2 className="text-lg font-[400]">Models</h2>
                    <span className="font-medium ">6</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="flex-1 py-3
                px-2  bg-white rounded-sm shadow-sm overflow-hidden"
          >
            <Heading
              className="px-5 leading-10 pb-3 font-semibold  border-b mb-6
                            "
            >
              Account Setup{' '}
              <span>
                <Settings className="inline-block" size={15}></Settings>
              </span>
            </Heading>
            <Scrollable className="w-96 whitespace-nowrap rounded-md border">
              <CustomNavLink
                replace
                end
                show
                to={'.'}
                className="bg-transparent rounded-none   text-black flex-none block"
                selectedClassName="bg-blue-700/80"
              >
                Update Profile
              </CustomNavLink>

              <CustomNavLink
                replace
                end
                to={'transactions'}
                show
                className="bg-transparent rounded-none   text-black flex-none block"
                selectedClassName="bg-blue-700/80"
              >
                last 10 transactions
              </CustomNavLink>
            </Scrollable>

            <br />
            <Outlet context={{ user }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
