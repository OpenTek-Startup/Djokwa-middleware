/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsPerson } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { AtSign, UploadCloudIcon } from 'lucide-react';
import { Select, Input, Typography, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import SelectComponent from './SelectComponent';
import CvUpload from '../../../components/molecules/cv-upload/cv-upload.molecule';
import ImageUpload from '../../../components/molecules/image-upload/Image-upload.molecule';

const { Option } = Select;

// Define the validation schema with Zod
const schema = z.object({
  firstName: z.string().min(5, 'Name must be at least 5 characters'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  additionalInformation: z
    .string()
    .min(1, 'Additional information is required'),
  // Use string type for file path or URL
});

type Formfields = z.infer<typeof schema>;

function AddTeacher() {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<Formfields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Formfields) => {
    console.log(data);
    // Set the uploaded file name
  };

  return (
    <div className="mt-5 flex h-screen w-full flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg flex-1 w-full max-w-[40rem] max-md:max-w-7xl"
      >
        <div className="bg-[#0A4378] p-4 font-bold text-white w-full text-xl">
          Teacher Details
        </div>
        <div className="flex p-3 md:pr-3 flex-col md:flex-row">
          <div className="pl-10 flex max-h-64 max-w-64 flex-col">
            <Typography>
              Person<span className="text-red-500">*</span>
            </Typography>
            <div className="h-10 w-48">
              <ImageUpload />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Typography>
              First name<span className="text-red-500">*</span>
            </Typography>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  size="large"
                  placeholder="First name"
                  {...field}
                  prefix={<BsPerson size={20} color="black" />}
                  className={
                    errors.firstName && touchedFields.firstName
                      ? 'border-red-500'
                      : ''
                  }
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
                  size="large"
                  allowClear
                  placeholder="Last name"
                  {...field}
                  prefix={<BsPerson size={20} color="black" />}
                  className={
                    errors.lastName && touchedFields.lastName
                      ? 'border-red-500'
                      : ''
                  }
                />
              )}
            />
            {errors.lastName && touchedFields.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}

            <Typography>
              Institutional Email<span className="text-red-500">*</span>
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  size="large"
                  placeholder="Enter your email"
                  {...field}
                  prefix={<AtSign size={20} color="black" />}
                  className={
                    errors.email && touchedFields.email ? 'border-red-500' : ''
                  }
                />
              )}
            />
            {errors.email && touchedFields.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <div className="flex flex-col gap-1">
              <Typography>
                Level (Class)<span className="text-red-500">*</span>
              </Typography>
              <SelectComponent placeholder="Select your level" />
            </div>

            <div className="flex flex-col gap-1">
              <Typography>
                Course<span className="text-red-500">*</span>
              </Typography>
              <SelectComponent placeholder="Select your course" />
            </div>

            <div>
              <Typography>
                Curriculum vitae<span className="text-red-500">*</span>
              </Typography>
              <CvUpload icon={<UploadCloudIcon />} />
            </div>

            <Typography>
              Phone number<span className="text-red-500">*</span>
            </Typography>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  size="large"
                  placeholder="Phone number"
                  {...field}
                  prefix={<FiPhone size={20} color="black" />}
                  className={
                    errors.phoneNumber && touchedFields.phoneNumber
                      ? 'border-red-500'
                      : ''
                  }
                />
              )}
            />
            {errors.phoneNumber && touchedFields.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div className="p-4">
          <Typography>
            Address<span className="text-red-500">*</span>
          </Typography>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                size="large"
                placeholder="Enter your address"
                {...field}
                className={errors.address ? 'border-red-500' : ''}
              />
            )}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}

          <Typography>Additional information</Typography>
          <Controller
            name="additionalInformation"
            control={control}
            render={({ field }) => (
              <TextArea size="large" {...field} className="size-full border" />
            )}
          />
          {errors.additionalInformation && (
            <p className="text-red-500">
              {errors.additionalInformation.message}
            </p>
          )}

          <div className="flex-1 my-3 justify-center items-center flex">
            <Button
              htmlType="submit"
              loading={isSubmitting}
              className="flex text-white hover:bg-slate-500 dark:text-black bg-[#0A4378] w-80 pl-20"
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

export default AddTeacher;
