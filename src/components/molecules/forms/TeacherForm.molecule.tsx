import React, { useState } from 'react';
import Heading from '../../ui/heading';
import { useForm } from 'react-hook-form';
import { IconRepository } from '../../../repository/icons/icon.repository';
import Input from '../updated-input/Input';
import { Label } from '../../../pages/AuthPage';

type IRegisterUser = {
  firstName: string;
  lastName: string;
  phone: number;
  password: string;
  confirmPassword: string;
  instituitionalEmail: string;
};

const TeacherForm = () => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterUser>();
  const onSubmit = async (data: any) => {
    // await wait()
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });

  return (
    <div>
      <Heading className="!mb-8 !text-center !text-xl !font-medium lg:ml-36  lg:!text-start">
        Please Enter, Your information below
      </Heading>
      <div className="grid-cols-[auto,1fr] gap-x-4 lg:grid">
        <div className="w-48 mx-auto mb-6">
          <Heading>Photo</Heading>
          <input
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e: any) => {
              const file = e.target.files[0];
              setPhotoFile(file);
            }}
            type="file"
            className="hidden"
            name="file"
            id="file"
          ></input>
          <label htmlFor="file" className="cursor-pointer">
            <div className="flex items-center justify-center mx-auto border-black rounded-sm shadow size-48 place-items-center ring-1 ring-gray-300">
              {!photoFile ? (
                <p>
                  drag and drop or
                  <br />
                  click to select
                </p>
              ) : (
                <img
                  className="object-fill size-full"
                  src={URL.createObjectURL(photoFile)}
                ></img>
              )}
            </div>
          </label>
        </div>
        <form
          className="flex flex-col space-y-2 gap-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2 ">
            <label htmlFor="firstName">
              First Name <span className="text-rose-600">*</span>
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
            <Label htmlFor="instituitionalEmail">
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
                {...register('instituitionalEmail', {
                  required: true,
                  maxLength: 30,
                })}
                name="instituitionalEmail"
                id="instituitionalEmail"
                placeholder="Enter your email "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.instituitionalEmail &&
              errors.instituitionalEmail.type === 'required' && (
                <span className="error">This is required</span>
              )}
            {errors.instituitionalEmail &&
              errors.instituitionalEmail.type === 'maxLength' && (
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
                {...register('phone', {
                  required: true,
                  maxLength: 30,
                  minLength: 8,
                  validate: (value) => {
                    return typeof value !== 'number' || 'number is required ';
                  },
                })}
                name="phone"
                id="phone"
                placeholder="Enter your phone number "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.phone && errors.phone.type === 'required' && (
              <span className="error">This is required</span>
            )}
            {errors.phone && errors.phone.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
            {errors.phone && errors.phone.type === 'minLength' && (
              <span className="error">
                Phone Number should be 8 or greater than 8 characters
              </span>
            )}
            {errors.phone && errors.phone.type === 'validate' && (
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

          <button
            disabled={isSubmitting}
            type="submit"
            className="inline-flex items-center justify-center py-3 text-lg font-medium text-white transition-colors duration-200 rounded-md ring-offset-background focus-visible:ring-ring whitespace-nowrap bg-auth_primary_color/95 hover:bg-auth_primary_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {isSubmitting ? 'Creating Account ...' : 'Create An Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;
