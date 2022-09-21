import { Layout, Timeline, Nav } from '@components';
import styles from '../components/Timeline.module.scss';
import {timelineContent} from '@data';

const CareerTimeline = () => (
  <Layout flex>
    <Nav.Filler />
    <section className={styles["top-section"]}>
      <h1>{`Mario's Career History`}</h1>   
      <p>
        <strong>Under construction! </strong>
        This is the future home for the story of my career. Until 
        everything is ready, please enjoy the filler text!
      </p>
      <p>Current to-do list:</p>
      <ol>
        <li>Make the timeline mobile-friendly</li>
        <li>Replace filler text with job history</li>
        <li>{`Implement "slider filter"`}</li>
        <li>Add supplementary entries</li>
      </ol>
    </section>
    <Timeline entries={timelineContent} />
  </Layout>
);

export default CareerTimeline;