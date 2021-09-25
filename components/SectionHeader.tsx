import { FC, HTMLProps } from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps extends HTMLProps<HTMLElement> {
  titleStyle?: 'small' | 'default'
}

const SectionHeader: FC<SectionHeaderProps> = ({ 
  titleStyle = 'default',
  children
}) => (
  <h2 className={styles[titleStyle]}>
    {children}
  </h2>
);

export default SectionHeader;