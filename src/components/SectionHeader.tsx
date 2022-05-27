import { FC, HTMLProps } from 'react';
import styles from './SectionHeader.module.scss';
import {HeaderOptions} from '@types';

const SectionHeader: FC<HeaderOptions> = ({ 
  titleStyle = 'default',
  showHeader = true,
  children,
}) => showHeader 
? (
  <h2 className={styles[titleStyle]}>
    {children}
  </h2>
) : null;

export default SectionHeader;