import { FC, HTMLProps } from 'react';
import Menu from './Menu';
import ActionButton from './ActionButton';
import {Icon} from './Icon';

import styles from './BurgerMenu.module.scss';

type BurgerMenuProps = {
  items: Array<HTMLProps<HTMLAnchorElement>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ items }) => (
  <Menu id="page-nav">
    <Menu.Button className={styles.button}>
      <Icon id="burger" size="2x" />
    </Menu.Button>
    <Menu.Container className={styles.panel}>
      <ol>
        {items.map((item, idx) => ( 
          <li
            key={`item-${idx}`} 
            role="presentation"
          >
            <Menu.Item {...item} />
          </li>
        ))} 
      </ol>
      <ActionButton
        size="xs"
        href="/resume.pdf"
        target="_blank"
      >
        Resume
      </ActionButton>
    </Menu.Container>
  </Menu>
);

export default BurgerMenu;