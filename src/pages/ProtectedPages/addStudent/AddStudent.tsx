/* eslint-disable unused-imports/no-unused-imports-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsPerson } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { AtSign } from 'lucide-react';
import { Input, Typography, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import SelectComponent from './SelectComponent';
import Datepicker from './Datepicker';
// import Uploadpic from './Uploadpic';
import UploadFile from './UploadFile';
import ImageUpload from '../../../components/molecules/image-upload/Image-upload.molecule';

const schema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  parentName: z.string().min(1, { message: 'Parent name is required' }),
  parentEmail: z.string().email({ message: 'Invalid email address' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' }),
  address: z.string().min(1, { message: 'Address is required' }),
  additionalInformation: z
    .string()
    .min(1, { message: 'Additional information is required' }),
});

type FormFields = z.infer<typeof schema>;

function AddStudent() {
  const onSubmit = (data: FormFields) => {
    console.log(data);
    // Handle form submission
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <div className="flex flex-col items-center w-full h-screen mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg flex-1 w-full max-w-[40rem] max-md:max-w-7xl"
      >
        <div className="bg-[#0A4378] p-4 font-bold text-white w-full text-xl">
          Student Details
        </div>
        <div className="flex flex-col justify-between gap-2 p-3 md:pr-3 md:flex-row ">
          <div className="flex flex-col pl-10 max-h-64 max-w-64">
            <Typography>
              Person<span className="text-red-500">*</span>
            </Typography>
            <div className="w-48 h-full">
              <ImageUpload />
              {/* {<Uploadpic />} */}
            </div>
          </div>
          <div className="flex flex-col gap-3 size-full">
            <div className="flex flex-col gap-3">
              <Typography>
                First name<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="First name"
                    prefix={<BsPerson size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('firstName');
                    }}
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}

              <Typography>
                Last name<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    allowClear
                    placeholder="Last name"
                    prefix={<BsPerson size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('lastName');
                    }}
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}

              <Typography>
                Student Email<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Enter your email"
                    prefix={<AtSign size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('email');
                    }}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <div className="flex flex-row gap-2">
                <div className="flex-col gap-1 flec">
                  <Typography>
                    Date of birth<span className="text-red-500">*</span>
                  </Typography>
                  <Datepicker />
                </div>
                <div className="flex-col gap-1 flec">
                  <Typography>
                    Place of birth<span className="text-red-500">*</span>
                  </Typography>
                  <SelectComponent />
                </div>
              </div>

              <Typography>
                Parent name<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="parentName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Parent name"
                    prefix={<BsPerson size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('parentName');
                    }}
                  />
                )}
              />
              {errors.parentName && (
                <p className="text-red-500">{errors.parentName.message}</p>
              )}

              <Typography>
                Parent email<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="parentEmail"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Parent email"
                    prefix={<AtSign size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('parentEmail');
                    }}
                  />
                )}
              />
              {errors.parentEmail && (
                <p className="text-red-500">{errors.parentEmail.message}</p>
              )}

              <Typography>
                Phone number<span className="text-red-500">*</span>
              </Typography>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Phone number"
                    prefix={<FiPhone size={20} color="black" />}
                    onBlur={(e) => {
                      field.onBlur();
                      trigger('phoneNumber');
                    }}
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="text-red-500">
              {errors.address && <p>{errors.address.message}</p>}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div>
            <Typography>
              Address<span className="text-red-500">*</span>
            </Typography>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Enter your address"
                  onBlur={(e) => {
                    field.onBlur();
                    trigger('address');
                  }}
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div>
            Additional information
            <Controller
              name="additionalInformation"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  size="large"
                  className="border size-full"
                  onBlur={(e) => {
                    field.onBlur();
                    trigger('additionalInformation');
                  }}
                />
              )}
            />
            {errors.additionalInformation && (
              <p className="text-red-500">
                {errors.additionalInformation.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center flex-1 my-3">
            <Button
              htmlType="submit"
              type="primary"
              loading={isSubmitting}
              className="flex text-white hover:bg-slate-500 dark:text-black bg-[#0A4378] w-81 pl-20"
              size="large"
              color="primary"
            >
              <span className="pl-10">Create</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
