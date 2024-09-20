import styles from './heading.module.css';
type Props = {
  title: string;
};

const HeadingComponent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{props.title}</span>
      </div>
    </div>
  );
};

export default HeadingComponent;
