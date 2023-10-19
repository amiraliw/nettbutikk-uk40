import { NextRequest, NextResponse } from "next/server"

import { getProducts } from "@/features/types/productType"

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  return NextResponse.json(getProducts(), { status: 200 })
}
