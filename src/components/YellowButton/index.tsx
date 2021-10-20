import React from 'react'
import { Container } from './style'

interface YellowButtonProps {
  size: string
}

export const YellowButton: React.FC<YellowButtonProps> = ({ size, children }) => {
  return <Container size={size}>{children}</Container>
}
