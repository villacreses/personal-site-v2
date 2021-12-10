import React, {ComponentProps} from 'react'
import Markdown from 'react-markdown';
import {
  ActionButton,
  SectionHeader,
  TabList,
  Layout,
  ProfileImage
} from '@components';
import {experience, indexContent} from '@data';

type CustomMarkdownComponents = ComponentProps<typeof Markdown>['components'];

const aboutMeMarkdownComponents: CustomMarkdownComponents = {
  em: function Del ({children}) {
    return <del>{children}</del>;
  },
  strong: function Ins ({children}) {
    return <ins>{children}</ins>;
  }
};

const Home = () => (
  <Layout>
    <section id="intro">
      <Markdown>{indexContent.content.intro}</Markdown>
      <ActionButton {...indexContent.cta.intro} />
    </section>
    <section id="about">
      <SectionHeader>About me</SectionHeader>
      <Markdown components={aboutMeMarkdownComponents}>
        {indexContent.content.about}
      </Markdown>
      <ProfileImage
        src="/images/mario.jpg"
        alt="Headshot of Mario"
        layout="intrinsic"  
        width={300}
        height={300}
      />
    </section>
    <section id="jobs">
      <SectionHeader>Where I&apos;ve worked</SectionHeader>
      <TabList contentList={experience} />
    </section>
    {/*
    <section id="projects">
      <SectionHeader>Some things I&apos;ve built</SectionHeader>
      <ProjectGrid projects={[]} />
    </section>
    */}
    <section id="contact">
      <SectionHeader titleStyle="small">
        What&apos;s Next?
      </SectionHeader>
      <Markdown>{indexContent.content.contact}</Markdown>
      <ActionButton {...indexContent.cta.contact} />
    </section>
  </Layout>
);

export default Home;