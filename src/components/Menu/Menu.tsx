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
    nodeFocusProps,
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
      {...nodeFocusProps}
    >
      {children}
    </button>
  );
};

const MenuContainer: FC = ({ children }) => {
  const { id, nodeFocusProps, containerRef } = useMenuContext();

  return (
    <div
      ref={containerRef}
      id={`${id}-menu-container`}
      aria-labelledby={`${id}-menu-button`}
      role="menu"
      {...nodeFocusProps}
    >
      {children}
    </div>
  );
};

const MenuItem: FC<AnchorProps> = props => {
  const { id } = useMenuContext();

  return (
    <li role="menuitem" className={`${id}-menu-item`}>
      <a
        tabIndex={-1}
        {...props}
      />
    </li>
  )
};

type MenuComposition = {
  Container: FC;
  Toggle: FC;
  Item: FC<AnchorProps>;
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