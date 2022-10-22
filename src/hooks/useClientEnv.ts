import { useEffect, useState } from 'react'

export function useClientEnv() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
