import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  height: 25.5rem;
  border-radius: 3rem;
  margin: 2.5rem 0;
  overflow: hidden;

  position: relative;
  z-index: 2;

  @media (max-width: 800px) {
    width: 75%;
    height: 25.5rem;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Overlay = styled.div`
  filter: blur(0);

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3.4rem;
  border-radius: 2rem;

  h1 {
    width: 100%;
    font-size: 2.2rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.5rem;
  }
  span {
    width: 68.5%;
    font-size: 1.4rem;
    font-weight: 300;
    color: white;
  }
`
