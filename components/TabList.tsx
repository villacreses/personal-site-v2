import { FC, HTMLProps, useState } from 'react';
import Markdown from 'react-markdown';
import styles from './TabList.module.scss';

type Content = {
  key: string;
  role: string;
  companyName: string;
  range?: string; 
  impact: string;
};

interface TabProps extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
}

interface PanelProps extends Omit<HTMLProps<HTMLElement>, 'content'> {
  content: Content;
}

type TabListProps = {
  contentList: Array<Content>;
};

const Tab: FC<TabProps> = ({
  children,
  selected = false,
  id,
  onClick,
}) => (
  <button
    className={styles.Tab}
    role="tab"
    aria-selected={selected}
    aria-controls={`panel-${id}`}
    id={`label-${id}`}
    tabIndex={selected ? 0 : -1}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

const Panel: FC<PanelProps> = ({
  id,
  hidden,
  content
}) => (
  <div
    className={styles.Panel}
    id={`panel-${id}`}
    role="tabpanel"
    tabIndex={0}
    aria-labelledby={`label-${id}`}
    aria-hidden={hidden}
    hidden={hidden}
  >
    <h3>
      <span>{content.role}</span>
      <span data-content="company">
        {' @ '}
        <a
          rel="noopener noreferrer"
        >
          {content.companyName}
        </a>
      </span>
    </h3>
    <p data-content="range">
      {content.range}
    </p>
    <Markdown>{content.impact}</Markdown>
  </div>
);

const TabList: FC<TabListProps> = ({ contentList }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.TabContainer}>
      <div role="tablist" aria-label="Work History">
        {contentList.map(({ companyName, key }, idx) => (
          <Tab
            key={key}
            id={key}
            selected={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          >
            {companyName}
          </Tab>
        ))}
        <div
          className={styles.highlight}
          style={{ top: `calc(${activeTab} * var(--tab-height))` }}
        />
      </div>
      <div data-containerfor="panels" >
        {contentList.map((content, idx) => (
          <Panel
            key={content.key}
            id={content.key}
            content={content}
            hidden={activeTab !== idx}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
