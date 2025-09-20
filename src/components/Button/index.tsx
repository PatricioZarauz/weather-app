import { ComponentProps } from "react"
import styles from "./index.module.scss"

// Get the props of a native button element
type NativeButtonProps = ComponentProps<"button">

// Extend the native props with your custom props
interface ButtonProps extends NativeButtonProps {
  variant?: "primary"
  text?: string
}

const Button = ({ text, variant = "primary", ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} data-variant={variant} {...rest}>
      {text}
    </button>
  )
}

export default Button
