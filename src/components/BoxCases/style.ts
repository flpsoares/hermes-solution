import styled from 'styled-components'

interface BoxCasesProps {
  display: string
}

export const Container = styled.div<BoxCasesProps>`
  display: ${(props) => props.display};
  width: 33.8rem;
  height: 25.7rem;
  border-radius: 3rem;
  margin: 1rem auto;
  overflow: hidden;

  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    margin: 1.5rem auto;
  }

  @media (max-width: 900px) {
    width: 28.8rem;
    height: 20.7rem;
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
