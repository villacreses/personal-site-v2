import { FC, HTMLProps } from 'react';
import Menu from './Menu';

type BurgerMenuProps = {
  items: Array<HTMLProps<HTMLAnchorElement>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ items }) => (
  <Menu id="nav-menu">
    <Menu.Button>
      Test
    </Menu.Button>
    <Menu.Container>
      {items.map((item, idx) => ( 
        <Menu.Item key={`item-${idx}`} {...item} />
      ))} 
    </Menu.Container>
  </Menu>
);

export default BurgerMenu;