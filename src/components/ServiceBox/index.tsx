import React, { useState } from 'react'
import { Container, FirstWrapper, SecondWrapper, Title } from './style'
import { AnimatePresence } from 'framer-motion'
import { LinkButtons } from '../LinkButtons'

interface ServiceBoxProps {
  title: string
  content: string
  image: string
}

export const ServiceBox: React.FC<ServiceBoxProps> = ({ title, content, image }) => {
  const [firstWrapperIsVisible, setFirstWrapperIsVisible] = useState(true)
  const [secondWrapperIsVisible, setSecondWrapperIsVisible] = useState(false)

  const makeFirstVisible = () => {
    setFirstWrapperIsVisible(true)
    setSecondWrapperIsVisible(false)
  }

  const makeSecondVisible = () => {
    setSecondWrapperIsVisible(true)
    setFirstWrapperIsVisible(false)
  }

  return (
    <Container onMouseEnter={makeSecondVisible} onMouseLeave={makeFirstVisible}>
      <AnimatePresence>
        {firstWrapperIsVisible ? (
          <FirstWrapper
            initial={secondWrapperIsVisible ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={image} alt="Serviço" />
            <Title>{title}</Title>
          </FirstWrapper>
        ) : (
          <SecondWrapper
            initial={secondWrapperIsVisible ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span>{content}</span>
            <LinkButtons size="0" link="#" children="Saiba mais" />
          </SecondWrapper>
        )}
      </AnimatePresence>
    </Container>
  )
}
