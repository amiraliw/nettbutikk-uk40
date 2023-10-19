import { Product } from "@/features/types/productType"
import styles from "../styles/Handelkurv.module.css"

export type ProductProps = {
  description: string
  price: string
  category: string
  quantity: number
  product: Product
  addOne: (product: Product) => void
  removeOne: (product: Product) => void
  deleteAll: (product: Product) => void
}

const HandelkurvItem: React.FC<ProductProps> = ({
  description,
  price,
  category,
  quantity,
  product,
  addOne,
  removeOne,
  deleteAll,
}) => {
  const quantityHandler = () => {}

  const addOneHandler = () => {
    addOne(product)
  }

  const removeOneHandler = () => {
    removeOne(product)
  }

  const deleteAllHandler = () => {
    deleteAll(product)
  }

  return (
    <div className={styles.handelkurvItem}>
      <button className={styles.addOne} id="addOne" onClick={addOneHandler}>
        +
      </button>
      <button
        className={styles.deleteOne}
        id="deleteOne"
        onClick={removeOneHandler}
      >
        -
      </button>
      <input
        className={styles.quantity}
        id="quantity"
        value={quantity}
        onChange={quantityHandler}
      />
      <p className={styles.productsTitle}>{description}</p>
      <button
        className={styles.deleteAll}
        id="deleteAll"
        onClick={deleteAllHandler}
      >
        x
      </button>
    </div>
  )
}

export default HandelkurvItem
