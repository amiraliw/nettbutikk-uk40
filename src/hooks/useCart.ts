import { useState } from "react"

import { Product } from "@/features/types/productType"

function useCart() {
  const [handelkurvsProducts, setProductToHandelKurv] = useState<Product[]>([])

  const leggIHandelkurv = (product: Product) => {
    const existingProductIndex = handelkurvsProducts.findIndex(
      (p) => p.id === product.id,
    )

    if (existingProductIndex !== -1) {
      const updatedProducts = [...handelkurvsProducts]
      updatedProducts[existingProductIndex].antallIHandelkurv++
      setProductToHandelKurv(updatedProducts)
    } else {
      product.antallIHandelkurv++
      setProductToHandelKurv((prevProducts) => [...prevProducts, product])
    }
  }

  const onAdd = (product: Product) => {
    setProductToHandelKurv((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            antallIHandelkurv: p.antallIHandelkurv + 1,
          }
        }
        return p
      }),
    )
  }

  const onRemove = (product: Product) => {
    setProductToHandelKurv((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === product.id) {
          if (p.antallIHandelkurv === 1) {
            removeAll(product)
            return p
          } else {
            return {
              ...p,
              antallIHandelkurv: p.antallIHandelkurv - 1,
            }
          }
        }
        return p
      }),
    )
  }

  const removeAll = (product: Product) => {
    product.antallIHandelkurv = 0
    const updatedProductList = handelkurvsProducts.filter((p) => p !== product)
    setProductToHandelKurv(updatedProductList)
  }

  return {
    handelkurvsProducts,
    onAdd,
    onRemove,
    removeAll,
    leggIHandelkurv,
  }
}

export default useCart
