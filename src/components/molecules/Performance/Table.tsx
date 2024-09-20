import { MaterialReactTable } from 'material-react-table';
import { tableProps } from './Table.type';
import Input from '../updated-input/Input';
import Dropdown from '../dropdown-component/Dropdown.component';
import { ChangeEvent, useState } from 'react';
import { studentClassOptions } from '../../../constants/demoData';
import './table.css';

const Table = (props: tableProps) => {
  /* const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      { header: 'Mark all as |', accessorKey: 'name', enableSorting: true },
      {
        header: (
          <>
            Present &nbsp;
            <Input type="radio" name="all" id="pst" title="Present all" />
          </>
        ),
        accessorKey: 'present',
        enableSorting: false,
      },
      {
        header: (
          <>
            Absent &nbsp;
            <Input type="radio" name="all" id="abs" title="all Absent" />
          </>
        ),
        accessorKey: 'absent',
        enableSorting: false,
      },
      {
        header: (
          <>
            <Dropdown
              title="classroom"
              options={studentClassOptions}
              onchange={() => handleStudentClassChange}
              selectedValue={studentClass}
              // DropdownIcon={IconRepository.AccountDoorIcon}
            />
          </>
        ),
        accessorKey: 'class',
        enableSorting: false,
      },
    ],
    []
  ); */

  const [studentClass, setStudentClass] = useState('');
  const handleStudentClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStudentClass(e.target.value);
    console.log(studentClass);
    // Trigger the Student data for the class selected
    if (setStudentClass === studentClassOptions.values) {
      // load data of the class selected from the database and passes this props to the Material react table
    }
  };

  const row = props.rows.map((data) => ({
    name: data.first_name,
    present: (
      <label htmlFor={`pst-${data.id}`} title="Present">
        <Input
          type="radio"
          id={`pst-${data.id}`}
          name={'name-' + data.id}
          title="Present"
          value={'PST'}
        />
        &nbsp; &nbsp;Present
      </label>
    ),
    absent: (
      <label htmlFor={`abs-${data.id}`} title="Absent">
        <Input
          type="radio"
          id={`abs-${data.id}`}
          name={'name-' + data.id}
          title="Absent"
          value={'ABS'}
        />
        &nbsp; &nbsp;Absent
      </label>
    ),
  }));
  return (
    <div className="table-container">
      <div className="selectClass">
        <Dropdown
          title="classroom"
          options={studentClassOptions}
          onchange={handleStudentClassChange}
          selectedValue={studentClass}
        />
      </div>
      <div className="table">
        <MaterialReactTable
          columns={props.columns}
          data={row}
          layoutMode={props.layoutMode || 'grid'}
          enableSorting={props.enableSorting}
          displayColumnDefOptions={{
            'mrt-row-actions': {
              size: 180 /* if using layoutMode that is not 'semantic', the columns will not auto-size, so you need to set the size manually*/,
              grow: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Table;
