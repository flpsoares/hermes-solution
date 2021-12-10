import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: var(--background-secondary);

  .rec-dot {
    background-color: transparent !important;
    opacity: 50% !important;
    border: 1px solid #fff;
    box-shadow: 0 0 1px 3px transparent !important;
    margin-top: 1rem;
    position: relative;
    bottom: -4rem;
  }

  .rec-dot_active {
    border: 1px solid var(--primary) !important;
    background: var(--primary) !important;
  }
`

export const Wrapper = styled.div`
  display: flex;

  padding: 10rem 0;

  @media (max-width: 1160px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  padding: 0 0rem 0 25rem;
  display: flex;
  align-items: center;

  span {
    font-size: 46px;
    color: #ffffff;
    text-align: left;
    line-height: 55px;
    width: 40rem;

    @media (max-width: 1160px) {
      text-align: center;
      margin-bottom: 4rem;
    }

    @media (max-width: 425px) {
      font-size: 36px;
      padding: 0 2rem;
    }
  }

  @media (max-width: 1160px) {
    justify-content: center;
    padding: 0;
  }
`
