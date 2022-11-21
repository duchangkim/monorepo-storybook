import styles from './TextField.module.scss';

export interface TextFieldProps {}

const TextField = (props: TextFieldProps) => {
  return <input className={styles['root']} type="text" placeholder='입력해3333222234223' />;
};

export default TextField;