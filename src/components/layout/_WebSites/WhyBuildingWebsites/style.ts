import styled from 'styled-components'

export const Container = styled.div`
  padding: 15rem 0 15rem 20rem;

  @media (max-width: 1326px) {
    padding: 15rem 2rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;

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
    padding-right: 6rem;
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
  display: grid;
  grid-template-columns: 35% 65%;

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

  margin: 2.5rem 0.3rem;

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
  @media (max-width: 1420px) {
    p {
      font-size: 1.5rem;
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
  padding-left: 2rem;

  @media (max-width: 1325px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PhotoContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 85%;
  background-image: url('./assets/websites/frame.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15rem 0rem 2rem 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1326px) {
    grid-template-columns: 100%;
    padding: 20rem 4rem 5rem 4rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 100%;
    padding: 10rem 4rem 5rem 4rem;
  }
`

export const Frame = styled.div`
  background-image: url('./assets/websites/frame.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93.6rem;
  height: 66.3rem;

  border: 1px solid red;

  @media (max-width: 1326px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1240px) {
    height: 46.3rem;

    background-position: center;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const WebSiteImage = styled.img`
  width: 90%;
  height: 83%;

  @media (max-width: 1240px) {
    height: 90%;
    width: 60rem;
  }

  @media (max-width: 750px) {
    width: 90%;
    height: 80%;
  }
`
