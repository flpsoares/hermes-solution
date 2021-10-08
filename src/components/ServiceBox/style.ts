import styled from 'styled-components'

import { motion } from 'framer-motion'

interface WrapperProps {
  lineheight?: string
}

export const Container = styled.div`
  position: relative;

  z-index: 2;

  width: 256px;
  height: 222px;
  border: 1px solid var(--primary);
  background: var(--background-secondary);

  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;

  padding: 2.5rem;

  img {
    width: 100px;
    height: 90px;
    object-fit: contain;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.2rem;
`

export const FirstWrapper = styled(motion.div)<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  background: var(--background-secondary);
`

export const SecondWrapper = styled(motion.div)<WrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: var(--background-secondary);

  position: absolute;

  span {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    width: 92%;
    height: 13rem;
  }
`
