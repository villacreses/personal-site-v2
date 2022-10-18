import { FC, ComponentProps } from 'react'
import Markdown from 'react-markdown';
import Icon from './Icon';
import DisplayIf from './DisplayIf';
import AnchorLink from './AnchorLink';
import styles from './ProjectGrid.module.scss';
import {ProjectGridItemProps} from '@types';
import {projectContent} from '@data';

const ProjectGridItem: FC<ProjectGridItemProps> = ({
  description,
  tools = [],
  github,
  website,
  note,
}) => (
  <li className={styles.gridLi}>
    <header>
      <div className={styles.icons}>
        <Icon id="folder" />
        <DisplayIf condition={!!github}>
          <AnchorLink
            href={github}
            className={styles.externalLink}
            title="Github repo"
            aria-label="Link to github repo"
          >
            <Icon id="github" />
          </AnchorLink>
        </DisplayIf>
        <DisplayIf condition={!!website}>
          <a
            href={website}
            className={styles.externalLink}
            title="External link"
            aria-label="External link"
          >
            <Icon id="external" />
          </a>
        </DisplayIf>
      </div>
      <Markdown>
        {description}
      </Markdown>
      <DisplayIf condition={!!note}>
        <p role="note">{note!}</p>
      </DisplayIf>
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
