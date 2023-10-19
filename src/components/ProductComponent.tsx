import React from "react"

import { Product } from "@/features/types/productType"
import styles from "../styles/Product.module.css"

export type ProductProps = {
  title: string
  description: string
  price: number
  category: string
  addToCart: (product: Product) => void
  product: Product
}

const ProductComponent: React.FC<ProductProps> = ({
  title,
  description,
  price,
  category,
  addToCart,
  product,
}) => {
  function addToCartHandler() {
    addToCart(product)
  }

  return (
    <div className={styles.product}>
      <div className={styles.category}>{category}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description} id="description">
        {description}
      </p>
      <p className={styles.price} id="price">
        Pris: {price} kr
      </p>
      <button
        className={styles.addToCart}
        id="addToCart"
        onClick={addToCartHandler}
      >
        Legg til Handelkurv
      </button>
    </div>
  )
}

export default ProductComponent
