import { ChangeEvent, useState } from 'react';
import { inputType } from '../../../../types/input.type';
import styles from './textInput.module.css';

const TextInput = (props: inputType) => {
  const [inputValue, setInputValue] = useState('');
  // const [isValid, setIsValid] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  // const validateInputValue = (inputValue: string) => {
  //   let isValid = true;
  //   if (props.type === 'email') {
  //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     isValid = regex.test(inputValue);
  //   } else if (props.type === 'password') {
  //     isValid = inputValue.length > 8;
  //   }
  // };

  // const handleBlur = () => {
  //   validateInputValue(inputValue);
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <label
          htmlFor={props.label}
          className={styles.label}
          style={{
            fontSize: props.labelFontSize,
            fontWeight: props.labelFontweight,
          }}
        >
          {props.label}
        </label>
        <div className={styles.input_container}>
          <input
            onChange={handleChange}
            // onBlur={handleBlur}
            type={props.type}
            className={styles.input_value}
            style={{
              fontSize: props.holderFontsize,
              fontWeight: props.holderFontWeight,
            }}
            value={inputValue}
            placeholder={props.placeholder}
          />
          {/* {!isValid && <p>Please enter a valid {props.type}.</p>} */}
          <span className={styles.icon}>
            <i>{props.icon}</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
