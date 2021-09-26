import { FC, HTMLProps, useState, ComponentProps } from 'react';
import Markdown from 'react-markdown';
import styles from './TabList.module.scss';
import useMediaQuery from '../hooks/useMediaQuery';

type Content = {
  slug: string;
  tabLabel: string;
  content: string;
};

interface TabProps extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
}

interface PanelProps extends Omit<HTMLProps<HTMLElement>, 'content'> {
  content: string;
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

const panelMarkdownComponents: ComponentProps<typeof Markdown>['components'] = {
  h1: 'h3',
  h2: function DateRange ({ node, ...props }) {
    return <p className={styles.dateRange} {...props} />
  },
  strong: function CompanyHighlight ({ children }) {
    return ( 
      <span className={styles.companyHighlight}>
        {children}
      </span>
    );
  }
};

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
    <Markdown components={panelMarkdownComponents}>
      {content}
    </Markdown>
  </div>
);

const TabList: FC<TabListProps> = ({ contentList }) => {
  const [activeTab, setActiveTab] = useState(0);

  const transform = useMediaQuery('(max-width: 600px)')
    ? `translateX(calc(${activeTab} * var(--tab-width)))`
    : `translateY(calc(${activeTab} * var(--tab-height)))`;

  return (
    <div className={styles.TabContainer}>
      <div role="tablist" aria-label="Work History">
        {contentList.map(({ tabLabel, slug }, idx) => (
          <Tab
            key={slug}
            id={slug}
            selected={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          >
            {tabLabel}
          </Tab>
        ))}
        <div
          className={styles.highlight}
          style={{ transform }}
        />
      </div>
      <div data-containerfor="panels" >
        {contentList.map(({ slug, content }, idx) => (
          <Panel
            key={slug}
            id={slug}
            content={content}
            hidden={activeTab !== idx}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
