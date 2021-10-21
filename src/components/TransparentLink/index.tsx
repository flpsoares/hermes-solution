import React from 'react'
import { Container } from './style'

import { Link } from 'react-scroll'

interface TransparentLinkProps {
  link: string
  smooth?: boolean
  offset?: number
  width: string
  height: string
}

export const TransparentLink: React.FC<TransparentLinkProps> = ({
  children,
  link,
  smooth,
  offset,
  width,
  height
}) => {
  return (
    <Container width={width} height={height}>
      <Link to={link} smooth={smooth || false} offset={offset || undefined}>
        {children}
      </Link>
    </Container>
  )
}
