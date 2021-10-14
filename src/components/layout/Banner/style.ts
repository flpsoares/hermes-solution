import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background: var(--background-primary);

  display: flex;
  justify-content: center;

  position: relative;

  .carousel {
    height: 65rem;
    position: relative;

    .rec-dot {
      background-color: transparent !important;
      opacity: 50% !important;
      border: 1px solid #fff;
      box-shadow: 0 0 1px 3px transparent !important;
      position: relative;
      bottom: 9rem;
    }

    .rec-dot_active {
      border: 1px solid var(--primary) !important;
      background: var(--primary) !important;
    }
  }
`

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding-left: 25rem;

  @media (max-width: 1000px) {
    padding-left: 0;
    text-align: center;
  }

  margin: 0 auto;

  height: 65rem;
  width: 100%;

  div:nth-child(2) {
    margin-top: 10rem;
    display: flex;
    gap: 3rem;
    z-index: 4;

    @media (max-width: 1000px) {
      align-items: center;
      justify-content: center;
    }
  }
`

export const Info = styled.div`
  margin-top: 10rem;

  z-index: 4;

  h1 {
    font-size: 6.2rem;
    font-weight: 500;
    z-index: 4;
  }

  p {
    margin-top: 3.6rem;
    font-size: 2.2rem;
    z-index: 4;
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 4.6rem;
      font-weight: 500;
      z-index: 4;
    }

    p {
      margin-top: 1.2rem;
      font-size: 3rem;
      z-index: 4;
      width: 70%;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 3.8rem;
      font-weight: 500;
      z-index: 4;
    }

    p {
      margin-top: 1.2rem;
      font-size: 2.2rem;
      z-index: 4;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      z-index: 4;
    }

    p {
      margin-top: 1.2rem;
      font-size: 1.5rem;
      z-index: 4;
    }
  }
`

export const OurCasesButton = styled.button`
  border: 1px solid white;
  border-radius: 0.4rem;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.8rem;

  box-shadow: 0 0 2px 0 #ffffff;

  transition: background 0.2s;

  &:hover {
    background: var(--primary);
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`

export const StatueImage = styled.img`
  width: 52.7rem;
  height: 61.5rem;
  position: absolute;
  right: 5rem;
  top: 0;

  @media (max-width: 1470px) {
    opacity: 0.1;
  }
  @media (max-width: 1000px) {
    width: 42.7rem;
    height: 51.5rem;
    right: 0;
  }
`
