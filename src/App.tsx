import Button from "./components/Button"
import styles from "./App.module.scss"
import Dropdown from "./components/Dropdown"

export const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button text="Search" />
        <Dropdown label="Units" />
      </div>
    </div>
  )
}
