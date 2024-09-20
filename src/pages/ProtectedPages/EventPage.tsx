import CreateEvent from '../../components/molecules/eventCreationForm/CreateEvent.molecule';
import styles from './evenPage.module.css';
/* eslint-disable @typescript-eslint/no-explicit-any */
// import wait from '../../utils/wait';
// import { useLoaderData } from 'react-router-dom';
// import { useDashBoardContext } from '../Layout/DashBoardLayout';
// export const loader = async () => {
//   await wait(10000); // simulate slow loading here
//   return {
//     events: [
//       {
//         name: 'event1',
//         tasks: [1, 2, 3, 4],
//       },
//     ],
//   };
// };
const EventPage = () => {
  // const { events } = useLoaderData() as any;
  // const { user } = useDashBoardContext(); // now the user is all over dashboard app
  // just import the user and user the user
  //  is that not cool 😂
  return (
    <div className={styles.container}>
      <CreateEvent />
      {/* {JSON.stringify(events)}
      current login user :{JSON.stringify(user)} */}
    </div>
  );
};

export default EventPage;
