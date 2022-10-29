import {FC} from 'react';
import Markdown from 'react-markdown';
import {DisplayIf, Layout, Timeline} from '@components';
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
    <h3>
      {title}
      <CompanyHeaderLink href={companyUrl}>
        {companyName}
      </CompanyHeaderLink>
    </h3>
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
        that have impacted my career. I hope that this will motivate you to 
        follow your dreams and to write down your own accomplishments along 
        the way!
      </p>
      <p>
      <strong>Under construction! </strong>
        Currently this timeline only has my work history, but I intend to add 
        a plethora of other accomplishments and experiences that have shaped 
        me as a professional.
      </p>
    </section>
    <Timeline<ContentContainerProps>
      ContentContainer={ContentContainer}
      entries={timelineContent}
    />
  </Layout>
);

export default CareerTimeline;