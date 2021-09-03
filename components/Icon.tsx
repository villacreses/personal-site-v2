import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faHackerrank,
  faLinkedinIn,
  faMedium,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  medium: faMedium,
  hackerrank: faHackerrank
} as const;

type IconProps = {
  id: keyof typeof iconMap;
}

const Icon: FC<IconProps> = ({ id }) => (
  <FontAwesomeIcon icon={iconMap[id]} />
);

export default Icon;