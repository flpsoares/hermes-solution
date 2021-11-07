import styled, { css } from 'styled-components'

interface ProgressProps {
  progress: number
  step: number
}

export const Container = styled.div`
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--primary);
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  line-height: 56px;
  margin-bottom: 4rem;
`

export const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p:first-child {
    font-size: 46px;
    width: 70rem;
    margin-bottom: 2rem;
  }

  p:nth-child(2) {
    font-weight: 300;
    font-size: 22px;
    text-align: center;
    line-height: 36px;
    width: 70rem;
  }
`

export const Quiz = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Question = styled.p`
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  text-align: center;
  line-height: 56px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 2rem;
  gap: 12px;
`

export const Option = styled.button`
  font-weight: 600;
  background: white;
  width: 15rem;
  border-radius: 2rem;
  padding: 0 1rem;
  height: 4rem;
  transition: background 0.2s;
  color: black;
  &:hover {
    background: var(--primary);
  }
`

export const SubmitButtons = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`

export const ProgressBar = styled.div`
  background: var(--background-primary);
  width: 80rem;
  height: 2rem;
  border-radius: 1.6rem;
  margin-bottom: 6rem;
`

export const Progress = styled.div<ProgressProps>`
  background: var(--primary);
  height: 100%;
  transition: width 0.2s;
  border-radius: 16px;
  position: relative;
  width: ${(props) =>
    css`
      ${props.progress}%
    `};
  &::after {
    content: '${(props) => props.step - 1}/6';
    position: absolute;
    color: white;
    bottom: -24px;
    right: 0;
  }
`

export const Other = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 8rem;

  div:first-child {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
  }
`

export const OtherInput = styled.input`
  background: white;
  height: 3rem;
  border-radius: 0.6rem;
  width: 100%;
  color: black;
  padding: 0 2rem;
  font-weight: 600;
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  margin: 4rem 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const Input = styled.input`
  background: white;
  height: 4.8rem;
  border-radius: 0.6rem;
  width: 30rem;
  padding: 0 0.8rem;
  color: black;
  font-weight: 600;
`

export const Label = styled.label`
  color: white;
  font-size: 1.8rem;
`

export const RollbackButton = styled.button`
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  width: 11rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  font-weight: 600;

  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--primary);
    color: black;
  }
`

export const ConcludeButton = styled.button`
  background: var(--primary);
  font-weight: 600;
  color: black;
  width: 11rem;
  height: 3.5rem;
  border-radius: 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .calendar-input {
    border: 1px solid var(--primary);
    background: var(--primary);
    color: black;
    font-weight: 600;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    padding: 0.8rem;
    margin-top: 2rem;
    cursor: pointer;
  }
  .Calendar__monthText {
    color: black;
  }
  .Calendar__yearText {
    color: black;
  }
  .Calendar__monthSelectorItemText {
    color: black !important;
    font-weight: 500;
  }
  .Calendar__yearSelectorText {
    color: black !important;
    font-weight: 500;
  }
  .Calendar__weekDay {
    color: black !important;
    font-weight: 500;
  }
`

export const FinalMessage = styled.h1`
  margin: 4rem 0;
`
