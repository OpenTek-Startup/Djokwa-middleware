import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ActionFunctionArgs,
  Form,
  Link,
  redirect,
  useActionData,
  useSubmit,
} from 'react-router-dom';
import Input from '../components/molecules/updated-input/Input';
import { IconRepository } from '../repository/icons/icon.repository';
import { iLoginUser, iRegisterUser, iStudent } from '../utils/types';
// import wait from '../utils/wait';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Loader } from '../components/molecules/Loaders/loader';
import HandleGetFileFromStorage from '../components/molecules/handleUploadFile/HandleGetFileFromStorage';
import SubmitButton from '../components/ui/SubmitButton';
import Heading from '../components/ui/heading';
import { HttpCommon } from '../hooks/httpCommon/httpCommon';
import { AuthContainer } from './Layout/AuthLayout';
export const Label = ({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) => (
  <label
    htmlFor={htmlFor}
    className="text-[1rem] font-medium
sm:text-xl"
    style={{ marginBottom: '2rem!important' }}
  >
    {children}{' '}
  </label>
);
const LoginNotification = ({ userName }: { userName: string }) => {
  return toast.custom((t) => (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } fixed top-4 max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 ml-3">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="mt-1 text-sm text-gray-500">Welcome Back 🥰</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </motion.div>
  ));
};

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as iLoginUser; // data from the form here
  console.log(data);
  try {
    const res = await HttpCommon.post<{ user: iStudent }>('/auth/login', data);
    const userName = `${res.data?.user.firstName} ${res.data?.user.lastName}`;
    LoginNotification({ userName });

    // for testing you can pass an argument in the wait to throw an error
    // e.g wait(5000,{state:'reject'}) this will throw an error and the catch block will catch the error

    // if login is successfull redirect the user to the dashboard
    // but wait will need to know the user role ?
    // for future update we can user role from the backend response
    // e.g role=role.user
    // then will can check

    return redirect('/dashboard');
  } catch (err: any) {
    toast.error(err.response?.data?.msg || 'login fail please try again');
    // if (isAxiosError(err)) {
    //   // check if the error is coming for axios
    //   return err.response?.data?.msg || null;
    // }
    // other error throws from the try block
    return err.response?.data?.msg || null; // this need a rewrite again for later days
    // #TODO
  }
};
export const LoginPage = () => {
  const {
    register,
    trigger,
    formState: { errors, isValid },
  } = useForm<iLoginUser>();
  const submit = useSubmit();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      submit(e.currentTarget as HTMLFormElement);
    }
    await trigger();
  };
  const [showPassword, setShowPassword] = useState<boolean>(true);
  // check for submitting
  const actionData = useActionData() as any;

  return (
    <AuthContainer>
      <Form
        replace // not working for now
        // replace this page when the user successfully login to the dashboard so when s/he presses the back button it wont direct them to this page
        className="w-full space-y-5 "
        method="post"
        id="sigin-form"
        onSubmit={(e) => onSubmit(e)}
      >
        <h2 className="flex items-center justify-center text-xl font-semibold leading-loose tracking-tight text-center text-gray-900 sm:text-2xl">
          Welcome back <span className="ml-2">🙃</span>
        </h2>

        <div className="space-y-2 ">
          <label
            htmlFor="email"
            className="text-[1rem] font-medium
                    sm:text-xl"
            style={{ marginBottom: '2rem!important' }}
          >
            Email/Phone Number{' '}
          </label>
          <div
            className={
              'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
            }
          >
            <span className="grid w-12 place-items-center">
              <IconRepository.UserIcon width={20} height={20} />
            </span>
            <Input
              {...register('email', { required: true, maxLength: 30 })}
              name="email"
              id="name"
              placeholder="Your email address or phone number here "
              className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
            />
          </div>
          {errors.email && errors.email.type === 'required' && (
            <span className="error">This is required</span>
          )}
          {errors.email && errors.email.type === 'maxLength' && (
            <span className="error">Max length exceeded</span>
          )}
        </div>
        <div className="space-y-2 ">
          <label
            htmlFor="password"
            className="text-[1rem] font-medium sm:text-xl"
          >
            Password{' '}
          </label>
          <div
            className="flex items-stretch w-full p-0 overflow-hidden border-black rounded-lg formgroup"
            style={{
              outline: '1px solid black',
            }}
          >
            <span
              className="grid w-12 place-items-center"
              onClick={() => {
                setShowPassword((p) => !p);
              }}
            >
              {showPassword ? (
                <IconRepository.EyeopenIcon width={20} height={20} />
              ) : (
                <IconRepository.UserIcon width={20} height={20} />
              )}
            </span>
            <Input
              placeholder="Password is here "
              {...register('password', {
                required: true,
                maxLength: 30,
                minLength: 8,
              })}
              type={showPassword ? 'password' : 'text'}
              name="password"
              id="password"
              className="!focus:ring-0  !h-12 !flex-1 !rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          {errors.password && errors.password.type === 'required' && (
            <span className="error">This is required</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="error">password min length is 8 characters</span>
          )}
        </div>
        {actionData && <p className="error">{actionData}</p>}
        {/* error for action data */}
        <SubmitButton
          submittingText={
            <Loader
              className="relative z-10 h-full"
              childrenClassName="size-4"
            />
          }
          className="w-[min(40rem,calc(100%-0.5rem))] items-center justify-center flex  h-12 mx-auto text-lg font-medium text-white transition-colors duration-200 rounded-md ring-offset-background focus-visible:ring-ring whitespace-nowrap bg-auth_primary_color/95 hover:bg-auth_primary_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          login
        </SubmitButton>
        <Link
          className="hover:text-semibold text-[1rem]
                    font-medium !text-black 
                    sm:text-xl 
                    "
          to="#"
          style={{ marginBottom: '2rem!important' }}
        >
          forgot password?{' '}
        </Link>

        <div>
          <h2 className="text-lg leading-loose tracking-tight text-center sm:text-xl">
            new to this platform ?{' '}
            <span>
              <Link to="register">Get Started</Link>
            </span>
          </h2>
        </div>
      </Form>
    </AuthContainer>
  );
};

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as iStudent & {
    role: 'student';
  }; // data from the form here
  console.log(data);
  try {
    const user = await HttpCommon.post<iStudent>(
      '/auth/register?role=student',
      data
    );
    console.log('user :', user);
    // for now no database connection will just  a custom promise function;
    toast.success('account created succussfully');
    // for testing you can pass an argument in the wait to throw an error
    // e.g wait(5000,{state:'reject'}) this will throw an error and the catch block will catch the error

    // if login is successfull redirect the user to the dashboard
    // but wait will need to know the user role ?
    // for future update we can user role from the backend response
    // e.g role=role.user
    // then will can check

    return redirect('/dashboard');
  } catch (err: any) {
    toast.error('fail to create account');
    // if (isAxiosError(err)) {
    //   // check if the error is coming for axios
    //   return err.response?.data?.msg;
    // }
    // other error throws from the try block
    // return err?.message || null; // this need a rewrite again for later days
    return err.response?.data?.msg || null; // this need a rewrite again for later days

    // #TODO
  }
};
export const RegisterPage = () => {
  const {
    register,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<iRegisterUser>();
  const submit = useSubmit();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      submit(e.currentTarget as HTMLFormElement);
    }
    await trigger();
  };
  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  const actionData = useActionData() as any;
  return (
    <AuthContainer className="max-w-3xl">
      <Heading className="!mb-8 !text-center !text-xl !font-medium lg:ml-36  lg:!text-start">
        Please Enter, Your information below
      </Heading>
      <Form
        replace
        // replace this page when the user successfully login to the dashboard so when s/he presses the back button it wont direct them to this page
        method="post"
        id="sigin-form"
        onSubmit={(e) => onSubmit(e)}
        className="grid-cols-[auto,1fr] gap-x-4 lg:grid"
      >
        <HandleGetFileFromStorage />
        <input type="hidden" value="student" name="role" />
        <input type="hidden" value={new Date().toDateString()} name="DOB" />
        <div className="flex flex-col space-y-2 gap-y-2">
          <input type="hidden" name="role" value="student" />
          <div className="space-y-2 ">
            <Label htmlFor="firstName">
              First Name <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.UserIcon width={20} height={20} />
              </span>
              <Input
                type="text"
                {...register('firstName', { required: true, maxLength: 30 })}
                name="firstName"
                id="firstName"
                placeholder="Enter your first name "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.firstName && errors.firstName.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.firstName && errors.firstName.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="lastName">
              Last Name <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.UserIcon width={20} height={20} />
              </span>
              <Input
                type="text"
                {...register('lastName', { required: true, maxLength: 30 })}
                name="lastName"
                id="lastName"
                placeholder="Enter your last name "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.lastName && errors.lastName.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.lastName && errors.lastName.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="email">
              Instistutional Email <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.GlobeIcon width={20} height={20} />
              </span>
              <Input
                type="email"
                {...register('email', {
                  required: true,
                  maxLength: 30,
                })}
                name="email"
                id="email"
                placeholder="Enter your email "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.email && errors.email.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.email && errors.email.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="phone">
              Phone Number <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.PhoneIcon
                  color="black"
                  width={20}
                  height={20}
                />
              </span>
              <Input
                type="number"
                {...register('phoneNumber', {
                  required: true,
                  maxLength: 30,
                  minLength: 8,
                  validate: (value) => {
                    return typeof value !== 'number' || 'number is required ';
                  },
                })}
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phoneNumber number "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === 'minLength' && (
              <span className="error">
                phoneNumber Number should be 8 or greater than 8 characters
              </span>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === 'validate' && (
              <span className="error">{'please input only numbers !'}</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="password">
              Pasword <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span
                className="grid w-12 place-items-center"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              >
                {showPassword.password ? (
                  <IconRepository.EyeopenIcon width={20} height={20} />
                ) : (
                  <IconRepository.OpeneyeIcon width={20} height={20} />
                )}
              </span>
              <Input
                type={!showPassword.password ? 'password' : 'text'}
                {...register('password', {
                  required: true,
                  maxLength: 30,
                  minLength: 8,
                })}
                name="password"
                id="password"
                placeholder="Enter Your password  "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.password && errors.password.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className="error">password is lessthan 8 character</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="confirmPasword">
              Confirm Pasword <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span
                className="grid w-12 place-items-center"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  })
                }
              >
                {showPassword.confirmPassword ? (
                  <IconRepository.EyeopenIcon width={20} height={20} />
                ) : (
                  <IconRepository.OpeneyeIcon width={20} height={20} />
                )}
              </span>
              <Input
                type={!showPassword.confirmPassword ? 'password' : 'text'}
                {...register('confirmPassword', {
                  required: true,
                  maxLength: 30,
                  validate: (value) => {
                    return (
                      value === watch('password') || 'Password does not match'
                    );
                  },
                })}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password   "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'required' && (
                <span className="error">This is required</span>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'maxLength' && (
                <span className="error">Max length exceeded</span>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <span className="error">
                  {'Password and confirm password didnot match !'}
                </span>
              )}
          </div>
          {actionData && <p className="error">{actionData}</p>}

          <SubmitButton
            submittingText={
              <Loader
                className="relative z-10 h-full"
                childrenClassName="size-4"
              />
            }
            className="w-[min(40rem,calc(100%-0.5rem))] items-center justify-center flex  h-12 mx-auto text-lg font-medium text-white transition-colors duration-200 rounded-md ring-offset-background focus-visible:ring-ring whitespace-nowrap bg-auth_primary_color/95 hover:bg-auth_primary_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Create An Account
          </SubmitButton>
          <p
            className="hover:text-semibold 
                    text-[1rem] font-medium 
                    !text-black 
                    "
            style={{ marginBottom: '2rem!important' }}
          >
            Remember me <input type="checkbox" name=" id=" />
          </p>

          <div>
            <h2 className="text-lg leading-loose tracking-tight text-center sm:text-xl">
              Already have an account?{' '}
              <span>
                <Link
                  to="/auth"
                  className="font-medium transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  Login
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </Form>
    </AuthContainer>
  );
};
