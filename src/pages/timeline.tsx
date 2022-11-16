import {FC} from 'react';
import Markdown from 'react-markdown';
import {DisplayIf, Layout, MoreLessContainer, Timeline} from '@components';
import styles from '../components/Timeline.module.scss';
import {experience} from '@data';
import {AnchorProps} from '@types';
import CompanyHeaderLink from 'src/components/CompanyHeaderLink';

const navLinks: AnchorProps[] = [
  {
    href: '/',
    children: 'Home'
  }
];

const timelineContent = experience
  .map(exp => ({
      slug: exp.slug,
      startDate: exp.positions[0].startDate,
      endDate: exp.positions[0].endDate,
      icon: exp.category,
      panelContent: {
        companyName: exp.companyName,
        companyUrl: exp.companyUrl,
        title: exp.positions[0].title,
        flavorText: exp.positions[0].flavorText,
        impact: exp.positions[0].impact,
      }
  }))

type ContentContainerProps = typeof timelineContent[number]['panelContent'];

const ContentContainer: FC<ContentContainerProps> = ({
  companyName,
  companyUrl,
  title,
  flavorText,
  impact = []
}) => (
  <>
    <h2 className={styles['timeline-item-header']}>
      <CompanyHeaderLink
        href={companyUrl}
        withExternalIndicator
      >
        {companyName}
      </CompanyHeaderLink>
    </h2>
    <h3>{title}</h3>
    <MoreLessContainer ignoreIf={!flavorText && !impact.length}>
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
    </MoreLessContainer>
  </>
)

const CareerTimeline = () => (
  <Layout
    navLinks={navLinks}
    mainClassNames={`${styles["page-grid"]} nav-filler`}
  >
    <section className={styles["top-section"]}>
      <h1>{`Mario's Career History`}</h1>   
      <p>
        This is the timeline of my professional accomplishments, and events 
        that have impacted my career. I hope that, by sharing my experiences,
        that you&apos;ll also be motivated to follow your dreams and to share 
        the story of your journey along the way!
      </p>
    </section>
    <Timeline<ContentContainerProps>
      ContentContainer={ContentContainer}
      entries={timelineContent}
    />
  </Layout>
);

export default CareerTimeline;