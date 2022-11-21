import styles from './StorybookHost.module.scss';

/* eslint-disable-next-line */
export interface StorybookHostProps {}

export function StorybookHost(props: StorybookHostProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookHost! HAHA!3333</h1>
    </div>
  );
}

export default StorybookHost;
