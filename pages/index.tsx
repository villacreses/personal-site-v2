import React from 'react'
import Markdown from 'react-markdown';
import {
  ActionButton,
  SectionHeader,
  TabList,
  ProjectGrid,
  Layout
} from '../components';

import pageContent from '../data/content.yaml';
import content from '../data/index.content.yaml';
import experience from '../data/Experience.content.yaml';

const ctaComponents: { [key: string]: React.ReactNode } = {
  a: function ActionButtonMD ({ node, ...props }) {
    return <ActionButton {...props} />
  }
};

const Home = () => (
  <Layout>
    <section id="intro">
      <Markdown>
        {content.intro}
      </Markdown>
      <Markdown components={ctaComponents}>
        {content.introCTA}
      </Markdown>
    </section>
    <section id="about">
      <SectionHeader>About me</SectionHeader>
      <div>
        <Markdown className="about-me">
          {content.about}
        </Markdown>
      </div>
    </section>
    <section id="jobs">
      <SectionHeader>Where I&apos;ve worked</SectionHeader>
      <TabList contentList={experience} />
    </section>
    <section id="projects">
      <SectionHeader>Some things I&apos;ve built</SectionHeader>
      <ProjectGrid projects={[]} />
    </section>
    <section id="contact">
      <SectionHeader titleStyle="small">
        What&apos;s Next?
      </SectionHeader>
      <Markdown components={ctaComponents}>
        {content.contact}
      </Markdown>
    </section>
  </Layout>
);

export default Home;