import {FC} from 'react';

const CompanyHeaderLink: FC<{href?: string, prefix?: string}> = ({
  children,
  href,
  prefix = '',
}) => !!href
  ? (
    <span className="green">
      {prefix}
      <a href={href}>
        {children}
      </a>
    </span>
  ) : (
    <span>{prefix + children}</span>
  )

export default CompanyHeaderLink;
