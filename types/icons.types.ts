import {ComponentProps} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
  faFolder, faHourglass,
} from '@fortawesome/free-regular-svg-icons';

import {
  faBars,
  faExternalLinkAlt,
  faGraduationCap,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';

export enum ExperienceCategory {
  JOBS = "JOBS",
  HACKATHON = "HACKATHON",
  EDUCATION = "EDUCATION",
}

export const iconMap = {
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
  suitcase: faSuitcase,
  school: faGraduationCap,
  hourglass: faHourglass,
  [ExperienceCategory.JOBS]: faSuitcase,
  [ExperienceCategory.HACKATHON]: faHourglass,
  [ExperienceCategory.EDUCATION]: faGraduationCap,
} as const;

export type IconID = keyof typeof iconMap;

type FAProps = Omit<ComponentProps<typeof FontAwesomeIcon>, 'icon'>

export interface IconProps extends FAProps {
  id: IconID;
}

export type IconLinkProps = {
  href: string;
  label: string;
  slug: IconID;
};
