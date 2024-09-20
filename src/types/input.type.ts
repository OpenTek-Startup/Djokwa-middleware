// import { IconRepository } from '../repository/icons/icon.repository';

export type inputType = {
  label: string;
  width: string;
  height: number;
  icon?: React.ReactNode;
  color?: string;
  border?: string;
  bgcolor?: string;
  value?: string;
  name: string;
  type: 'text' | 'email' | 'password';
  labelFontSize?: string;
  labelFontweight?: string;
  fontSize?: string;
  fontweight?: string;
  holderFontsize?: string;
  holderFontWeight?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export interface BaseEntityType {
  id: string;
}

export interface IconPropsType {
  color?: string;
  stroke?: number;
  width?: number;
  height?: number;
  className?: string; // added to make some icons responsive
  // eslint-disable-next-line
  props?: any;
}

export type dashBoardItemsProps = {
  title: string;
  Icon: React.ReactNode;
  className?: string;
  counts: number;
};
