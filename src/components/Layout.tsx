import { FC, ComponentProps } from 'react'
import Head, { HeadProps } from './Head';
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
  links: Array<IconLinkProps>
}

interface LayoutProps extends HeadProps {
  flex?: boolean;
}

export const EmailPanel: FC<Pick<LayoutContent,'email'>> = ({
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

const LinksPanel: FC<Pick<LayoutContent,'links'>> = ({ links }) => (
  <div className={styles.containerLeft}>
    <ul>
      {links.map(link => <IconLink key={link.slug} {...link} />)}
    </ul>
  </div>
);

const Layout: FC<LayoutProps> = ({
  children,
  flex = false,
  ...props
}) => {

  const mainClassNames = flex 
    ? "fillHeight flex-column"
    : "fillHeight";

  return (
    <>
    <Head {...props} />
    <Nav />
    <LinksPanel links={content.links} />
    <EmailPanel email={content.email} />
    <main className={mainClassNames}>{children}</main>
  </>
);
}

export default Layout;