import {TimelineProps} from '@types';
import TimeRange from './TimeRange';
import {Icon} from './Icon';
import DisplayIf from './DisplayIf';

import styles from './Timeline.module.scss';

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
          icon,
        }) => (
          <li
            key={slug}
            className={styles["timeline-entry"]}
          >
            <div className={styles["timeline-pin"]}>
              <DisplayIf condition={!!icon}>
                <Icon id={icon!} />
              </DisplayIf>
            </div>
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