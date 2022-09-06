import {ComponentProps, ReactNode} from 'react'
import Markdown from 'react-markdown';
import {
  ActionButton,
  DisplayIf,
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
    {indexContent.map(({
      id,
      header,
      headerOptions,
      markdown,
      miscLayout = [],
      callToAction,
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
        <DisplayIf condition={!!callToAction}>
          <ActionButton {...(callToAction!)} />
        </DisplayIf>
      </section>
    ))}
  </Layout>
);

export default Home;