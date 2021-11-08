import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 13rem;
  overflow-x: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  z-index: 11;

  margin-top: 7rem;

  @media (max-width: 950px) {
    text-align: center;
    align-items: center;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  width: 55.5rem;
  z-index: 11;

  @media (max-width: 390px) {
    h1 {
      font-size: 4rem;
    }
  }
`
export const Info = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
  max-width: 57.5rem;
  z-index: 11;

  margin-bottom: 3rem;

  @media (max-width: 830px) {
  }
`

export const ButtonsArea = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 410px) {
    flex-direction: column;
  }
`
