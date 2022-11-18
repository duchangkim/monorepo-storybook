import styles from './Sample.module.scss';

/* eslint-disable-next-line */
export interface SampleProps {}

export const Sample = (props: SampleProps) => {
  return <div className={styles['root']}>SAMPLE!</div>;
};

export default Sample;
