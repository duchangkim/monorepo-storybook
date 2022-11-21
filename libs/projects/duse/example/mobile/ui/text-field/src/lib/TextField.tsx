import styles from './TextField.module.scss';

export interface TextFieldProps {}

const TextField = (props: TextFieldProps) => {
  return <input className={styles['root']} type="text" placeholder='입력해333322223423' />;
};

export default TextField;