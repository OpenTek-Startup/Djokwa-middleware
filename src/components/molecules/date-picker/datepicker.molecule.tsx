import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './datepicker.module.css';
import { IconRepository } from '../../../repository/icons/icon.repository';

type DateProps = {
  label: string;
  value: Date | null;
  handleDateChange: (date: Date | null) => void;
};
const Datepicker = ({ label, handleDateChange, value }: DateProps) => {
  return (
    // <div>
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      {/* <div style={{ position: 'relative' }}> */}
      <span className={styles.icon}>
        <IconRepository.ChevrondownIcon />
      </span>
      <span className={styles.icon_calendar}>
        <IconRepository.CalenderIcon />
      </span>
      {/* </div> */}
      <DatePicker
        onChange={handleDateChange}
        selected={value}
        className={styles.datePicker}
        placeholderText="dd/mm/yyyy"
        required={true}
      />
    </div>
  );
};
export default Datepicker;
