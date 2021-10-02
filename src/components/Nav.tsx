import { FC, HTMLProps } from 'react';
import Link from 'next/link';
import ActionButton from './ActionButton';

import styles from './Nav.module.scss';
import BurgerMenu from './BurgerMenu';

const navLinks: HTMLProps<HTMLAnchorElement>[] = [
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
  },
];

const Nav: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref> 
          <a className={styles.logo}>
            MV
          </a>
        </Link>
        <div className={styles.links}>
          <ol>
            {navLinks.map((props, i) => (
              <li key={i}>
                <a {...props} />
              </li>
            ))}
          </ol>
          <ActionButton size="xs" href="resume.pdf" target="_blank">
            Resume
          </ActionButton>
        </div>
        <BurgerMenu items={navLinks} />
      </nav>
    </header>
  )
}

export default Nav;
