import exp from './Experience.content.yaml';
import idx from './index.content.yaml';
import meta from './index.metadata.yaml';
import tmln from './Timeline.content.yaml';
import proj from './Projects.content.yaml';

import {
  ExperienceMetadata,
  Section,
  metadataType,
  TTimelineEntry,
  ProjectGridItemProps,
} from '@types';

export const indexContent = idx as Section[];
export const metadata = meta as metadataType;
export const timelineContent = tmln as TTimelineEntry[];
export const projectContent = proj as ProjectGridItemProps[]
export const experience = exp as ExperienceMetadata[];