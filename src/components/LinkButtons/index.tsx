import { Container } from './style'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { ReactNode } from 'react'

interface LinkProps {
  link: string
  children: ReactNode
}

export const LinkButtons = ({ link, children }: LinkProps) => {
  return (
    <Container>
      <a href={link}>{children}</a>
      <MdKeyboardArrowRight size={30} />
    </Container>
  )
}
