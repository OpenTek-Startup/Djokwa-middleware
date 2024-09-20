import { ColumnDef } from '@tanstack/react-table';
import { personType } from './demoData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Checkbox } from '../components/ui/checkbox';
import { iStudent } from '../utils/types';

export const personColumns: ColumnDef<personType>[] = [
  {
    id: 'header',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell(props) {
      const idx = props.row.index + 1;
      return (
        <div className="flex gap-x-2 items-center px-2">
          {' '}
          <Checkbox
            className="ring"
            checked={props.row.getIsSelected()}
            onCheckedChange={(value) => props.row.toggleSelected(!!value)}
            aria-label="Select row"
          />{' '}
          {idx}{' '}
        </div>
      );
    },
  },
  {
    accessorKey: 'first_name',
    header: 'first_name',
  },
  {
    accessorKey: 'last_name',
    header: 'last_name',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
        </div>
      );
    },
    cell(props) {
      const email = props.row.original.email;
      return (
        <p
          className="text-orange-500 font-medium px-1
            "
        >
          {email}
        </p>
      );
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'gender',
    header: 'Sex',
  },
  {
    accessorKey: 'id',
    header: 'User_ID',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex justify-center  gap-x-2 px-2">
          <Button className="bg-rose-400">Delete</Button>
          <Button className="-rose-400">
            <Link to={'/dashboard/' + String(id)}>view</Link>
          </Button>
        </div>
      );
    },
    header: 'action',
  },
];
export const studentColumns: ColumnDef<iStudent>[] = [
  {
    id: 'header',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell(props) {
      const idx = props.row.index + 1;
      return (
        <div className="flex gap-x-2 items-center px-2">
          {' '}
          <Checkbox
            className="ring"
            checked={props.row.getIsSelected()}
            onCheckedChange={(value) => props.row.toggleSelected(!!value)}
            aria-label="Select row"
          />{' '}
          {idx}{' '}
        </div>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'first_name',
  },
  {
    accessorKey: 'lastName',
    header: 'last_name',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
        </div>
      );
    },
    cell(props) {
      const email = props.row.original.email;
      return (
        <p
          className="text-orange-500 font-medium px-1
            "
        >
          {email}
        </p>
      );
    },
  },

  {
    accessorKey: '_id',
    header: 'User_ID',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <div className="flex justify-center  gap-x-2 px-2">
          <Button className="bg-rose-400">Delete</Button>
          <Button className="-rose-400">
            <Link to={'/dashboard/' + String(id)}>view</Link>
          </Button>
        </div>
      );
    },
    header: 'action',
  },
];
