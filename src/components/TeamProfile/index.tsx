import React from 'react'
import { Container, Info } from './style'

interface TeamProps {
  id?: number
  name: string
  charge: string
  photo_url: string
}

export const TeamProfile: React.FC<TeamProps> = ({ name, charge, photo_url }) => {
  return (
    <Container>
      <img src={photo_url} alt={name} />
      <Info>
        <p>{name}</p>
        <p>{charge}</p>
      </Info>
    </Container>
  )
}
