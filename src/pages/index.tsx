import {ComponentProps, ReactNode} from 'react'
import Markdown from 'react-markdown';
import {
  ActionButton,
  SectionHeader,
  TabList,
  Layout,
  ProfileImage
} from '@components';
import {indexContent} from '@data';

const MarkdownComponentMap: {
  [key: string]: ComponentProps<typeof Markdown>['components']
} = {
  intro: {
    code: function Prelude ({children}) {
      return <span className="prelude">{children}</span>
    }
  },
  about: {
    em: function Del ({children}) {
      return <del>{children}</del>;
    },
    strong: function Ins ({children}) {
      return <ins>{children}</ins>;
    }
  },
};

const MiscComponentMap: {
  [key: string]: ReactNode
} = {
  TabList,
  ProfileImage,
};

const Home = () => (
  <Layout>
    {indexContent.sections.map(({
      id,
      header,
      headerOptions,
      markdown,
      miscLayout = [],
      callToAction,
    }) => (
      <section id={id} key={id}>
        {headerOptions?.showHeader !== false && (
          <SectionHeader titleStyle={headerOptions?.titleStyle}>{header}</SectionHeader>
        )}
        {markdown && (
          <Markdown
            components={MarkdownComponentMap[id]}
          >
            {markdown}
          </Markdown>
        )}
        {miscLayout.map(({component, props}) => {
          const Component = MiscComponentMap[component];
          if (!Component) return null;
          // @ts-ignore
          return <Component key={props.id} {...props}/>
        })}
        {callToAction && <ActionButton {...callToAction} />}
      </section>
    ))}
  </Layout>
);

export default Home;