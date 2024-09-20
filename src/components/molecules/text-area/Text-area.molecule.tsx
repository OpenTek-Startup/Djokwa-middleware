import React, { ChangeEvent } from 'react';
import styles from './textarea.module.css';

type props = {
  label: string;
  value?: string;
  placeholder?: string;
  name?: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = (props: props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="textarea">
        {props.label}
      </label>
      <textarea
        className={styles.textarea}
        rows={4}
        cols={50}
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Textarea;
