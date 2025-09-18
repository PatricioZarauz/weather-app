import Button from "./components/Button"
import styles from "./App.module.scss"

export const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button text="Search" />
      </div>
    </div>
  )
}
