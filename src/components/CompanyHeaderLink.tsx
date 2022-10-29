import {FC} from 'react';

const CompanyHeaderLink: FC<{href?: string}> = ({
  children,
  href,
}) => !!href
  ? (
    <span className="green">
      {' @ '}
      <a href={href}>
        {children}
      </a>
    </span>
  ) : (
    <span>{' @ ' + children}</span>
  )

export default CompanyHeaderLink;
