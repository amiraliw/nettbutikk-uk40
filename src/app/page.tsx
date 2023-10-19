"use client"

import { useRouter } from "next/navigation"

import styles from "../styles/Homepage.module.css"

const HomePage: React.FC = () => {
  const router = useRouter()

  const handleStartShopping = () => {
    router.push("/products")
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Welcome to the shop</h1>
      <div className={styles.welcome}>
        <button
          className={styles.startShoppingButton}
          onClick={handleStartShopping}
          type="button"
        >
          Start shopping
        </button>
      </div>
    </div>
  )
}

export default HomePage
