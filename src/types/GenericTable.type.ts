type TableData<T> = T[];
type TableColumn<T> = {
  title: string | React.ReactElement;
  key: keyof T;
}[];

export type GenericTableType<T> = {
  data: TableData<T>;
  columns: TableColumn<T>;
  headerBackgroundColor?: string;
  headerFontColor?: string;
  bodyBackgroundColor?: string;
  bodyFontColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  // paddingType?: string
  // marginTYpe?: string
  // widthTy?: string
  headerFontweight?: string;
  bodyFontweight?: string;
  headerFontSize?: string;
  bodyFontSize?: string;
  border?: string;
};
