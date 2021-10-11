import styled from 'styled-components'

export const Container = styled.div`
  margin: 3rem 0;
`

export const ErasedTitle = styled.h1`
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;

  @media (max-width: 1030px) {
    text-align: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  margin-top: 4rem;

  @media (max-width: 1030px) {
    grid-template-columns: repeat(3, 127px);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 4rem;
    justify-content: center;
    column-gap: 4rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 127px);
    grid-template-rows: repeat(4, 1fr);
  }
`

export const Image = styled.img`
  width: 127px;
  height: 28px;
`
