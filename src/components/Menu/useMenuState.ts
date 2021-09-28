import {
  useState,
  useRef,
  RefObject,
  useCallback,
  MouseEventHandler,
  KeyboardEventHandler
} from "react";

const KEY_CODES = Object.freeze({
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  END: 35,
  HOME: 36,
  UP: 38,
  DOWN: 48,
});

const useMenuState = (id: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);

  const containerRef = useRef(null) as RefObject<HTMLDivElement>;
  const toggleRef = useRef(null) as RefObject<HTMLButtonElement>;

  const itemCount = document.querySelectorAll(`.${id}-menu-item`).length;
  
  const focusMenu = () => toggleRef.current?.focus();

  const focusNextItem = useCallback(() => {
    setHighlightIdx(prevIdx => (prevIdx + 1) % itemCount)
  }, [itemCount]);

  const focusPrevItem = useCallback(() => {
    setHighlightIdx(prevIdx => (prevIdx + itemCount - 1) % itemCount);
  }, [itemCount]);

  const nodeFocusProps = useRef({
    onBlur: () => setIsFocused(false),
    onFocus: () => setIsFocused(true),
  });

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setHighlightIdx(-1);
    focusMenu();
  }, []);

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

  const toggleHandleKeyEvents: KeyboardEventHandler<
    HTMLButtonElement
  > = evt => {
    evt.preventDefault();
  }

  return {
    id,
    nodeFocusProps: nodeFocusProps.current,
    containerRef,
    toggleRef,
    handleToggleClick,
    toggleHandleKeyEvents,
  };
};

// source: https://randyperez.tech/blog/react-navigation

export type MenuContextType = ReturnType<typeof useMenuState>;
export default useMenuState;
