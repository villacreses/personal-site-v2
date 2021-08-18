import Head from 'next/head';
import {
  ActionButton,
  Section,
  SectionHeader,
} from '../components';

const Test = () => (
  <div>
    <Head>
      <title>Mario Villacreses</title>
    </Head>
    <main className="fillHeight">
      <Section>
        <header>
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">Mario Villacreses</h2>
          <h3 className="big-heading">I build things for the web.</h3>
        </header>
        <p>
          I&apos;m a software engineer specializing in building extraordinary{' '} 
          experiences for the web. Currently I&apos;m working as 
          a rotational engineer at Facebook. 
        </p>
        <ActionButton href="mailto:MarioVillacreses@outlook.com">
          Get in touch
        </ActionButton>
      </Section>
      <Section id="about">
        <SectionHeader>About me</SectionHeader>
        <div className="inner">
          <div className="text-content"></div>
          <div className="image-container"></div>
        </div>
      </Section>
    </main>
  </div>
);

export default Test;