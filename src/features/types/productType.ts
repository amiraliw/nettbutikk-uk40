export type Product = {
  id: string
  title: string
  beskrivelse: string
  kategori: string
  pris: string
  antallIHandelkurv: number
}

export function getProducts(): Product[] {
  const products: Product[] = [
    {
      id: "1",
      title: "Product 1",
      beskrivelse: "Description of Product 1",
      kategori: "Category 1",
      pris: "19.99",
      antallIHandelkurv: 0,
    },
    {
      id: "2",
      title: "Product 2",
      beskrivelse: "Description of Product 2",
      kategori: "Category 2",
      pris: "29.99",
      antallIHandelkurv: 0,
    },
    {
      id: "3",
      title: "Product 3",
      beskrivelse: "Description of Product 3",
      kategori: "Category 3",
      pris: "29.99",
      antallIHandelkurv: 0,
    },
    {
      id: "4",
      title: "Product 4",
      beskrivelse: "Description of Product 4",
      kategori: "Category 4",
      pris: "29.99",
      antallIHandelkurv: 0,
    },
    {
      id: "5",
      title: "Product 5",
      beskrivelse: "Description of Product 5",
      kategori: "Category 5",
      pris: "29.99",
      antallIHandelkurv: 0,
    },
    {
      id: "6",
      title: "Product 6",
      beskrivelse: "Description of Product 6",
      kategori: "Category 6",
      pris: "29.99",
      antallIHandelkurv: 0,
    },
  ]

  return products
}
