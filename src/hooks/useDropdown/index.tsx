import { useEffect, useRef, useState } from "react"

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLButtonElement | null>(null)

  const toggleDropdown = (): void => {
    if (dropdownRef.current) {
      dropdownRef.current.setAttribute(
        "aria-expanded",
        Boolean(!isOpen).toString(),
      )
    }

    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleKeyDown = (event: React.KeyboardEvent): void => {
      // Logic for keyboard navigation (Esc, Up, Down, Enter)
      if (event.key === "Escape") {
        setIsOpen(false)
        if (dropdownRef.current) {
          dropdownRef.current.focus() // Return focus to the button
        }
      }
      // Add more key handlers here for arrow navigation
    }

    if (isOpen) {
      // Use document.addEventListener for global keydown events
      // Type casting is often needed for non-React events in useEffect
      document.addEventListener("keydown", handleKeyDown as any)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown as any)
    }
  }, [isOpen])

  return { isOpen, toggleDropdown, dropdownRef }
}

export default useDropdown
