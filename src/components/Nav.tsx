import { FC, HTMLProps } from 'react';
import Link from 'next/link';
import ActionButton from './ActionButton';
import BurgerMenu from './BurgerMenu';

import { useScrollDirection, useNavAutohide } from '@hooks';
import styles from './Nav.module.scss';

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
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useNavAutohide();

  return (
    <header
      className={styles.header}
      data-scrolledtotop={scrolledToTop}
      data-scrolldirection={scrollDirection}
    >
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
