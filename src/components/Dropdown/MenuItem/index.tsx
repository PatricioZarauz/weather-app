import styles from "./index.module.scss"

interface DropdownProps {
  label: string
  itemKey: string
  onClick: () => void
}

const MenuItem = ({ label, itemKey, onClick }: DropdownProps) => {
  return (
    <li role="none">
      <button
        className={styles["menu-item"]}
        role="menuitem"
        data-selected={true}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  )
}

export default MenuItem
