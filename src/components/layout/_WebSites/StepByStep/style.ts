import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  z-index: 11;
  padding-top: 7rem;
  position: relative;
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
`

export const StepsImage = styled.img`
  z-index: 11;
  width: 118.8rem;
  height: 31.5rem;
`
