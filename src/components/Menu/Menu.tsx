import { FC, HTMLProps } from 'react';
import { MenuContextProvider, useMenuContext } from './menuContext';
import useMenuState from './useMenuState';

const filteredAnchorProps = [
  'href', 'children', 'target'
] as const;

type AnchorProps = Pick<
  HTMLProps<HTMLAnchorElement>,
  typeof filteredAnchorProps[number]
>;

type MenuProps = {
  id: string;
}

const MenuToggle: FC = ({ children }) => {
  const {
    id,
    onBlur,
    onFocus,
    toggleRef,
    handleToggleClick,
    toggleHandleKeyEvents,
  } = useMenuContext();

  return (
    <button
      ref={toggleRef}
      id={`${id}-menu-button`}
      aria-haspopup="true"
      aria-controls={`${id}-menu-container`}
      type="button"
      onClick={handleToggleClick}
      onKeyDown={toggleHandleKeyEvents}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
    </button>
  );
};

const MenuContainer: FC = ({ children }) => {
  const {
    id,
    onBlur,
    onFocus,
    containerRef,
    menuHandleKeyEvents,
  } = useMenuContext();

  return (
    <div
      ref={containerRef}
      id={`${id}-menu-container`}
      aria-labelledby={`${id}-menu-button`}
      role="menu"
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={menuHandleKeyEvents}
    >
      {children}
    </div>
  );
};

const MenuItem: FC<AnchorProps> = props => {
  const { id, menuItemHandleKeyEvents } = useMenuContext();

  return (
    <li role="presentation">
      <a
        role="menuitem"
        className={`${id}-menu-item`}
        tabIndex={-1}
        onKeyDown={menuItemHandleKeyEvents}
        {...props}
      />
    </li>
  )
};

type MenuComposition = {
  Container: typeof MenuContainer;
  Toggle: typeof MenuToggle;
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
Menu.Toggle = MenuToggle;
Menu.Item = MenuItem;

export default Menu;