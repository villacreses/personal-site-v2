import { FC, HTMLProps } from 'react';
import styles from './Section.module.scss';

interface SectionProps extends HTMLProps<HTMLElement>{
  sectionType?: 'intro' | ''
}

const Section: FC<SectionProps> = ({ sectionType = '', ...props }) => (
  <section
    className={styles.Section}
    data-sectiontype={sectionType}
    {...props} />
);

export default Section