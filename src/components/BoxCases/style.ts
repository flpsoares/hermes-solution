import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  height: 25.5rem;
  border-radius: 3rem;
  margin: 2.5rem 0;
  overflow: hidden;

  position: relative;
  z-index: 2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 110%;
    filter: blur(0.2rem);
  }
`
export const Overlay = styled.div`
  filter: blur(0);

  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  padding: 3.4rem;
  border-radius: 2rem;
  span {
    width: 68.5%;
    font-size: 2.2rem;
    font-weight: 500;
    color: white;
  }
`
