import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  @media (max-width: 730px) {
    background: var(--background-primary);
    height: 100rem;
  }
  @media (max-width: 470px) {
    height: 150rem;
  }
`

export const Wrapper = styled.div`
  z-index: 11;
  padding-top: 7rem;
  position: relative;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  width: 46rem;

  p {
    font-size: 4.2rem;
  }

  p,
  h1 {
    z-index: 1;
  }

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 445px) {
    p {
      font-size: 3rem;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

export const Content = styled.div`
  margin-top: 8rem;
  height: 60rem;
`

export const StepsArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  position: relative;

  @media (max-width: 1100px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
  }

  @media (max-width: 470px) {
    display: flex;
    gap: 10rem;
    flex-direction: column;
  }
`

export const StepsImage = styled.img`
  z-index: 11;
  width: 118.8rem;
  height: 31.5rem;

  @media (max-width: 1200px) {
    width: 108.8rem;
    height: 27.5rem;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`
