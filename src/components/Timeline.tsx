import {FC, TimeHTMLAttributes} from 'react';
import Markdown from 'react-markdown';
import {TTimelineListEntry} from '@types';

import styles from './Timeline.module.scss';

type TimelineProps = {
  entries: TTimelineListEntry[],
};

const triangle = (
  <span className={styles.triangle}>
    <span />
  </span>
);

export const Timeline: FC<TimelineProps> = ({entries}) => (
  <ol className={styles.timeline}>
    {
      entries.map(({
        timeMetadata,
        title,
        content,
      }) => (
        <li key={timeMetadata.date}>
          <i />
          <div>
            <time>January 14, 1991</time>
            <h2>{title}</h2>
            <Markdown>{content}</Markdown>
          </div>
          {triangle}
        </li>
      ))
    }
  </ol>
);