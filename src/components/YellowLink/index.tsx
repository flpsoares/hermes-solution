import React from 'react'
import { Container } from './style'

import { Link } from 'react-scroll'

interface YellowLinkProps {
  width: string
  height: string
  link: string
  margintop?: string
  smooth?: boolean
  offset?: number
  fontsize?: string
}

export const YellowLink: React.FC<YellowLinkProps> = ({
  width,
  height,
  margintop,
  link,
  smooth,
  offset,
  fontsize,
  children
}) => {
  return (
    <Container
      width={width}
      fontsize={fontsize}
      height={height}
      margintop={margintop}
    >
      <Link to={link} smooth={smooth || false} offset={offset || undefined}>
        {children}
      </Link>
    </Container>
  )
}
