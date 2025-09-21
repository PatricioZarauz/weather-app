import { useEffect, useRef } from "react"

const useDropdownTransition = (isOpen: boolean) => {
  const menuRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        const scrollHeight = menuRef.current.scrollHeight
        const borderWidth = parseFloat(
          getComputedStyle(menuRef.current).borderWidth,
        )
        const marginTop = parseFloat(
          getComputedStyle(menuRef.current).marginTop,
        )
        const newHeight = scrollHeight + borderWidth + marginTop

        // Set the inline style for the transition to work
        menuRef.current.style.maxHeight = `${newHeight}px`
      } else {
        // When closing, reset max-height to 0 for the transition out
        menuRef.current.style.maxHeight = "0px"
      }
    }
  }, [isOpen])

  return [menuRef]
}

export default useDropdownTransition
