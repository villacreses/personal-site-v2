import {FC, HTMLProps} from 'react';
import Link from 'next/link';
const omit = ['target', 'rel'] as const;
type AnchorLinkProps = Omit<HTMLProps<HTMLAnchorElement>, typeof omit[number]> 

const AnchorLink: FC<AnchorLinkProps> = ({
  children,
  href = '/',
  ...props
}) => {
  if(href[0] === '/' || href[0] === '#') {
    return (
      <Link href={href} passHref>
        <a {...props}>{children}</a>
      </Link>
    )
  }
  return (
    <a
      href={href} 
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export default AnchorLink;
