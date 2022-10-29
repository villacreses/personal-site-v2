import {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AnchorLink from './AnchorLink';
import styles from './Icon.module.scss';

import {IconProps, IconLinkProps, iconMap} from '@types';

export const Icon: FC<IconProps> = ({ id, ...props }) => (
  <FontAwesomeIcon icon={iconMap[id]} {...props} />
);

export const IconLink: FC<IconLinkProps> = ({ href, label, slug }) => (
  <AnchorLink
    href={href}
    title={label}
    aria-label={label}
    className={styles["icon-link"]}
  >
    <Icon id={slug} />
  </AnchorLink>
);
