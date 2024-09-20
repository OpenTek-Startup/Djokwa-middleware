import { ChangeEvent, useState } from 'react';
import DashItem from '../components/molecules/dashitem-component/DashItem';
import DataTable from '../components/ui/Table';
import { Button } from '../components/ui/button';
import { personColumns } from '../constants/columns';
import { demoPersons } from '../constants/demoData';
import { IconRepository } from '../repository/icons/icon.repository';

import CreateAcademicYear, {
  DateInterface,
} from '../components/molecules/createAcademicYear/CreateAcademicYear.molecule';
import Modal from '../components/molecules/modal/Modal.molecule';

// import { personType } from '..';
import AttendancePerformance from '../components/molecules/Performance/AttendancePerformance';
import Performance from '../components/molecules/performance_summary/perform';

const DirectorsDashBoard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [academicYear, setAcademicYear] = useState<DateInterface>({
    startDate: '',
    endDate: '',
  });

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAcademicYear((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    const event = window.event;
    event?.preventDefault();
    const startDate = parseInt(academicYear.startDate.slice(0, 4));
    const endDate = parseInt(academicYear.endDate.slice(0, 4));
    if (endDate <= startDate) {
      alert(
        'L&apos;année de fin doit être superieure à l&apos;année de debut!'
      );
    }

    if (!academicYear.startDate || !academicYear.endDate) {
      alert('Please select both Start Date and End Date.');
      return;
    }

    const newAcademicYear: DateInterface = {
      startDate: academicYear.startDate,
      endDate: academicYear.endDate,
      name:
        'Année Scolaire:' +
        ' ' +
        `${academicYear.startDate.slice(0, 4)}-${academicYear.endDate.slice(
          0,
          4
        )}`, // Generate a default name from start date
    };
    // Submit the newAcademicYear data here (e.g., API call)
    console.log('New Academic Year:', newAcademicYear);
    handleCloseModal();
    console.log('status:', isOpen);

    // Reset the form after successful submission (optional)
    setAcademicYear({
      startDate: '',
      endDate: '',
    });
    handleCloseModal();
  };
  return (
    <div className="mx-auto max-w-7xl">
      <AttendancePerformance />
      <div className="grid-cols-2 lg:grid">
        {/* first section */}
        <div>
          <div
            className="grid py-10 px-2
        gap-x-4 
        grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-0.3rem)),1fr))]"
          >
            {Array.from({ length: 4 }, (arr, idx) => (
              <DashItem key={idx} />
            ))}
          </div>
        </div>
        {/* section 2 */}
        <div>
          <Button
            className="w-[min(26rem,calc(100%-2rem))] mx-auto py-6 bg-[#142e6e] flex items-center gap-x-3"
            onClick={handleOpenModal}
          >
            Create A New Academic Year{' '}
            <IconRepository.PlusIcon width={25} height={25} />
          </Button>
          {isOpen && (
            <Modal
              isOpen
              title="Nouvelle Année Scolaire &nbsp;&nbsp;&nbsp;&nbsp;"
              // isClosed={handleCloseModal}
            >
              {
                <CreateAcademicYear
                  date={academicYear}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              }
            </Modal>
          )}
        </div>
      </div>
      <DataTable columns={personColumns} data={demoPersons} />
      <Performance />
    </div>
  );
};

export default DirectorsDashBoard;
