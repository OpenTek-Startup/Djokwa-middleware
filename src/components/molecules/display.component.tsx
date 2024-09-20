import { useState } from 'react';
// import { components } from '../index';
import { LoginPage, RegisterPage } from '../../pages/AuthPage';
// import { IconRepository } from '../../repository/icons/icon.repository';
import GenericTable from './GenericTable/GenericTable.component';
import SideBar from './sidebar/SideBar';

function DisplayComponents() {
  interface Personne {
    nom: string;
    age: number;
    classe: string;
    moyen: number;
  }

  const personnes: Personne[] = [
    { nom: 'Alice', age: 25, classe: '5e', moyen: 14 },
    { nom: 'Bob', age: 30, classe: '5e', moyen: 14 },
    { nom: 'Charlie', age: 35, classe: '5e', moyen: 14 },
  ];

  const colonnesPersonne = [
    { title: 'Nom', key: 'nom' },
    { title: 'Âge', key: 'age' },
    { title: 'classe', key: 'classe' },
    { title: 'moyen', key: 'moyen' },
  ];
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <SideBar />
      <button
        onClick={() => setShow(!show)}
        type="submit"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="ring-offset-background focus-visible:ring-ring  fixed top-0 z-[1000] inline-flex  items-center justify-center whitespace-nowrap rounded-md bg-auth_primary_color/5   px-4 py-3 text-lg font-medium text-white  transition-colors duration-200 hover:bg-auth_primary_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Toggle Pages
      </button>
      {show ? <RegisterPage /> : <LoginPage />}
      {/* 
      <components.UpcomingEventCard
        borderColor="#FFEC42"
        date="10-10-22"
        subtitle="algo"
        time="12:30 - 13:30pm"
        title="Algorithm"
        DeclineIcon={<IconRepository.DeclineIcon />}
        acceptIcon={<IconRepository.DeclineIcon />}
        calenderIcon={<IconRepository.CalenderIcon />}
        TimeIcon={<IconRepository.TimerIcon />}
      /> */}
      {/* <components.UpcomingEventCard
        borderColor="#00FF75"
        date="10-10-22"
        subtitle="algo"
        time="12:30 - 13:30pm"
        title="Algorithm"
        DeclineIcon={<IconRepository.DeclineIcon />}
        acceptIcon={<IconRepository.DeclineIcon />}
        calenderIcon={<IconRepository.CalenderIcon />}
        TimeIcon={<IconRepository.TimerIcon />}
      /> */}
      <GenericTable
        columns={colonnesPersonne}
        data={personnes}
        headerBackgroundColor="#225686"
        headerFontColor="#ffffff"
        headerFontweight="700"
        headerFontSize="3rem"
        bodyFontSize="2.5rem"
        bodyFontweight="400"
      />
    </>
  );
}

export default DisplayComponents;
