import { FC, ComponentProps } from 'react'
import {AnchorProps} from '@types';
import Head, { HeadProps } from './Head';
import Icon from './Icon';
import Nav from './Nav';
import DisplayIf from './DisplayIf';

import content from '../data/Layout.content.yaml';

import styles from './SidePanel.module.scss';

type IconLinkProps = {
  href: string;
  label: string;
  slug: ComponentProps<typeof Icon>['id'];
};

type LayoutContent = {
  email: string;
  iconLinks: Array<IconLinkProps>;
  navLinks: Array<AnchorProps>;
}

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

const LinksPanel: FC<Pick<LayoutContent,'iconLinks'>> = ({
  iconLinks
}) => (
  <div className={styles.containerLeft}>
    <ul>
      {iconLinks.map(
        link => <IconLink key={link.slug} {...link} />
      )}
    </ul>
  </div>
);

const Layout: FC<LayoutProps> = ({
  children,
  mainClassNames = '',
  navFiller = false,
  navLinks,
  navNumbered = false,
  ...props
}) => (
  <>
    <Head {...props} />
    <Nav links={navLinks} numbered={navNumbered} />
    <DisplayIf condition={navFiller}>
      <Nav.Filler />
    </DisplayIf>
    <LinksPanel iconLinks={content.links} />
    <EmailPanel email={content.email} />
    <main className={mainClassNames}>{children}</main>
  </>
);

export default Layout;