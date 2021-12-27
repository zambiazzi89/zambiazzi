import { useState, useEffect } from 'react'

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      { rootMargin }
    )
    let refCopy = null
    if (ref.current) {
      observer.observe(ref.current)
      refCopy = ref.current
    }
    return () => {
      if (refCopy) observer.unobserve(refCopy)
    }
  }, [ref, rootMargin])
  return isIntersecting
}
