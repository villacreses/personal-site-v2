import {FC} from 'react';
import Markdown from 'react-markdown';
import {TTimelineEntry} from '@types';
import TimeRange from './TimeRange';

import styles from './Timeline.module.scss';

type TimelineProps = {
  entries: TTimelineEntry[],
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
        startDate,
        endDate,
        content,
      }) => (
        <li
          key={startDate}
          className={styles["timeline-entry"]}
        >
          <i />
          <div>
            <TimeRange
              startTimestamp={startDate}
              endTimestamp={endDate}
            />
            <Markdown>{content}</Markdown>
          </div>
          {triangle}
        </li>
      ))
    }
  </ol>
);