import {FC, HTMLProps} from 'react';
import Link from 'next/link';

type AnchorLinkProps = HTMLProps<HTMLAnchorElement> 

const AnchorLink: FC<AnchorLinkProps> = ({
  children,
  href = '/',
}) => {
  if(href[0] === '/') {
    return (
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    )
  }
  return (
    <a
      href={href} 
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default AnchorLink;
