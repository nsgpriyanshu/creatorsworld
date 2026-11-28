import { NextResponse, type NextRequest } from "next/server";

import { products } from "../../../features/product/data/products";
import { createProductOrderSchema } from "../../../features/product/schema";
import {
  createProductOrder,
  ProductOrderConfigurationError,
} from "../../../features/product/server/orders";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON request body" },
      { status: 400 },
    );
  }

  const parsed = createProductOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Enter a valid email address and product." },
      { status: 400 },
    );
  }

  if (!products[parsed.data.productSlug]) {
    return NextResponse.json(
      { message: "Product not found." },
      { status: 404 },
    );
  }

  try {
    const order = await createProductOrder(
      parsed.data.productSlug,
      parsed.data.email,
    );
    return NextResponse.json(order, {
      status: 201,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (error instanceof ProductOrderConfigurationError) {
      console.error("Product order storage is not configured.");
      return NextResponse.json(
        {
          message:
            "Checkout is temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      );
    }

    console.error("Product order creation failed:", error);
    return NextResponse.json(
      { message: "We could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
