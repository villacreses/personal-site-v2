import {
  useState,
  useRef,
  RefObject,
  useCallback,
  MouseEventHandler,
  KeyboardEventHandler,
  useEffect
} from "react";

const KEY_CODES = Object.freeze({
  RETURN: 'Enter',
  ESC: 'Escape',
  SPACE: ' ',
  END: 'End',
  HOME: 'Home',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
});

const useMenuState = (id: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);

  const containerRef = useRef(null) as RefObject<HTMLDivElement>;
  const toggleRef = useRef(null) as RefObject<HTMLButtonElement>;

  const items: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(`.${id}-menu-item`);
  const itemCount = items.length;
  
  const focusMenu = () => toggleRef.current?.focus();

  useEffect(() => {
     // as long as the menu is open, focus the next available item
    if (isOpen && highlightIdx > -1 && highlightIdx < itemCount) {
        items[highlightIdx].focus();
    } else {
      // if the menu is closed, focus the button.
      toggleRef.current?.focus();
    }
  }, [isOpen, highlightIdx, itemCount, items]);
  
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setHighlightIdx(-1);
    focusMenu();
  }, []);
  
  useEffect(() => {
          // for items we just need to stop event propagation or the menu container
          // will handle these event(which we don't want)
          if (!isFocused) closeMenu();
  }, [isFocused, closeMenu]);

  const focusNextItem = useCallback(() => {
    setHighlightIdx(prevIdx => (prevIdx + 1) % itemCount)
  }, [itemCount]);

  const focusPrevItem = useCallback(() => {
    setHighlightIdx(prevIdx => (prevIdx + itemCount - 1) % itemCount);
  }, [itemCount]);

  const onBlur = useCallback(() => setIsFocused(false), []);
  const onFocus = useCallback(() => setIsFocused(true), []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    setIsFocused(true);
    setHighlightIdx(0);
  }, []);

  const handleToggleClick: MouseEventHandler<
    HTMLButtonElement
  > = evt => {
    evt.preventDefault();
    isOpen ? closeMenu() : openMenu();
  };

  const toggleHandleKeyEvents: KeyboardEventHandler = evt => {
    evt.preventDefault();
    switch (evt.key) {
      case KEY_CODES.SPACE:
      case KEY_CODES.RETURN:
      case KEY_CODES.DOWN:
        openMenu();
        break;
      case KEY_CODES.UP:
        openMenu();
        break;
      default:
        closeMenu();
        break;
    }
  };

  const menuHandleKeyEvents: KeyboardEventHandler = evt => {
    switch (evt.key) {
      case KEY_CODES.SPACE:
      case KEY_CODES.DOWN:
        focusNextItem();
        break;
      case KEY_CODES.UP:
        focusPrevItem();
        break;
      case KEY_CODES.ESC:
        closeMenu();
        break;
      default:
        break;
    }
  };

  // for items we just need to stop event propagation or the menu container
  // will handle these event (which we don't want)
  const menuItemHandleKeyEvents: KeyboardEventHandler = evt => {
    if (
      evt.key === KEY_CODES.SPACE ||
      evt.key === KEY_CODES.RETURN
    ) {
      evt.stopPropagation();
      return;
    }
  }

  return {
    id,
    onBlur,
    onFocus,
    containerRef,
    toggleRef,
    handleToggleClick,
    toggleHandleKeyEvents,
    menuHandleKeyEvents,
    menuItemHandleKeyEvents,
  };
};

// source: https://randyperez.tech/blog/react-navigation

export type MenuContextType = ReturnType<typeof useMenuState>;
export default useMenuState;
