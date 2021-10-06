import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 13rem);
  background: var(--background-primary);

  display: flex;
  justify-content: center;

  position: relative;

  .carousel {
    height: 65rem;
    position: relative;

    div:has(.dot.dot) {
      border: 1px solid red;
    }

    .rec-dot {
      background-color: transparent !important;
      opacity: 50% !important;
      border: 1px solid #fff;
      box-shadow: 0 0 1px 3px transparent !important;
      /* margin-bottom: 6rem; */
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

  margin: 0 auto;

  height: 65rem;
  width: 100%;

  div:nth-child(2) {
    margin-top: 10rem;
    display: flex;
    gap: 3rem;
  }
`

export const Info = styled.div`
  margin-top: 10rem;

  h1 {
    font-size: 6.2rem;
    font-weight: 500;
  }

  p {
    margin-top: 3.6rem;
    font-size: 2.2rem;
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
`

export const OurServicesButton = styled.button`
  border-radius: 0.4rem;
  color: #000000;
  padding: 1.1rem 2rem;
  font-size: 1.8rem;
  background: var(--primary);

  box-shadow: 0 0 2px 0 #ffffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const StatueImage = styled.img`
  width: 52.7rem;
  height: 61.5rem;
  position: absolute;
  right: 5rem;
  top: 0;
`
