import exp from './Experience.content.yaml';
import idx from './index.content.yaml';
import meta from './index.metadata.yaml';

import {
  TabContent,
  indexContentType,
  metadataType
} from '@types';

export const experience = exp as Array<TabContent>;
export const indexContent = idx as indexContentType;
export const metadata = meta as metadataType;