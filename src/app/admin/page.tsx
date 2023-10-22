"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import styles from "../../styles/AddNewProduct.module.css"

const AddNewProductPage: React.FC = () => {
  const router = useRouter()

  const initData = {
    id: "",
    title: "",
    beskrivelse: "",
    kategori: "",
    pris: "",
    antallIHandelkurv: 0,
  }
  const [formData, setFormData] = useState(initData)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const newProduct = {
      ...formData,
      antallIHandelkurv: 0,
    }

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })

      if (response.status === 201) {
        console.log("Product added successfully:", newProduct)
        setFormData(initData)
        backToHome()
      } else {
        console.error("Error adding product:", response.status, response)
      }
    } catch (error) {
      console.error("Error adding product:", error)
    }
  }

  const backToHome = () => {
    router.push("/")
  }

  return (
    <div className={styles.formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ID:</label>
          <input
            className={styles.input}
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Title:</label>
          <input
            className={styles.input}
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Beskrivelse:</label>
          <input
            className={styles.input}
            type="text"
            id="beskrivelse"
            name="beskrivelse"
            value={formData.beskrivelse}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Kategori:</label>
          <input
            className={styles.input}
            type="text"
            id="kategori"
            name="kategori"
            value={formData.kategori}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Pris:</label>
          <input
            className={styles.input}
            type="number"
            id="pris"
            name="pris"
            value={formData.pris}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
        <button className={styles.button} type="button" onClick={backToHome}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddNewProductPage
