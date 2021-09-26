import { FC } from 'react';

import styles from './Nav.module.scss';
const navLinks = [
  {
    children: 'About',
    href: '#about'
  },
  {
    children: 'Experience',
    href: '#jobs'
  },
  {
    children: 'Contact',
    href: '#contact'
  }
];

const Nav: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          MV
        </div>
        <ol>
          {navLinks.map((props, i) => (
            <li key={i}>
              <a {...props} />
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}

export default Nav;
