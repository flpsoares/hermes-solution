import styled from 'styled-components'

export const Container = styled.div`
  padding: 15rem 0 15rem 20rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  padding-right: 40rem;
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
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 30% 80%;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;
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
`

export const Photo = styled.div``

export const PhotoContainer = styled.div`
  background-image: url('./assets/websites/frame.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 105%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 6rem;

  img {
    width: 75%;
    height: 90%;
  }
`
