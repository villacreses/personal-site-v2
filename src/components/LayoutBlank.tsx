import {FC} from 'react';
import styles from './LayoutBlank.module.scss';

type LayoutBlankProps = {
  className?: string;
}

const LayoutBlank: FC<LayoutBlankProps> = ({
  className = '',
  children,
}) => (
  <div className={`full-page ${className ? ' ' + className : ''}`}>
    {children}
  </div>
);

export default LayoutBlank;
