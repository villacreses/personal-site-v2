import {FC, ComponentProps} from 'react'
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



const LinksPanel: FC<{links: Array<IconLinkProps>}> = ({
  links,
}) => (
  <div className={styles.containerLeft}>
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
    <LinksPanel links={content.links} />
    <EmailPanel email={content.email} />
    <main className={mainClassNames}>{children}</main>
  </>
);

export default Layout;