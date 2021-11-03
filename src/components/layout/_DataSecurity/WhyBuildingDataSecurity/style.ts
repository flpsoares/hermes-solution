import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Main = styled.div`
  padding: 15rem 0rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;

  h1 {
    font-size: 4.2rem;
    font-weight: 500;
  }

  div {
    height: 10rem;
    width: 4px;
    background-color: var(--primary);
    margin: 0 5rem;
  }

  p {
    font-size: 1.7rem;
    font-weight: 200;
    line-height: 2.8rem;
    padding-right: 15rem;
  }

  @media (max-width: 1326px) {
    padding-right: 10rem;
  }
  @media (max-width: 700px) {
    padding-right: 0rem;
    flex-direction: column;
    text-align: center;
    div {
      height: 4px;
      width: 10rem;
      background-color: var(--primary);
      margin: 5rem 0;
    }
    p {
      font-size: 1.7rem;
      font-weight: 200;
      line-height: 2.8rem;
      padding-right: 0rem;
    }
  }
`
export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin-bottom: 4rem;

  @media (max-width: 1110px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 50%);
  }
`

export const WhyInfos = styled.div`
  display: flex;

  flex-direction: column;

  margin: 3rem 1rem;

  img {
    width: 6rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    b {
      font-weight: 600;
    }
  }
  @media (max-width: 800px) {
    padding: 2rem;
  }
  @media (max-width: 420px) {
    p {
      font-size: 1.4rem;
    }
  }
`
