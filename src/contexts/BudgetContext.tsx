import { createContext, ReactNode, useContext, useState } from 'react'

interface BudgetContextData {
  progress: number
  step: number
  values: String[]
  customerName: string
  customerEmail: string
  customerCel: string
  customerSocialNetwork: string
  setCustomerName: (name: string) => void
  setCustomerEmail: (email: string) => void
  setCustomerCel: (cel: string) => void
  setCustomerSocialNetwork: (socialNetwork: string) => void
  isSubmited: boolean
  submitForm: () => void
  increase: (value: string) => void
  decrease: () => void
}

interface BudgetProviderProps {
  children: ReactNode
}

const BudgetContext = createContext({} as BudgetContextData)

export function BudgetProvider({ children }: BudgetProviderProps) {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(1)
  const [values, setValues] = useState([''])

  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerCel, setCustomerCel] = useState('')
  const [customerSocialNetwork, setCustomerSocialNetwork] = useState('')

  const [isSubmited, setIsSubmited] = useState(false)

  const submitForm = () => {
    if (customerName !== '' && customerEmail !== '' && customerCel !== '') {
      setIsSubmited(true)
    }
  }

  const increase = (value: string) => {
    if (progress < 100) {
      setProgress(progress + 16.66666666666667)
      setStep(step + 1)
      if (values !== undefined) {
        setValues((oldValue) => [...oldValue, value])
      }
    }
  }

  const decrease = () => {
    if (progress !== 0) {
      setProgress(progress - 16.66666666666667)
      setStep(step - 1)
      setValues((values) => values.filter((_, i) => i !== values.length - 1)) // remover último item do array
    }
  }

  return (
    <BudgetContext.Provider
      value={{
        progress,
        step,
        increase,
        decrease,
        values,
        customerName,
        customerEmail,
        customerCel,
        customerSocialNetwork,
        setCustomerName,
        setCustomerEmail,
        setCustomerCel,
        setCustomerSocialNetwork,
        isSubmited,
        submitForm
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export const useBudget = () => {
  return useContext(BudgetContext)
}
