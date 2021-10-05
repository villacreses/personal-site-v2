import {
  useState,
  useEffect,
  KeyboardEventHandler,
  RefObject,
  createRef
} from "react";
import { KEY_CODES } from "@utils";

const useTabFocus = (tabCount: number) => {
  const [tabFocus, setTabFocus] = useState<number|undefined>(undefined);
  const [tabRefs, setTabRefs] = useState([] as RefObject<HTMLButtonElement>[]);

  const onKeyDown: KeyboardEventHandler = evt => {
    switch (evt.key) {
      case KEY_CODES.ARROW_DOWN: {
        evt.preventDefault();
        setTabFocus(prevFocus => prevFocus === undefined
          ? 0
          : (prevFocus + 1) % tabCount
        );
        break;
      }
      case KEY_CODES.ARROW_UP: {
        evt.preventDefault();
        setTabFocus(prevFocus => prevFocus === undefined
          ? 0
          : (prevFocus + tabCount - 1) % tabCount
          );
          break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    const refs = new Array(tabCount)
      .fill(null)
      .map(() => createRef<HTMLButtonElement>());
      
    setTabRefs(refs);
  }, [tabCount]);
      
  useEffect(() => {
    if (tabFocus !== undefined) {
      tabRefs[tabFocus].current?.focus();
    }
  }, [tabFocus, tabRefs]);

  return {
    onKeyDown,
    tabRefs
  }
};

export default useTabFocus;
