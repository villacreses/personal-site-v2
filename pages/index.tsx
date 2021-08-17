import Head from 'next/head';
import {
  ActionButton,
  Section,
  SectionHeader,
} from '../components';

const Test = () => (
  <div>
    <main className="fillHeight">
      <Section>
        <header>
          <h1>Hi, my name is</h1>
          <h2>Mario Villacreses</h2>
          <h3>I build things for the web.</h3>
        </header>
        <p>
          I&apos;m a rotational engineer at Facebook. 
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