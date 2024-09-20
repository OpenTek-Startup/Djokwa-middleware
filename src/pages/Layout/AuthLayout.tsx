import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/molecules/navbar/Navbar';

export const AuthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-[calc(100svh-3rem)] bg-auth_primary_color/95 hover:bg-auth_primary_color">
      <div
        className="fixed -mt-36  mr-4 h-screen w-[calc(100%+1rem)] rounded-es-[100rem] bg-white/95
          sm:-mt-4
          "
      ></div>

      <div
        className={
          ' relative z-20 bg-white max-w-2xl mx-auto w-[calc(100%-1rem)] lg:px-10 px-4 py-8  border-t shadow-lg rounded-sm max-h-[calc(100svh-4rem)] overflow-y-auto ' +
          className
        }
      >
        {children}
      </div>
    </div>
  );
};
export const AuthenticationLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
