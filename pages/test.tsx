import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';

const Test = () => (
  <div>
    <main>
      <section>
        <header>
          <h1>Hi, my name is</h1>
          <h2>Mario Villacreses</h2>
          <h3>I build things for the web.</h3>
        </header>
        <p>
          I&apos;m a rotational engineer at Facebook. 
        </p>
        <a href="mailto:MarioVillacreses@outlook.com">Get In Touch</a>
      </section>
      <section id="about">
        <SectionHeader>About me</SectionHeader>
        <div className="inner">
          <div className="text-content"></div>
          <div className="image-container"></div>
        </div>
      </section>
    </main>
  </div>
);

export default Test;