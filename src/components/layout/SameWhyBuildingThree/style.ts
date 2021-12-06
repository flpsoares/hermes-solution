import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div``

export const Title = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;

  margin-top: 8rem;
  margin-bottom: 5rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 4.3rem;
  }

  div {
    margin: 0 auto;
    height: 10rem;
    width: 3px;
    background-color: var(--primary);
  }

  p {
    font-size: 1.7rem;
    font-weight: 200;
    line-height: 2.8rem;
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 45% 10% 45%;
    align-items: center;
    p {
      width: 100%;

      font-size: 1.7rem;
      font-weight: 200;
      line-height: 2.8rem;
      margin-right: 0rem;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    div {
      margin: 0 auto;
      height: 3px;
      width: 10rem;
      background-color: var(--primary);
      margin: 2rem 0;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
`

export const Infos = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 33%);

  margin-bottom: 2rem;

  @media (max-width: 750px) {
    grid-template-columns: 100%;
  }
`

export const WhyInfos = styled.div`
  display: flex;

  flex-direction: column;

  margin: 2.5rem 0;
  width: 75%;

  img {
    width: 6.2rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.7rem;
    b {
      font-weight: 600;
    }
  }

  @media (max-width: 750px) {
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  @media (max-width: 520px) {
    width: 90%;
    p {
      font-size: 1.4rem;
    }
  }
`
