import { Component, FC, HTMLProps } from 'react';
import styles from './TabList.module.scss';

type Content = {
  key: string;
  role: string;
  companyName: string;
  range?: string; 
  impact: Array<string>;
};

interface TabProps extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
  panelId: string;
}

interface PanelProps extends Omit<HTMLProps<HTMLElement>, 'content'> {
  labelId: string;
  content: Content;
}

type TabListProps = {
  contentList: Array<Content>;
};

type TabListState = {
  activeTabWork: number;
}

const Tab: FC<TabProps> = ({
  children,
  selected = false,
  id,
  panelId,
  onClick,
}) => (
  <button
    className={styles.Tab}
    role="tab"
    aria-selected={selected}
    aria-controls={panelId}
    id={id}
    tabIndex={selected ? 0 : -1}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

const Panel: FC<PanelProps> = ({
  id,
  labelId,
  hidden,
  content
}) => (
  <div
    className={styles.Panel}
    id={id}
    role="tabpanel"
    tabIndex={0}
    aria-labelledby={labelId}
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
    <ul>
      {content.impact.map((impact, idx) => (
        <li key={`impact-${idx}`}>
          {impact}
        </li>
      ))}
    </ul>
  </div>
);

class TabList extends Component<TabListProps, TabListState> {
  static Tab: FC<TabProps>;
  static Panel: FC<PanelProps>

  constructor (props: TabListProps) {
    super(props);

    this.state = {
      activeTabWork: 0,
    }

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab (idx: number) {
    this.setState({ activeTabWork: idx })
  }

  render () {
    return (
      <div className={styles.TabContainer}>
        <div role="tablist" aria-label="Work History">
          {this.props.contentList.map(({ companyName, key }, idx) => (
            <TabList.Tab
              key={key}
              id={`tab-${key}`}
              panelId={`panel-${key}`}
              selected={this.state.activeTabWork === idx}
              onClick={() => this.setActiveTab(idx)}
            >
              {companyName}
            </TabList.Tab>
          ))}
          <div className={styles.highlight} />
        </div>
        <div data-containerfor="panels" >
          {this.props.contentList.map((content, idx) => (
            <Panel
              key={content.key}
              id={`panel-${content.key}`}
              labelId={`tab-${content.key}`}
              content={content}
              hidden={this.state.activeTabWork !== idx}
            />
          ))}
        </div>
      </div>
    );
  }
}

TabList.Tab = Tab;
TabList.Panel = Panel;


export default TabList;
