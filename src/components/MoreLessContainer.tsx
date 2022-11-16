import {FC, useState} from 'react';
import { Icon } from './Icon';
import styles from './MoreLessContainer.module.scss';

type MoreLessContainerProps = {
  openByDefault?: boolean;
  ignoreIf?: boolean;
}

const MoreLessContainer: FC<MoreLessContainerProps> = ({
  openByDefault = false,
  ignoreIf = false,
  children
}) => {
  const [isOpen, setIsOpen] = useState(openByDefault);
  return (
    <>
      <div
        className={styles.hideOnMd}
        data-isopen={isOpen}
        data-ignore={ignoreIf}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggle}
        data-ignore={ignoreIf}
      >
        <Icon id={isOpen ? 'caretUp' : 'caretDown'} />
        {isOpen ? 'Show Less' : 'Show More'}
      </button>
    </>
  )
}

export default MoreLessContainer;
