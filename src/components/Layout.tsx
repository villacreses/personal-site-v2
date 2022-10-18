import {FC, ComponentProps} from 'react'
import {AnchorProps} from '@types';
import AnchorLink from './AnchorLink';
import Head, {HeadProps} from './Head';
import Icon from './Icon';
import Nav from './Nav';

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
    <AnchorLink
      href={href}
      title={label}
      aria-label={label}
    >
      <Icon id={slug} />
    </AnchorLink>
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
  navLinks,
  navNumbered = false,
  ...props
}) => (
  <>
    <Head {...props} />
    <Nav links={navLinks} numbered={navNumbered} />
    <LinksPanel iconLinks={content.links} />
    <EmailPanel email={content.email} />
    <main className={mainClassNames}>{children}</main>
  </>
);

export default Layout;