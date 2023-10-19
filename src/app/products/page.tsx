"use client"

import { useRouter } from "next/navigation"

import GetAllProducts from "@/components/GetAllProducts"
import Handelkurv from "@/components/Handelkurv"
import { Product } from "@/features/types/productType"
import useCart from "@/hooks/useCart"
import styles from "../../styles/ProductList.module.css"

const ProductPage: React.FC = () => {
  const { handelkurvsProducts, leggIHandelkurv, onAdd, onRemove, removeAll } =
    useCart()

  const router = useRouter()
  const handleHomeButton = () => {
    router.push("/")
  }
  const handleCartOperations = (product: Product, operation: string) => {
    switch (operation) {
      case "+":
        onAdd(product)
        break
      case "-":
        onRemove(product)

        break
      case "x":
        removeAll(product)
        break
      default:
        console.log("No such Operation!")
        break
    }
  }

  return (
    <>
      <div className="container">
        <button className={styles.homeButton} onClick={handleHomeButton}>
          Home
        </button>
        <h1>Products</h1>
        <GetAllProducts addToCart={leggIHandelkurv} />
        <Handelkurv
          productsList={handelkurvsProducts}
          handleCartOperations={handleCartOperations}
        />
      </div>
    </>
  )
}

export default ProductPage
