import styles from './createAcademic.module.css';
import Buttons from '../input-components/buttons/buttons.molecule';
import { ChangeEvent } from 'react';

export interface DateInterface {
  startDate: string; // Start date of the academic year
  endDate: string; // End date of the academic year
  name?: string; // Optional name for the academic year (e.g., 2023-2024)
}

export interface AcademicYear {
  date: DateInterface; //
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const CreateAcademicYear = ({
  date,
  handleSubmit,
  handleChange,
}: AcademicYear) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* <h2>Create New Academic Year</h2> */}
      <div className={styles.date_content}>
        <label htmlFor="startDate" className={styles.label}>
          Start Date:
        </label>
        <input
          className={styles.input}
          type="date"
          id="startDate"
          name="startDate"
          value={date.startDate}
          onChange={handleChange} // (e) => setStartDate(new Date(e.target.value))
          required
        />
      </div>
      <div className={styles.date_content}>
        <label htmlFor="endDate" className={styles.label}>
          End Date:
        </label>
        <input
          className={styles.input}
          type="date"
          id="endDate"
          name="endDate"
          value={date.endDate}
          onChange={handleChange} // (e) => setEndDate(new Date(e.target.value))
          required
        />
      </div>
      <Buttons
        height={50}
        label="Créer"
        type="submit"
        bgcolor="#142E6E"
        borderRadius={5}
        color="#fff"
        fontSize="1.6rem"
        fontWeight={700}
        onClick={handleSubmit}
      />
      {/* <br />
         <button type="submit">Create Academic Year</button> */}
    </form>
  );
};

export default CreateAcademicYear;
