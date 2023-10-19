import { useState } from "react"

import { Product } from "@/features/types/productType"
import styles from "../styles/Handelkurv.module.css"
import HandelkurvItem from "./HandelkurvItem"

export default function Handelkurv({
  productsList,
  handleCartOperations,
}: {
  productsList: Product[]
  handleCartOperations: (product: Product, operation: string) => void
}) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const onAdd = (product: Product) => {
    handleCartOperations(product, "+")
  }

  const onRemove = (product: Product) => {
    handleCartOperations(product, "-")
  }

  const onClose = (product: Product) => {
    handleCartOperations(product, "x")
  }

  return (
    <>
      <button
        className={styles.handelkurv}
        id="handelkurv"
        onClick={toggleCart}
      >
        Handelkurv
      </button>
      {isCartOpen && (
        <div className={styles.cart}>
          Shopping Cart
          {productsList.map((product) => (
            <HandelkurvItem
              key={product.id}
              description={product.beskrivelse}
              price={product.pris}
              category={product.kategori}
              quantity={product.antallIHandelkurv}
              product={product}
              addOne={onAdd}
              removeOne={onRemove}
              deleteAll={onClose}
            />
          ))}
        </div>
      )}
    </>
  )
}
