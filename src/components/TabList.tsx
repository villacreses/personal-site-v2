import { FC, HTMLProps, useState, RefObject } from 'react';
import styles from './TabList.module.scss';
import { useMediaQuery, useTabFocus } from '@hooks';

interface TabProps extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
  tabRef?: RefObject<HTMLButtonElement>;
}

type TabListProps<T extends {}> = {
  ContentContainer: FC<T>;
  entries: Array<{
    slug: string;
    tabLabel: string;
    panelContent: T;
  }>;
};

const Tab: FC<TabProps> = ({
  children,
  selected = false,
  id,
  onClick,
  tabRef
}) => (
  <button
    ref={tabRef}
    className={styles.Tab}
    role="tab"
    aria-selected={selected}
    aria-controls={`panel-${id}`}
    id={`label-${id}`}
    tabIndex={selected ? 0 : -1}
    onClick={onClick}
  >
    {children}
  </button>
);

const Panel: FC<{id: string, hidden: boolean}> = ({
  id,
  hidden,
  children,
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
    {children}
  </div>
);

function TabList<T extends {}>({
  entries,
  ContentContainer,
}: TabListProps<T>) {
  const [activeTab, setActiveTab] = useState(0);
  const { onKeyDown, tabRefs } = useTabFocus(entries.length);

  const transform = useMediaQuery('(max-width: 600px)')
    ? `translateX(calc(${activeTab} * var(--tab-width)))`
    : `translateY(calc(${activeTab} * var(--tab-height)))`;

  return (
    <div className={styles.TabContainer}>
      <div
        role="tablist"
        aria-label="Work History"
        onKeyDown={onKeyDown}
      >
        {entries.map(({ tabLabel, slug }, idx) => (
          <Tab
            tabRef={tabRefs[idx]}
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
        {entries.map(({slug, panelContent}, idx) => (
          <Panel
            key={slug}
            id={slug}
            hidden={activeTab !== idx}
          >
            <ContentContainer {...panelContent} />
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default TabList;
