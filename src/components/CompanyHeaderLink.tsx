import {FC} from 'react';
import {Icon} from './Icon';
import DisplayIf from './DisplayIf';

type CompanyHeaderLinkProps = {
  href?: string;
  prefix?: string;
  withExternalIndicator?: boolean;
}

const CompanyHeaderLink: FC<CompanyHeaderLinkProps> = ({
  children,
  href,
  prefix = '',
  withExternalIndicator,
}) => !!href
  ? (
    <span className="green">
      {prefix}
      <a href={href}>
        {children}
        <DisplayIf condition={!!withExternalIndicator}>
          <Icon
            id="external"
            style={{
              fontSize: '0.35em',
              marginLeft: 3,
              marginTop: 3,
              verticalAlign: 'top',
            }}
          />
        </DisplayIf>
      </a>
    </span>
  ) : (
    <span>{prefix + children}</span>
  )

export default CompanyHeaderLink;
