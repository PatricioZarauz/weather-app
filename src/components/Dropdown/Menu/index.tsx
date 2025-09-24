import MenuItem from "../MenuItem"
import styles from "./index.module.scss"
import useDropdownTransition from "@/hooks/useDropdownTransition"

interface DropdownProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: DropdownProps) => {
  const [menuRef] = useDropdownTransition(isOpen)

  return (
    <menu
      className={styles["dropdown-menu"]}
      id="dropdown-menu"
      role="menu"
      ref={menuRef}
      hidden={!isOpen}
    >
      <MenuItem
        label="Celsius (C)"
        itemKey="celsius"
        onClick={() => {
          console.log("Celsius")
        }}
      />
      <MenuItem
        label="Fahrenheit (F)"
        itemKey="fahrenheit"
        onClick={() => {
          console.log("Fahrenheit")
        }}
      />
    </menu>
  )
}

export default Menu
