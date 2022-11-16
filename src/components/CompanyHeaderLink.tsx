import {FC} from 'react';
import {Icon} from './Icon';
import DisplayIf from './DisplayIf';
import AnchorLink from './AnchorLink'

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
      <AnchorLink href={href}>
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
      </AnchorLink>
    </span>
  ) : (
    <span>{prefix + children}</span>
  )

export default CompanyHeaderLink;
