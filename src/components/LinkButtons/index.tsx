import { Container } from './style'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { ReactNode } from 'react'

import { Link } from 'react-scroll'

interface LinkProps {
  link: string
  size: string
  smooth?: boolean
  offset?: number
  children: ReactNode
}

export const LinkButtons = ({ link, size, children, smooth, offset }: LinkProps) => {
  return (
    <Container size={size}>
      {smooth ? (
        <Link
          to={link}
          href={link}
          smooth={smooth || false}
          offset={offset || undefined}
        >
          {children}
        </Link>
      ) : (
        <a href={link}>{children}</a>
      )}
      <MdKeyboardArrowRight className="icon" size={30} />
    </Container>
  )
}
