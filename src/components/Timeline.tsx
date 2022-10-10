import {FC, ComponentProps} from 'react';
import Markdown from 'react-markdown';
import {TTimelineEntry} from '@types';
import {AnchorLink} from '@components';
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

const markdownComponents: ComponentProps<typeof Markdown>['components'] = {
  a: props => <AnchorLink {...props} />
}

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
          <i className={styles["timeline-pin"]} />
          <div className={styles["content-container"]}>
            <TimeRange
              startTimestamp={startDate}
              endTimestamp={endDate}
            />
            <Markdown components={markdownComponents}>{content}</Markdown>
          </div>
          {triangle}
        </li>
      ))
    }
  </ol>
);