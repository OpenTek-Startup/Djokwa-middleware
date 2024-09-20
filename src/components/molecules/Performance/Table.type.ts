import {
  MRT_PaginationState,
  MRT_RowData,
  type MRT_ColumnDef,
} from 'material-react-table';

export interface tableProps {
  columns: MRT_ColumnDef<MRT_RowData, any>[];
  rows: MRT_RowData[];
  layoutMode: 'grid' | 'grid-no-grow' | 'semantic';
  enableSorting?: boolean;
  enableRowActions?: boolean;
  image?: React.ReactNode;
}

// export type Person = {
//   [key: string]: any;
//   id: string;
//   name: string;
//   present: string | React.ReactNode;
//   absent: string | React.ReactNode;
//   class: string;
// };
