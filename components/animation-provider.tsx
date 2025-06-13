"use client"

import { useEffect, createContext, useContext, type ReactNode } from "react"

interface AnimationContextType {
  initAnimations: () => void
}

const AnimationContext = createContext<AnimationContextType>({
  initAnimations: () => {},
})

export const useAnimation = () => useContext(AnimationContext)

export default function AnimationProvider({ children }: { children: ReactNode }) {
  const initAnimations = () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  }

  useEffect(() => {
    // Initialize animations on first load
    initAnimations()

    // Re-initialize animations when the route changes
    const handleRouteChange = () => {
      setTimeout(() => {
        initAnimations()
      }, 100)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return <AnimationContext.Provider value={{ initAnimations }}>{children}</AnimationContext.Provider>
}
