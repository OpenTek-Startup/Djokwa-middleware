import { DropdownProps } from '../../../types/Dropdown.type';
import styles from './dropdown.module.css';
import { IconRepository } from '../../../repository/icons/icon.repository';
const Dropdown = (props: DropdownProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState('')
  // const handleDropdownToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSelection = (e:ChangeEvent<HTMLSelectElement>) => {

  //   setIsOpen(false);
  // };

  return (
    <div>
      <span>{props.title}</span>
      <div style={{ position: 'relative' }}>
        <span className={styles.icon_position}>
          <IconRepository.ChevrondownIcon />
        </span>
        <span className={styles.icon_position2}>
          <IconRepository.AudienceIcon />
        </span>
      </div>
      <select className={styles.btn} onChange={props.onchange}>
        {props.options.map((option) => (
          <option className={styles.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
