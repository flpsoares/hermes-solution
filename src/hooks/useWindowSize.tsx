import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}

export default useWindowSize
