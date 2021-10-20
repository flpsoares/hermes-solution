import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  margin-top: 9rem;

  img {
    width: 604px;
    height: 539px;

    @media (max-width: 670px) {
      width: 404px;
      height: 339px;
    }

    @media (max-width: 445px) {
      width: 304px;
      height: 239px;
    }
  }

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 37rem;

  h2 {
    font-weight: 500;
    font-style: normal;
    font-size: 26px;
    color: #ffffff;
    line-height: 56px;

    @media (max-width: 1070px) {
      text-align: center;
    }
  }

  h1 {
    font-size: 46px;
    color: #ffffff;
    text-align: left;
    font-weight: 200;
    font-style: normal;
    line-height: 56px;
    margin-bottom: 4rem;

    @media (max-width: 1070px) {
      text-align: center;
      margin-bottom: 2rem;
    }

    @media (max-width: 360px) {
      font-size: 32px;
    }
  }

  @media (max-width: 1070px) {
    align-items: center;
    margin-bottom: 4rem;
    margin-left: 0;
  }
`
