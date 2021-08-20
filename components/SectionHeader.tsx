import { FC, HTMLProps } from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps extends HTMLProps<HTMLElement> {
  titleStyle?: 'small'
}

const SectionHeader: FC<SectionHeaderProps> = ({ 
  titleStyle,
  children
}) => (
  <h2
    className={styles.SectionHeader}
    data-titleStyle={titleStyle}
  >
    {children}
  </h2>
);

export default SectionHeader;