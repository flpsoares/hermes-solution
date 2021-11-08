import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ContainerTwo = styled.div``

export const Title = styled.div`
  display: grid;
  grid-template-columns: 30% 15% 55%;
  align-items: center;

  margin-bottom: 3rem;

  h1 {
    font-size: 4.2rem;
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
    margin-right: 15rem;
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
  display: grid;
  grid-template-columns: 40% 70%;

  @media (max-width: 1326px) {
    grid-template-columns: 100%;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 4rem;

  @media (max-width: 1326px) {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    margin-bottom: 5rem;
  }
  @media (max-width: 1095px) {
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const WhyInfos = styled.div`
  display: flex;
  align-items: center;

  margin: 2.5rem 0;

  img {
    width: 6rem;
    margin-right: 4rem;
  }

  p {
    font-size: 2rem;
    b {
      font-weight: 600;
    }
  }
  @media (max-width: 420px) {
    p {
      font-size: 1.4rem;
    }
  }
`

export const Photo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70rem;
  }

  @media (max-width: 1326px) {
    padding-right: 0rem;
  }
  @media (max-width: 800px) {
    img {
      width: 60rem;
    }
  }
  @media (max-width: 640px) {
    img {
      width: 50rem;
    }
  }
  @media (max-width: 530px) {
    img {
      width: 40rem;
    }
  }
  @media (max-width: 430px) {
    img {
      width: 30rem;
    }
  }
`
