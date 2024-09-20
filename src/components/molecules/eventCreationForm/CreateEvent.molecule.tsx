import React, { ChangeEvent, useState } from 'react';
import styles from './createEvente.module.css';
import TextInput from '../input-components/text-input/text-input.component';
import Textarea from '../text-area/Text-area.molecule';
import Datepicker from '../date-picker/datepicker.molecule';
import Dropdown from '../dropdown-component/Dropdown.component';
import { Button } from '../../ui/button';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  audienceOptions,
  colorsVariant,
  eventsData,
} from '../../../constants/demoData';
import DisplayEventCard from '../upcoming-event-card/upcomingEventCard.component';
import Buttons from '../input-components/buttons/buttons.molecule';
// import { IconRepository } from '../../../repository/icons/icon.repository';

// interface FormProps {
//     titre: string;
//     sousTitre: string;
//     dateDebut: Date;
//     dateFin: Date;
//     audience: string;
//     additionalInfo: string;
// }

const schema = z.object({
  title: z.string({ message: 'The title is required' }).min(3, {
    message: ' the title should be at least 3 characters',
  }),
  subtitle: z
    .string({ message: 'subtitle is required' })
    .min(3, { message: 'subtitle should be at least 3 characters' }),
  startDate: z.date({ message: 'start date is required' }),
  endDate: z.date({ message: 'end date is required' }),
  audience: z.string({ message: 'choose audience' }),
  info: z.string({ message: 'additional info is required' }),
});
type FormFields = z.infer<typeof schema>;
const getRandomBorderColor = (): string => {
  const randomIndex = Number(Math.floor(Math.random() * colorsVariant.length));
  return colorsVariant[randomIndex];
};
const CreateEvent = () => {
  const [titre, setTitre] = useState('');
  const [sousTitre, setSousTitre] = useState('');
  const [dateDebut, setdateDebut] = useState<Date | null>(new Date());
  const [dateFin, setDateFin] = useState<Date | null>(new Date());
  const [audience, setAudience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const borderColor = getRandomBorderColor();

  const handleTitre = (e: ChangeEvent<HTMLInputElement>) => {
    setTitre(e.target.value);
    console.log('hello: ', e.target.value);
    alert('title changed');
  };

  const handleSousTitre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSousTitre(e.target.value);
  };

  const handleDateDebut = (e: Date | null) => {
    const value = e;
    const newDate = value ? new Date(value) : null;
    setdateDebut(newDate);
  };
  const handleDateFin = (e: Date | null) => {
    const newDate = e;
    setDateFin(newDate);
  };

  const handleAudience = (e: ChangeEvent<HTMLSelectElement>) => {
    setAudience(e.target.value);
  };

  const handleAdditionalInfo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalInfo(e.target.value);
  };

  // const handleSubmit = () => {
  //   alert('submitted');
  //   preventDefault();
  //   console.log({
  //     titre,
  //     sousTitre,
  //     dateDebut,
  //     dateFin,
  //     audience,
  //     additionalInfo,
  //   });
  // };
  const onSubmit = (data: FormFields) => {
    console.log(data);
    alert('submitted');
    // Handle form submission
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <div className={styles.container}>
      <form
        className={styles.form_container}
        action="./dashboard"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <Controller
            name="title"
            control={control}
            render={() => (
              <TextInput
                label="titre"
                name={titre}
                type="text"
                width="90%"
                placeholder="titre de l'evenement"
                onChange={handleTitre}
                value={titre}
                height={71.86}
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="form-group">
          <Controller
            name="subtitle"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="sous titre"
                type="text"
                width="90%"
                placeholder="sous titre de l'evenement"
                name={sousTitre}
                onChange={() => handleSousTitre}
                height={71.86}
              />
            )}
          />
          {errors.subtitle && (
            <p className="text-red-500">{errors.subtitle.message}</p>
          )}
        </div>
        <div className="form-group">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Datepicker
                {...field}
                label="Date de debut"
                value={dateDebut}
                handleDateChange={() => handleDateDebut}
              />
            )}
          />
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate.message}</p>
          )}
        </div>
        <div className="form-group">
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Datepicker
                {...field}
                label="Date de fin"
                value={dateFin}
                handleDateChange={() => handleDateFin}
              />
            )}
          />
          {errors.endDate && (
            <p className="text-red-500">{errors.endDate.message}</p>
          )}
        </div>
        <div className="form-group">
          <Controller
            name="audience"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                title="Choisir l'audience"
                options={audienceOptions}
                onchange={() => handleAudience}
                selectedValue={audience}
              />
            )}
          />
          {errors.audience && (
            <p className="text-red-500">{errors.audience.message}</p>
          )}
        </div>
        <div className="form-group">
          <Controller
            name="info"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                handleChange={() => handleAdditionalInfo}
                label={'Informations supplementaires'}
                // value={additionalInfo}
                placeholder={'You can write additionnal details here ...'}
                name={additionalInfo}
              />
            )}
          />
          {errors.info && <p className="text-red-500">{errors.info.message}</p>}
        </div>
        <Button
          type="submit"
          className="w-[min(30rem,calc(100%-0rem))] my-10 mx-auto py-6 bg-[#142e6e] flex items-center gap-x-3"
          style={{ fontSize: '1.6rem', fontWeight: 700 }}
        >
          Créer l&apos;evenement
        </Button>
      </form>
      <div className={styles.event_container}>
        {eventsData.map((event, index) => (
          <DisplayEventCard
            key={index}
            status={'extended'}
            subtitle={event.subtitle}
            title={event.title}
            TimePeriod={event.TimePeriod}
            additionlInfo={event.additionlInfo}
            datePeriod={event.datePeriod}
            borderColor={borderColor}
          />
        ))}
        <div className={styles.ViewMore}>
          <Buttons
            height={35}
            type=""
            label="View More"
            bgcolor="#6b56f6"
            color="#fff"
            icon={''}
            onClick={() => alert('View more')}
            borderRadius={5}
            fontSize="1.1rem"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
// function preventDefault() {
//   throw new Error('Function not implemented.');
// }
