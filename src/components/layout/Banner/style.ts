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

export const Wrapper = styled.div`
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

    @media (max-width: 340px) {
      gap: 1.1rem;
    }
  }
`

export const Info = styled.div`
  margin-top: 10rem;

  z-index: 4;

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
    }

    p {
      margin-top: 1.2rem;
      font-size: 3rem;
      width: 80%;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 3.8rem;
    }

    p {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2.7rem;
    }

    p {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 345px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export const Title = styled.h1`
  font-size: 6.2rem;
  font-weight: 500;
  z-index: 4;
`

export const FirstTitle = styled(Title)``
export const SecondTitle = styled(Title)`
  font-size: 4.2rem;
  margin-top: 6rem;
  width: 65.9%;

  @media (max-width: 1675px) {
    margin-top: 4rem;
  }

  @media (max-width: 1278px) {
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    margin-top: 0rem;
    width: 50rem;
    font-size: 4rem !important;
  }

  @media (max-width: 520px) {
    width: 90%;
    font-size: 3rem !important;
  }
`
export const ThirdTitle = styled(Title)`
  font-size: 4.2rem;
  margin-top: 6rem;
  width: 66.4%;

  @media (max-width: 1540px) {
    width: 64.5%;
  }

  @media (max-width: 1247px) {
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    width: 50rem;
    margin-top: 0;
  }

  @media (max-width: 520px) {
    width: 90%;
    font-size: 3rem;
  }
`

export const OurCasesButton = styled.button`
  border: 1px solid white;
  border-radius: 0.4rem;
  color: white;
  padding: 1rem 0rem;
  font-size: 1.8rem;

  width: 16rem;

  box-shadow: 0 0 2px 0 #ffffff;

  transition: background 0.2s;

  &:hover {
    background: var(--primary);
  }
`

export const StatueImage = styled.img`
  width: 47.7rem;
  height: 56.5rem;
  position: absolute;
  right: 5rem;
  top: 0;

  @media (max-width: 1470px) {
    opacity: 0.1;
  }
  @media (max-width: 1000px) {
    width: 42.7rem;
    height: 51.5rem;
    left: 50%;
    transform: translate(-50%);
  }
`
