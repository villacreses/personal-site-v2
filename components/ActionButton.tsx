import { FC, HTMLProps } from 'react';
import styles from './ActionButton.module.scss';

const sizeMap = {
  xs: 'as-xs',
  sm: 'as-sm',
} as const;

type AnchorProps = Omit<HTMLProps<HTMLAnchorElement>, 'className' | 'rel' | 'size'>

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
