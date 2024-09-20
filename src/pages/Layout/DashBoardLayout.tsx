import { Outlet, redirect, useNavigation } from 'react-router-dom';
import DashboardHeader from '../../components/molecules/dashboardheader/DashboardHeader';
import SideBar from '../../components/molecules/sidebar/SideBar';
import { createContext, useContext, useState } from 'react';
import wait from '../../utils/wait';
import { GlobalLoader } from '../../components/molecules/Loaders/GlobalLoader';
import { isAxiosError } from 'axios';
import { IUserState, setUser } from '../../actions/userSlice';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { HttpCommon } from '../../hooks/httpCommon/httpCommon';
import { iUser } from '../../utils/types';
const userQuery = {
  queryFn: async () => {
    await wait(500);
    const user: IUserState = {
      user: {
        _id: '123',
        fullname: 'John Doe',
        email: 'john.doe@example.com',
        userId: 1,
        role: 'student', // toggle role here
      },
    };
    console.log(user);
    const { data } = await HttpCommon.get<{ user: iUser }>(
      '/users/current-user'
    );
    return data;
  },
  queryKey: ['user'],
};
export const loader = (queryClient: any) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery); // register a login user to tanstackquery
  } catch (error: any) {
    if (isAxiosError(error)) {
      console.log('err here', error.response);
      return redirect('/auth?message=' + error?.response?.data?.msg);
    }
    return 'something went wrong';
  }
};
export interface ISideBar {
  toggleSideBar: boolean;
  setToggleSideBar: (props: any) => void;
  showFullContent: boolean;
  setShowFullContent: (props: any) => void;
  user?: iUser;
}
const DashBoardContext = createContext<Partial<ISideBar>>({});
const DashBoardLayout = () => {
  const { user } = useQuery(userQuery).data as { user: iUser }; // for demo purpose here
  // save the user to redux so we can access it anywhere in the app
  const dispatch = useDispatch();

  const setUserData = (payload: any) => {
    return dispatch(setUser(payload));
  };
  setUserData(user); // storing the user so we can use it at the navbar or a lesser tree
  // in the import useDashBoardContext

  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);
  const [showFullContent, setShowFullContent] = useState<boolean>(true);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <DashBoardContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        showFullContent,
        setShowFullContent,
        user, // any children of dashboard can get the current login user
        // by importing the context
        //
      }}
    >
      <div className="h-screen max-w-7xl border  overflow-y-auto  rounded-md mx-auto ">
        <div className="flex flex-row h-full">
          <div className="flex-none h-full z-[10001] sticky left-0 top-0 bottom-0">
            <SideBar></SideBar>
          </div>
          <div className="flex-1 w-[calc(100%-25rem)]  overflow-y-auto--  flex flex-col  ">
            <DashboardHeader />
            <div
              className="flex-1  p-2 overflow-x-hidden
                        h-[calc(100%-3.5rem)] overflow-y-auto"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {isPageLoading && <GlobalLoader />}
    </DashBoardContext.Provider>
  );
};
export const useDashBoardContext = () => {
  const context = useContext(DashBoardContext);
  if (JSON.stringify(context) === '{}')
    // check if the developer is trying to user context outside the provide
    throw new Error('useDashBoardContext was used outside of DashBoardLayout'); // throw an error is a devoloper trys to consume useDashBoardContext outside useDashBoardProvider
  return context;
};

export default DashBoardLayout;
