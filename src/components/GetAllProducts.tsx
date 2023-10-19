import React, { useEffect, useState } from "react"

import { Product } from "@/features/types/productType"
import styles from "../styles/Product.module.css"
import ProductComponent from "./ProductComponent"

const GetAllProducts = ({
  addToCart,
}: {
  addToCart: (product: Product) => void
}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/products")
        if (response.ok) {
          const data: Product[] = (await response.json()) as Product[]
          setProducts(data)
        } else {
          console.error("Failed to fetch data from the API")
        }
      } catch (error) {
        console.error("Error while fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductComponent
          key={product.id}
          title={product.title}
          description={product.beskrivelse}
          price={parseFloat(product.pris)}
          category={product.kategori}
          addToCart={addToCart}
          product={product}
        />
      ))}
    </div>
  )
}

export default GetAllProducts
