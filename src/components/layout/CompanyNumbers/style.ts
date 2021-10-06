import styled from 'styled-components'
export const Container = styled.div`
  position: relative;
  padding: 9rem 20rem;

  overflow: hidden;

  section {
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 900px) {
      grid-template-columns: 100%;
    }
  }

  @media (max-width: 1280px) {
    padding: 9rem 10rem;
  }

  @media (max-width: 800px) {
    padding: 3rem 0.1rem;
  }
`

export const Left = styled.div`
  width: 100;
  z-index: 10;

  h1 {
    font-size: 4.6rem;

    font-weight: 300;
    margin-bottom: 2.4rem;
    b {
      font-weight: 500;
    }
  }

  p {
    word-wrap: break-word;
    font-size: 2.2rem;
    line-height: 3.1rem;

    font-weight: 300;
    margin-bottom: 3.4rem;

    width: 86%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  button {
    font-size: 1.9rem;
    padding: 1rem;
    color: var(--primary);
    font-weight: 100;
    background: rgb(0, 0, 0);
    margin-left: 0;
    border-left: 0px solid black;

    transition: border 0.4s, margin-left 0.2s;

    &:hover {
      margin-left: 0.2rem;
      border-left: 3px solid var(--primary);
    }

    @media (max-width: 800px) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 800px) {
    text-align: center;
  }
`

export const Right = styled.div`
  width: 100%;

  div:nth-child(1) {
    margin-left: 1rem;
    position: relative;
  }
  div:nth-child(2) {
    margin-left: 2rem;
    position: relative;
  }
`

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  margin-top: 8rem;

  @media (max-width: 800px) {
    gap: 2rem;
    padding: 0 1rem;
    grid-template-columns: 100%;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin-bottom: 7rem;
  position: relative;

  @media (max-width: 800px) {
    div:nth-child(1) {
      top: 0;
      left: 0;
      right: 0;
      border: 0;
    }
    div:nth-child(2) {
      top: 0;
      left: 0;
      right: 0;
      border: 0;
    }
  }
`