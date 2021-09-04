import Head from 'next/head';
import {
  ActionButton,
  SectionHeader,
  TabList,
  EmailPanel,
  LinksPanel,
  ProjectGrid
} from '../components';

import pageContent from '../data/content.yaml';

const Test = () => (
  <>
    <Head>
      <title>{pageContent.intro.name}</title>
    </Head>
    <LinksPanel links={pageContent.sideLinks} />
    <EmailPanel email={pageContent.contact.email} />
    <main className="fillHeight">
      <section id="intro">
        <header>
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">{pageContent.intro.name}</h2>
          <h3 className="big-heading">{pageContent.intro.subheading}</h3>
        </header>
        <p>
          {pageContent.intro.teaser}
        </p>
        <ActionButton href={`mailto:${pageContent.contact.email}`}>
          Get In Touch
        </ActionButton>
      </section>
      <section id="about">
        <SectionHeader>About me</SectionHeader>
        {pageContent.about.map((content: string, idx: number) => (
          <p key={`about-me-${idx}`}>{content}</p>
        ))}
      </section>
      <section id="jobs">
        <SectionHeader>Where I&apos;ve worked</SectionHeader>
        <TabList contentList={pageContent.workHistory} />
      </section>
      <section id="projects">
          <SectionHeader>Some things I&apos;ve built</SectionHeader>
          <ProjectGrid projects={[]} />
      </section>
      <section id="contact">
        <SectionHeader titleStyle="small">
          What&apos;s Next?
        </SectionHeader>
        <h3>Get in touch</h3>
        <p>
          {pageContent.contact.ctaMessage}
        </p>
        <ActionButton href={`mailto:${pageContent.contact.email}`}>
          Say hello
        </ActionButton>
      </section>
    </main>
  </>
);

export default Test;