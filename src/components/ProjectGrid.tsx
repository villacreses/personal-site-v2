import { FC } from 'react'
import Icon from './Icon';
import styles from './ProjectGrid.module.scss';

type ProjectGridItemProps = {
  id: string;
  title: string;
  description: string;
  tools?: Array<string>;
  github?: string;
  website?: string;
}

type ProjectGridProps = {
  projects: Array<ProjectGridItemProps>;
}

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

const ProjectGrid: FC<ProjectGridProps> = ({ projects }) => ( 
  <ul className={styles.gridUl}>
    {projects.map(project => (
      <ProjectGridItem key={project.id} {...project} />
    ))}
  </ul>
);

export default ProjectGrid;
