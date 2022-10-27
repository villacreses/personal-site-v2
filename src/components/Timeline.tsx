import {FC, ComponentProps} from 'react';
import Markdown from 'react-markdown';
import {TTimelineEntry} from '@types';
import {AnchorLink} from '@components';
import TimeRange from './TimeRange';

import styles from './Timeline.module.scss';

type TimelineProps<T extends {}> = {
  ContentContainer: FC<T>;
  entries: Array<{
    slug: string;
    startDate: string;
    endDate?: string | null;
    panelContent: T;
  }>;
};

const triangle = (
  <span className={styles.triangle}>
    <span />
  </span>
);

export default function Timeline<T extends {}> ({
  ContentContainer,
  entries,
}: TimelineProps<T>) {
  return (
    <ol className={styles.timeline}>
      {
        entries.map(({
          slug,
          startDate,
          endDate,
          panelContent,
        }) => (
          <li
            key={slug}
            className={styles["timeline-entry"]}
          >
            <i className={styles["timeline-pin"]} />
            <div className={styles["content-container"]}>
              <TimeRange
                startTimestamp={startDate}
                endTimestamp={endDate}
                className={styles.dateRange}
              />
              <ContentContainer {...panelContent} />
            </div>
            {triangle}
          </li>
        ))
      }
    </ol>
  )
};