import { FC, HTMLProps } from 'react';
import styles from './Section.module.scss';

const Section: FC<HTMLProps<HTMLElement>> = props => (
  <section className={styles.Section} {...props} />
);

export default Section