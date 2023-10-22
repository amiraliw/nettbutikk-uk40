import { NextRequest, NextResponse } from "next/server"

import { getProducts, Product } from "@/features/types/productType"

let produkter: Product[] = []

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  let ret: Product[] = []
  if (produkter.length > 0) {
    ret = [...produkter, ...getProducts()]
  } else ret = getProducts()
  return NextResponse.json(ret, { status: 200 })
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.text()
    const newProduct = JSON.parse(requestBody) as Product
    produkter.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error processing the request:", error)
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 },
    )
  }
}
