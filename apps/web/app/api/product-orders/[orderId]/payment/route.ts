import { NextResponse, type NextRequest } from "next/server";

import {
  ProductOrderConfigurationError,
  submitProductPayment,
} from "../../../../../features/product/server/orders";
import { submitProductPaymentSchema } from "../../../../../features/product/schema";

type RouteContext = {
  params: Promise<{ orderId: string }>;
};

export async function POST(request: NextRequest, { params }: RouteContext) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON request body" },
      { status: 400 },
    );
  }

  const parsed = submitProductPaymentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Enter a valid UPI transaction reference." },
      { status: 400 },
    );
  }

  const { orderId } = await params;
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      orderId,
    )
  ) {
    return NextResponse.json({ message: "Order not found." }, { status: 404 });
  }

  try {
    const { data, error } = await submitProductPayment(
      orderId,
      parsed.data.accessToken,
      parsed.data.paymentReference,
    );

    if (error?.code === "23505") {
      return NextResponse.json(
        { message: "That UPI reference has already been submitted." },
        { status: 409 },
      );
    }

    if (error) {
      throw error;
    }

    if (!data) {
      return NextResponse.json(
        { message: "This order is already submitted or could not be found." },
        { status: 409 },
      );
    }

    return NextResponse.json({ message: "Payment submitted for review." });
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

    console.error("Product payment submission failed:", error);
    return NextResponse.json(
      {
        message: "We could not submit your payment details. Please try again.",
      },
      { status: 500 },
    );
  }
}
