import React from 'react'
import { Container } from './style'

import { Link } from 'react-scroll'

interface YellowLinkProps {
  width: string
  height: string
  link: string
  smooth?: boolean
  offset?: number
}

export const YellowLink: React.FC<YellowLinkProps> = ({
  width,
  height,
  link,
  smooth,
  offset,
  children
}) => {
  return (
    <Container width={width} height={height}>
      <Link to={link} smooth={smooth || false} offset={offset || undefined}>
        {children}
      </Link>
    </Container>
  )
}
