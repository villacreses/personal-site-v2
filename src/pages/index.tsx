import React from 'react'
import Markdown from 'react-markdown';

import {
  ActionButton,
  SectionHeader,
  TabList,
  Layout,
  ProfileImage
} from '@components';

import content from '../data/index.content.yaml';
import experience from '../data/Experience.content.yaml';

const Home = () => (
  <Layout>
    <section id="intro">
      <Markdown>{content.intro}</Markdown>
      <ActionButton {...content.introCTA} />
    </section>
    <section id="about">
      <SectionHeader>About me</SectionHeader>
      <Markdown>{content.about}</Markdown>
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
      <Markdown>{content.contact}</Markdown>
      <ActionButton {...content.contactCTA} />
    </section>
  </Layout>
);

export default Home;