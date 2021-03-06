import styled from 'styled-components'

interface BoxCasesProps {
  display: string
}

export const Container = styled.a<BoxCasesProps>`
  display: ${(props) => props.display};
  width: 94%;
  height: 25.7rem;
  border-radius: 3rem;
  margin: 1rem auto;
  overflow: hidden;
  position: relative;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 900px) {
    width: 90%;
    height: 25.5rem;
    margin: 1.5rem auto;
  }
  @media (max-width: 700px) {
    width: 60%;
    height: 25.5rem;
  }
  @media (max-width: 600px) {
    width: 70%;
    height: 25.5rem;
  }
  @media (max-width: 500px) {
    width: 80%;
    height: 25.5rem;
  }
  @media (max-width: 400px) {
    width: 100%;
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
