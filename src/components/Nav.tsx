import {FC} from 'react';
import Link from 'next/link';
import {AnchorProps} from '@types';
import ActionButton from './ActionButton';
import BurgerMenu from './BurgerMenu';

import { useScrollDirection, useNavAutohide } from '@hooks';
import styles from './Nav.module.scss';

type NavProps = {
  links: AnchorProps[];
  numbered?: boolean;
}

const Nav: FC<NavProps> = ({
  links,
  numbered = false,
}) => {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useNavAutohide();

  const numberingStyles = numbered ? styles.numbered : '';

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
            {links.map(({href, ...props}, i) => (
              <li key={i}>
                <Link href={href!} passHref>
                  <a className={numberingStyles} {...props} />
                </Link>
              </li>
            ))}
          </ol>
          <ActionButton
            size={numbered ? "xs" : "xxs"}
            href="resume.pdf"
            target="_blank"
            >
            Resume
          </ActionButton>
        </div>
        <BurgerMenu items={links} />
      </nav>
    </header>
  )
}

export default Nav;
