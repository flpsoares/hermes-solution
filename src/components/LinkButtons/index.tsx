import { Container } from './style'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { ReactNode } from 'react'

interface LinkProps {
  link: string
  size: string
  children: ReactNode
}

export const LinkButtons = ({ link, size, children }: LinkProps) => {
  return (
    <Container size={size}>
      <a href={link}>{children}</a>
      <MdKeyboardArrowRight className="icon" size={30} />
    </Container>
  )
}
