/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenericTableType } from '../../../types/GenericTable.type';
import styles from './genericTable.module.css';
export const GenericTable = ({
  data,
  columns,
  headerBackgroundColor,
  headerFontColor,
  bodyBackgroundColor,
  bodyFontColor,
  bodyFontSize,
  bodyFontweight,
  borderColor,
  borderRadius,
  borderWidth,
  headerFontSize,
  headerFontweight,
  border,
}: GenericTableType<any>) => {
  return (
    <table className={styles.table}>
      <thead
        className={styles.header}
        style={{
          backgroundColor: headerBackgroundColor,
          color: headerFontColor,
          fontWeight: headerFontweight,
          fontSize: headerFontSize,
        }}
      >
        <tr className={styles.header_row}>
          {columns.map((column, index) => (
            <th className={styles.header_cell} key={index}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((line, index) => {
          return (
            <tr
              className={styles.data_row}
              key={index}
              style={{
                backgroundColor: bodyBackgroundColor,
                color: bodyFontColor,
                fontWeight: bodyFontweight,
                fontSize: bodyFontSize,
                borderColor: borderColor,
                borderRadius: borderRadius,
                borderWidth: borderWidth,
                border: border,
              }}
            >
              {columns.map((column, index) => (
                <td className={styles.data_cell} key={index}>
                  {line[column.key]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default GenericTable;
