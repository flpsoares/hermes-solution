import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 11.5rem;
  position: relative;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  z-index: 11;

  .carousel {
    max-width: 60rem;

    .rec-dot {
      background-color: transparent !important;
      opacity: 50% !important;
      border: 1px solid #fff;
      box-shadow: 0 0 1px 3px transparent !important;
    }

    .rec-dot_active {
      border: 1px solid var(--primary) !important;
      background: var(--primary) !important;
    }
  }

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
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
  max-width: 60rem;
  z-index: 11;

  @media (max-width: 830px) {
  }
`

export const SubInfo = styled.p`
  font-weight: 200;
  font-size: 14px;
  line-height: 23px;
  max-width: 60rem;
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
