import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  height: 26rem;
  border-radius: 3rem;
  margin: 2.5rem 0;
  overflow: hidden;

  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(0.4rem);
  }
`
export const Overlay = styled.div`
  filter: blur(0);
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 2rem;
  span {
    width: 65%;
    font-size: 2.2rem;
    font-weight: 500;
    color: white;
  }
`
