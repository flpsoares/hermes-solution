import styled from 'styled-components'

interface ContainerProps {
  marginTop: string
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 3rem;
  margin-top: ${(props) => props.marginTop || ''};

  background: var(--background-secondary);
  position: relative;
`

export const ErasedTitle = styled.h1`
  font-size: 2.2rem;
  color: white;
  font-weight: 400;

  @media (max-width: 1030px) {
    text-align: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  margin-top: 4rem;
  align-items: center;

  @media (max-width: 1030px) {
    grid-template-columns: repeat(3, 127px);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 4rem;
    justify-content: center;
    column-gap: 4rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 127px);
  }
`

export const Image = styled.img`
  opacity: 0.5;
`
