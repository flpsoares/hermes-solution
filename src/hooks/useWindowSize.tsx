import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { screenWidth }
}

export default useWindowSize
