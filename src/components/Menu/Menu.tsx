import { FC, HTMLProps } from 'react';
import { MenuContextProvider, useMenuContext } from './menuContext';
import useMenuState from './useMenuState';

const filteredAnchorProps = [
  'href', 'children', 'target', 'className'
] as const;

type AnchorProps = Pick<
  HTMLProps<HTMLAnchorElement>,
  typeof filteredAnchorProps[number]
>;

type MenuStandardProps = {
  className?: HTMLProps<typeof HTMLElement>['className']
}

interface MenuProps extends MenuStandardProps {
  id: string;
}

const MenuButton: FC<MenuStandardProps> = props => {
  const {
    id,
    buttonRef,
    toggleMenu,
    menuOpen
  } = useMenuContext();

  return (
    <button
      ref={buttonRef}
      id={`${id}-menu-button`}
      aria-haspopup="true"
      aria-controls={`${id}-menu-container`}
      aria-label="Menu"
      type="button"
      onClick={toggleMenu}
      data-menuopen={menuOpen}
      {...props}
    />
  );
};

const MenuContainer: FC<MenuStandardProps> = props => {
  const {
    id,
    menuOpen,
    navRef
  } = useMenuContext();

  return (
    <nav
      ref={navRef}
      id={`${id}-menu-container`}
      aria-labelledby={`${id}-menu-button`}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
      role="menu"
      {...props}
    />
  );
};

const MenuItem: FC<AnchorProps> = props => {
  const { id, onItemClick } = useMenuContext();

  return (
    <li role="presentation">
      <a
        role="menuitem"
        className={`${id}-menu-item`}
        onClick={onItemClick}
        {...props}
      />
    </li>
  )
};

type MenuComposition = {
  Container: typeof MenuContainer;
  Button: typeof MenuButton;
  Item: typeof MenuItem;
}

const Menu: FC<MenuProps> & MenuComposition = ({
  id,
  children,
}) => {
  const menuState = useMenuState(id);
  return (
    <MenuContextProvider value={menuState}>
      {children}
    </MenuContextProvider>
  );
};

Menu.Container = MenuContainer;
Menu.Button = MenuButton;
Menu.Item = MenuItem;

export default Menu;