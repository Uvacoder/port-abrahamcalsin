import { useState, useEffect } from 'react'

const useFullLoad = () => {
  const [fullLoad, setFullLoad] = useState(false)

  useEffect(() => {
    setFullLoad(true)
  }, [])

  return { fullLoad }
}

export default useFullLoad
