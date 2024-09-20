import { ChangeEvent } from 'react';

export type DropdownProps = {
  DropdownIcon?: React.ReactNode;
  // onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  options: DropdownOptions[];
  selectedValue?: string | number;
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
  title: string;
};

export type DropdownOptions = {
  value: string | number;
  label: string;
};
