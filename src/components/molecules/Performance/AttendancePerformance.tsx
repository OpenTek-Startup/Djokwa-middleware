import { useMemo, ChangeEvent } from 'react';
import { MRT_RowData, type MRT_ColumnDef } from 'material-react-table';
import './table.css';
// import Input from '../updated-input/Input';
import { Button } from '../../ui/button';
import { demoPersons } from '../../../constants/demoData';
import Table from './Table';

export const AttendancePerformance = () => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Attendance recorded');
    // Send to the DB or api to save the the attendance
  };
  const columns = useMemo<MRT_ColumnDef<MRT_RowData>[]>(
    () => [
      { header: 'Mark all as |', accessorKey: 'name', enableSorting: true },
      {
        header: 'Present',
        accessorKey: 'present',
        enableSorting: false,
        filterVariant: 'checkbox',
      },
      {
        header: 'Absent',
        accessorKey: 'absent',
        enableSorting: false,
        filterVariant: 'checkbox',
      },
    ],
    []
  );
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <form action="./dashboard" method="GET" onSubmit={handleSubmit}>
          <Table columns={columns} rows={demoPersons} layoutMode={'grid'} />

          <Button
            type="submit"
            className="w-[min(20rem,calc(100%-2rem))] my-10 mx-auto py-6 bg-[#142e6e] flex items-center gap-x-3"
          >
            Done
          </Button>
        </form>
      </div>
    </>
  );
};

export default AttendancePerformance;
