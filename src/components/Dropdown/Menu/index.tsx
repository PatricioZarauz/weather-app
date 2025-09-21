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
      <li role="none">
        <a href="#" role="menuitem">
          First Item
        </a>
      </li>
      <li role="none">
        <a href="#" role="menuitem">
          Second Item
        </a>
      </li>
      <li role="none">
        <a href="#" role="menuitem">
          Third Item
        </a>
      </li>
    </menu>
  )
}

export default Menu
