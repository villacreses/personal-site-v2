import { Layout, Timeline, TimelineListEntryProps, Nav } from '@components';
import styles from '../components/Timeline.module.scss';

const defaultProps: TimelineListEntryProps[] = [
  {
    title: 'Ricebean black-eyed pea',
    content: 'Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea sorrel gram garbanzo plantain lotus root bok choy squash cress potato summer purslane salsify fennel horseradish dulse. Winter purslane garbanzo artichoke broccoli lentil corn okra silver beet celery quandong. Plantain salad beetroot bunya nuts black-eyed pea collard greens radish water spinach gourd chicory prairie turnip avocado sierra leone bologi.',
    timeMetadata: {
      date: "14 Jan"
    }
  },
  {
    title: 'Ricebean black-eyed pea',
    content: 'Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea sorrel gram garbanzo plantain lotus root bok choy squash cress potato summer purslane salsify fennel horseradish dulse. Winter purslane garbanzo artichoke broccoli lentil corn okra silver beet celery quandong. Plantain salad beetroot bunya nuts black-eyed pea collard greens radish water spinach gourd chicory prairie turnip avocado sierra leone bologi.',
    timeMetadata: {
      date: "14 Jan"
    }
  },
  {
    title: 'Ricebean black-eyed pea',
    content: 'Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea sorrel gram garbanzo plantain lotus root bok choy squash cress potato summer purslane salsify fennel horseradish dulse. Winter purslane garbanzo artichoke broccoli lentil corn okra silver beet celery quandong. Plantain salad beetroot bunya nuts black-eyed pea collard greens radish water spinach gourd chicory prairie turnip avocado sierra leone bologi.',
    timeMetadata: {
      date: "14 Jan"
    }
  },
]

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
    <Timeline entries={defaultProps} />
  </Layout>
);

export default CareerTimeline;