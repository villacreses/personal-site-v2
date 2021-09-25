import { FC, ComponentProps } from 'react'
import Head from 'next/head';
import Icon from './Icon';

import content from '../data/Layout.content.yaml';

import styles from './SidePanel.module.scss';

type EmailPanelProps = {
  email: string;
}

type IconLinkProps = {
  href: string;
  label: string;
  slug: ComponentProps<typeof Icon>['id'];
};

type LinksPanelProps = {
  links: Array<IconLinkProps>;
}

export const EmailPanel: FC<EmailPanelProps> = ({
  email
}) => (
  <div className={styles.containerRight}>
    <a
      href={`mailto:${email}`}
      rel="noopener noreferrer"
      className={styles.emailLink}
    >
      {email}
    </a>
  </div>
);

const IconLink: FC<IconLinkProps> = ({ href, label, slug }) => (
  <li>
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <Icon id={slug} />
    </a>
  </li>
)

const LinksPanel: FC<LinksPanelProps> = ({ links }) => (
  <div className={styles.containerLeft}>
    <ul>
      {links.map(link => <IconLink key={link.slug} {...link} />)}
    </ul>
  </div>
);

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>{content.defaultTitle}</title>
    </Head>
    <LinksPanel links={content.links} />
    <EmailPanel email={content.email} />
    <main className="fillHeight">{children}</main>
  </>
);

export default Layout;