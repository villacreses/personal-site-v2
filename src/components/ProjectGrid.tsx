import { FC } from 'react'
import Icon from './Icon';
import styles from './ProjectGrid.module.scss';
import {ProjectGridItemProps} from '@types';
import {projectContent} from '@data';

const ProjectGridItem: FC<ProjectGridItemProps> = ({
  title,
  description,
  tools = [],
  github,
  website
}) => (
  <li className={styles.gridLi}>
    <header>
      <div className={styles.projectTop}>
        <div className={styles.mainIcons}>
          <Icon id="folder" />
        </div>
        <div className={styles.externalLinks}>
          {!!github && (
            <a
              href={github}
            >
              <Icon id="github" />
            </a>
          )}
          {!!website && (
            <a
              href={website}
            >
              <Icon id="external" />
            </a>
          )}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </header>
    <footer>
      <ul>
        {tools.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
    </footer>
  </li>
);

const ProjectGrid = () => ( 
  <ul className={styles.gridUl}>
    {projectContent.map(project => (
      <ProjectGridItem key={project.slug} {...project} />
    ))}
  </ul>
);

export default ProjectGrid;
