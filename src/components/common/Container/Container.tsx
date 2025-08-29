import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="max-w-screen-xl mx-auto px-3">
      {children}
    </section>
  )
}
