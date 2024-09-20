import Input from '../updated-input/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IconRepository } from '../../../repository/icons/icon.repository';
import { Label } from '../../../pages/AuthPage';
import styles from './class.module.css';
import Heading from '../../ui/heading';
import { ChangeEvent, useState } from 'react';

const validationSchema = z.object({
  className: z.string().nonempty({ message: 'Champ obligatoire' }),
  teacher: z.string().nonempty({ message: 'Champ obligatoire' }),
  localization: z.string().nonempty({ message: 'ce champ est obligatoire' }),
  program: z.union([
    z.literal('Francophone'),
    z.literal('Anglophone'),
    z.literal('Bilingue'),
  ]),
});

type teacherData = z.infer<typeof validationSchema>;
type closeModalProp = {
  onClose: () => void;
};

const CreateClass = ({ onClose }: closeModalProp) => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<teacherData>({ resolver: zodResolver(validationSchema) });

  const onSubmit = handleSubmit((data: teacherData) => {
    console.log(data, photoFile);
    onClose();
  });

  return (
    <form onSubmit={onSubmit} className={styles.form} name="form">
      <Heading className="!mb-8 !text-center !text-xl !font-medium lg:ml-36  lg:!text-start">
        Renseignez les informations ci-dessous
      </Heading>
      <div className="grid-cols-[auto,1fr] gap-x-4 lg:grid">
        <div className="w-48 mx-auto mb-6">
          <Heading>Selectionnez une image</Heading>
          <input
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setPhotoFile(files[0]);
              }
            }}
            type="file"
            className="hidden"
            name="image"
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
        <div className="flex flex-col space-y-2 gap-y-2">
          <div className="space-y-2 ">
            <Label htmlFor="name">
              Nom de la classe <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.UserIcon
                  width={20}
                  height={20}
                  color="rgba(59, 130, 246)"
                />
              </span>
              <Input
                type="text"
                {...register('className')}
                name="className"
                id="className"
                placeholder="Enter class name "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.className && (
              <span className="error">{errors.className.message}</span>
            )}
            {errors.className && errors.className.type === 'maxLength' && (
              <span className="error">Max length exceeded</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="Programme">
              Programme <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.UserIcon
                  width={20}
                  height={20}
                  color="rgba(59, 130, 246)"
                />
              </span>
              <select
                {...register('program')}
                name="program"
                id="program"
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              >
                <option value="Francophone">Francophone</option>
                <option value="Anglophone">Anglophone</option>
                <option value="Bilingue">Bilingue</option>
              </select>
            </div>
            {errors.program && <span className="error">This is required</span>}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="teacher">
              Enseignant <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.UserIcon
                  width={20}
                  height={20}
                  color="rgba(59, 130, 246)"
                />
              </span>
              <Input
                type="text"
                {...register('teacher')}
                name="teacher"
                id="teacher"
                placeholder="Enter teacher name "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.teacher && (
              <span className="error">{errors.teacher.message}</span>
            )}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="Localisation">
              Localisation <span className="text-rose-600">*</span>
            </Label>
            <div
              className={
                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
              }
            >
              <span className="grid w-12 place-items-center">
                <IconRepository.GlobeIcon
                  color="black"
                  width={20}
                  height={20}
                />
              </span>
              <Input
                {...register('localization')}
                name="localization"
                id="localization"
                placeholder="Enter Your localization  "
                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
              />
            </div>
            {errors.localization && (
              <span className="error">{errors.localization.message}</span>
            )}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <button
          type="submit"
          className="inline-flex items-center justify-center py-3 text-lg font-medium text-white transition-colors duration-200 rounded-md ring-offset-background focus-visible:ring-ring whitespace-nowrap bg-auth_primary_color/95 hover:bg-auth_primary_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full"
        >
          Valider
        </button>
      </div>
    </form>
  );
};
export default CreateClass;
