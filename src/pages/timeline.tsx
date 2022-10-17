import { Layout, Timeline, Nav } from '@components';
import styles from '../components/Timeline.module.scss';
import {timelineContent} from '@data';
import {AnchorProps} from '@types';

const navLinks: AnchorProps[] = [
  {
    href: '/',
    children: 'Home'
  }
];

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
    <Timeline entries={timelineContent} />
  </Layout>
);

export default CareerTimeline;