import styled from 'styled-components'

import { motion } from 'framer-motion'

interface ContainerProps {
  isHover: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;

  width: 376px;
  height: 187px;
  border: 1px solid var(--primary);
  background: var(--background-secondary);

  transition: border-radius 1s;

  border-radius: 18px;

  border-top-right-radius: ${(props) => props.isHover && '0px'};
  border-bottom-left-radius: ${(props) => props.isHover && '0px'};

  padding: 1.5rem;

  img {
    width: 100px;
    height: 90px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 321px;
    height: 272px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.2rem;
  z-index: 5;
`

export const FirstWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: var(--background-secondary);
  z-index: 5;
`

export const SecondWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: var(--background-secondary);
  z-index: 5;
  position: relative;

  padding: 0 1rem;

  span {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    width: 92%;
    height: 9rem;
  }

  @media (max-width: 600px) {
    height: 90%;
    justify-content: space-between;
    padding: 0;
  }
`

export const TwoButtons = styled.div`
  margin-top: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 600px) {
    margin-top: 3rem;
  }
`
