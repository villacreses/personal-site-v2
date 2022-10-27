import {FC, PropsWithChildren} from 'react';
import Markdown from 'react-markdown';
import DisplayIf from './DisplayIf';
import TabList from './TabList';
import TimeRange from './TimeRange';
import CompanyHeaderLink from './CompanyHeaderLink';
import {experience} from '@data';
import {ExperienceCategory} from '@types';

import styles from './TabList.module.scss';

const tablistData = experience
  .filter(({category}) => category === ExperienceCategory.JOBS)
  .map(exp => ({
    slug: exp.slug,
    tabLabel: exp.shortLabel,
    panelContent: {
      companyName: exp.companyName,
      companyUrl: exp.companyUrl,
      title: exp.positions[0].title,
      startDate: exp.positions[0].startDate,
      endDate: exp.positions[0].endDate,
      flavorText: exp.positions[0].flavorText,
      impact: exp.positions[0].impact,
    }
  }));

type ContentContainerProps = typeof tablistData[number]['panelContent'];

const ContentContainer: FC<ContentContainerProps> = ({
  companyName,
  companyUrl,
  startDate,
  endDate,
  flavorText,
  impact = [],
  title,
}) => (
  <>
    <h3>
      {title}
      <CompanyHeaderLink href={companyUrl}>
        {companyName}
      </CompanyHeaderLink>
    </h3>
    <TimeRange
      startTimestamp={startDate}
      endTimestamp={endDate}
      className={styles.dateRange}
    />
    <DisplayIf condition={!!flavorText}>
      <Markdown>
        {flavorText!}
      </Markdown>
    </DisplayIf>
    <Markdown>
      {impact.reduce(
        (acc, impactEntry) => acc + `- ${impactEntry}\n\n`,
        ''
      )}
    </Markdown>
  </>
);

export const ZZWorkExperienceTabList: FC = () => (
  <TabList<ContentContainerProps>
    ContentContainer={ContentContainer}
    entries={tablistData}
  />
);