import styles from './modal.module.css';
// import Buttons from '../input-components/buttons/buttons.molecule'

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  // isClosed: () => void;
}

const Modal = ({ isOpen, children, title }: Props) => {
  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>{title} </div>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
