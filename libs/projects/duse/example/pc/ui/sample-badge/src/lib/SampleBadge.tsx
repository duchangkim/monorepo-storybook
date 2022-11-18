import styles from './SampleBadge.module.scss';

interface SampleBadgeProps {}

export const SampleBadge = (props: SampleBadgeProps) => {
  return <div className={styles['root']}>SampleBadge</div>;
};
