import { FC } from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader: FC = ({ children }) => (
  <h2 className={styles.SectionHeader}>{children}</h2>
);

export default SectionHeader;