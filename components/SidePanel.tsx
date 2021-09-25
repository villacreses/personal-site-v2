import { FC, ComponentProps } from 'react';
import styles from './SidePanel.module.scss';
import Icon from './Icon';

type EmailPanelProps = {
  email: string;
}

type IconLinkProps = {
  href: string;
  label: string;
  id: ComponentProps<typeof Icon>['id'];
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

const IconLink: FC<IconLinkProps> = ({ href, label, id }) => (
  <li>
    <a
      href={href}
      title={label}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <Icon id={id} />
    </a>
  </li>
)

export const LinksPanel: FC<LinksPanelProps> = ({ links }) => (
  <div className={styles.containerLeft}>
    <ul>
      {links.map(link => <IconLink key={link.id} {...link} />)}
    </ul>
  </div>
);