import styles from "./index.module.scss"
import DropdownIcon from "@/../assets/images/icon-dropdown.svg"
import UnitsIcon from "@/../assets/images/icon-units.svg"
import useDropdown from "@/hooks/useDropdown"
import Menu from "./Menu"

interface DropdownProps {
  label: string
}

const Dropdown = ({ label }: DropdownProps) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown()

  return (
    <div className={styles["dropdown-container"]}>
      <button
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="dropdown-menu"
        className={styles["dropdown-button"]}
        data-dropdown-state="collapsed"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <img
          className={styles["dropdown-icon"]}
          src={UnitsIcon}
          alt="Your SVG"
        />
        {label}
        <img
          className={styles["dropdown-arrow"]}
          src={DropdownIcon}
          alt="Your SVG"
        />
      </button>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Dropdown
