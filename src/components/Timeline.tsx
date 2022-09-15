import {FC, TimeHTMLAttributes} from 'react';
import Markdown from 'react-markdown';

import styles from './Timeline.module.scss';

export interface TimelineListEntryProps {
  title: string,
  content: string,
  timeMetadata: {
    date: string,
    timestamp?: TimeHTMLAttributes<HTMLElement>['dateTime'],
    timeOfDay?: string,
  },
} 

type TimelineProps = {
  entries: TimelineListEntryProps[],
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