import { FC, ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from './AnchorLink';
import styles from './Icon.module.scss';

import {
  faGithub,
  faHackerrank,
  faLinkedinIn,
  faMedium,
  faStackOverflow,
  faDev,
  faCodepen,
  faHackerNews,
} from '@fortawesome/free-brands-svg-icons';

import {
  faFolder,
} from '@fortawesome/free-regular-svg-icons';

import {
  faBars,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  medium: faMedium,
  hackerrank: faHackerrank,
  folder: faFolder,
  external: faExternalLinkAlt,
  burger: faBars,
  devto: faDev,
  codepen: faCodepen,
  hackernews: faHackerNews,
} as const;

type FAProps = Omit<ComponentProps<typeof FontAwesomeIcon>, 'icon'>

interface IconProps extends FAProps {
  id: keyof typeof iconMap;
}

export type IconLinkProps = {
  href: string;
  label: string;
  slug: ComponentProps<typeof Icon>['id'];
};

const Icon: FC<IconProps> = ({ id, ...props }) => (
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

export default Icon;