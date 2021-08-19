import { FC, HTMLProps } from 'react';
import styles from './Section.module.scss';

const sectionTypes = ['intro', 'about', 'work'] as const;

interface SectionProps extends HTMLProps<HTMLElement>{
  sectionType?: typeof sectionTypes[number];
}

const Section: FC<SectionProps> = ({ sectionType = '', ...props }) => (
  <section
    className={styles.Section}
    data-sectiontype={sectionType}
    {...props} />
);

export default Section