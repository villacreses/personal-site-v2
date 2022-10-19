import {ComponentProps, ReactNode, HTMLProps} from 'react'
import Markdown from 'react-markdown';
import {
  ActionButton,
  AnchorLink,
  DisplayIf,
  SectionHeader,
  TabList,
  Layout,
  ProfileImage,
  ProjectGrid,
} from '@components';
import {indexContent} from '@data';
import {AnchorProps} from '@types';

const MarkdownComponentMap: {
  [key: string]: ComponentProps<typeof Markdown>['components']
} = {
  intro: {
    code: function Prelude ({children}) {
      return <span className="prelude">{children}</span>
    },
    a: props => <AnchorLink {...props} />
  },
  about: {
    em: function Del ({children}) {
      return <del>{children}</del>;
    },
    strong: function Ins ({children}) {
      return <ins>{children}</ins>;
    },
    a: ({node, ...props}) => <AnchorLink {...props} />
  },
  workexperience: {
    a: ({node, ...props}) => <AnchorLink {...props} />
  }
};

const MiscComponentMap: {
  [key: string]: ReactNode
} = {
  TabList,
  ProfileImage,
  ProjectGrid,
};

const navLinks: AnchorProps[] = indexContent
  .filter(({headerOptions}) => headerOptions?.showHeader !== false)
  .map(({id, navHeader}) => ({
    children: navHeader,
    href: `#${id}`
  }));

const Home = () => (
  <Layout navLinks={navLinks} navNumbered>
    {indexContent.map(({
      id,
      header,
      headerOptions,
      markdown,
      miscLayout = [],
      callToAction,
      callToActionText,
    }) => (
      <section id={id} key={id}>
        <DisplayIf condition={headerOptions?.showHeader !== false}>
          <SectionHeader titleStyle={headerOptions?.titleStyle}>
            {header}
          </SectionHeader>
        </DisplayIf>
        <DisplayIf condition={!!markdown}>
          <Markdown components={MarkdownComponentMap[id]}>
            {markdown!}
          </Markdown>
        </DisplayIf>
        {miscLayout.map(({component, props}) => {
          const Component = MiscComponentMap[component];
          if (!Component) return null;
          // @ts-ignore
          return <Component key={props.id} {...props}/>
        })}
        <DisplayIf condition={!!callToActionText}>
          <Markdown components={MarkdownComponentMap[id]}>
            {callToActionText!}
          </Markdown>
        </DisplayIf>
        <DisplayIf condition={!!callToAction}>
          <ActionButton {...(callToAction!)} />
        </DisplayIf>
      </section>
    ))}
  </Layout>
);

export default Home;