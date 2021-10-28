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

  @media (max-width: 830px) {
    text-align: center;
    align-items: center;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  width: 36rem;
  z-index: 11;
`
export const Info = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
  max-width: 80rem;
  line-height: 28px;
  z-index: 11;

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
