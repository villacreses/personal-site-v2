import { FC } from 'react';
import styles from './ActionButton.module.scss';
import { AnchorProps } from '@types';

const sizeMap = {
  xs: 'as-xs',
  sm: 'as-sm',
} as const;

interface ActionButton extends AnchorProps {
  size?: keyof typeof sizeMap;
}

const ActionButton: FC<ActionButton> = ({ 
  size = 'sm',
  ...props
}) => (
  <a
    rel="noopener noreferrer"
    className={styles[sizeMap[size]]}
    {...props}
  />
);

export default ActionButton;
