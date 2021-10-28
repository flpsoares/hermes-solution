import React from 'react'
import { Container } from './style'

import { Link } from 'react-scroll'

interface YellowLinkProps {
  width: string
  height: string
  margintop?: string
  link: string
  smooth?: boolean
  offset?: number
}

export const YellowLink: React.FC<YellowLinkProps> = ({
  width,
  height,
  margintop,
  link,
  smooth,
  offset,
  children
}) => {
  return (
    <Container width={width} height={height} margintop={margintop}>
      <Link to={link} smooth={smooth || false} offset={offset || undefined}>
        {children}
      </Link>
    </Container>
  )
}
