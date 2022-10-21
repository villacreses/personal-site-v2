import {FC} from 'react'
import {AnchorProps} from '@types';
import AnchorLink from './AnchorLink';
import Head, {HeadProps} from './Head';
import {IconLink, IconLinkProps} from './Icon';
import Nav from './Nav';

import content from '../data/Layout.content.yaml';

import styles from './SidePanel.module.scss';

interface LayoutProps extends HeadProps {
  mainClassNames?: string;
  navFiller?: boolean;
  navLinks: Array<AnchorProps>;
  navNumbered?: boolean
}

type LinksPanelProps = {
  links: IconLinkProps[];
  className?: string;
}

export const EmailPanel: FC<{email: string}> = ({
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

const LinksPanel: FC<LinksPanelProps> = ({
  links,
  className
}) => (
  <div className={className}>
    <ul>
      {links.map(link => (
        <li key={link.slug}>
          <IconLink {...link} />
        </li>
      ))}
    </ul>
  </div>
);

const Layout: FC<LayoutProps> = ({
  children,
  mainClassNames = '',
  navLinks,
  navNumbered = false,
  ...props
}) => (
  <>
    <Head {...props} />
    <Nav links={navLinks} numbered={navNumbered} />
    <LinksPanel links={content.links} className={styles.containerLeft} />
    <EmailPanel email={content.email} />
    <main className={mainClassNames}>{children}</main>
    <footer className={styles["layout-footer"]}>
      <LinksPanel links={content.links} className={styles.footerLinks}/>
      <p>
        Think my website looks great? Check out&nbsp;
        <AnchorLink href="https://github.com/villacreses/personal-site-v2/">
          the github repo for this site
        </AnchorLink>
        !
      <br />
      <small className="negligible">
        Still using Netscape? Check out {' '}
        <a href="/90s/index.html">my optimized site</a>.
      </small>
      </p>
    </footer>
  </>
);

export default Layout;