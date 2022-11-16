import { timeStamp } from 'console'
import {FC, useState, useEffect} from 'react'
import DisplayIf from './DisplayIf'
import styles from './Timeline.module.scss';

type TimeRangeProps = {
  startTimestamp: string,
  endTimestamp?: string | null,
  className?: string,
}

type STimestrings = {
  start: string,
  end?: string,
}

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const TimeRange: FC<TimeRangeProps> = ({
  startTimestamp,
  endTimestamp,
  className,
}) => {
  const [dates, setDates] = useState<STimestrings|null>(null)

  useEffect(() => {
    let temp = new Date(startTimestamp);
    let start = month[temp.getMonth()] + ' ' + temp.getFullYear();
    let end;

    if (endTimestamp){
      temp = new Date(endTimestamp)
      end = month[temp.getMonth()] + ' ' + temp.getFullYear();
    } else if (endTimestamp === null) {
      end = 'Present';
    } else {
      start = `${month[temp.getMonth()]} ${temp.getDay() + 1}, ${temp.getFullYear()}`
    }

    setDates({start, end})
  }, [startTimestamp, endTimestamp]);

  return (
    <DisplayIf condition={!!dates}>
      <p className={className}>
        <time dateTime={startTimestamp}>
          {dates?.start}
        </time>
        <DisplayIf condition={!!dates?.end}>
          {` - `}
          <time dateTime={endTimestamp!}>
            {dates?.end}
          </time>
        </DisplayIf>
      </p>
    </DisplayIf> 
  )
}

export default TimeRange;