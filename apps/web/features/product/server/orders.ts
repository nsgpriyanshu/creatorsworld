import { createHash, randomBytes } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

import { products } from "../data/products";

export class ProductOrderConfigurationError extends Error {
  constructor() {
    super("Product order storage is not configured");
    this.name = "ProductOrderConfigurationError";
  }
}

export function createProductOrdersClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new ProductOrderConfigurationError();
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function hashOrderAccessToken(accessToken: string) {
  return createHash("sha256").update(accessToken).digest("hex");
}

export async function createProductOrder(productSlug: string, email: string) {
  const product = products[productSlug];
  if (!product) {
    throw new Error("Unknown product");
  }

  const accessToken = randomBytes(32).toString("base64url");
  const supabase = createProductOrdersClient();
  const { data, error } = await supabase
    .from("product_orders")
    .insert({
      product_slug: product.slug,
      product_title: `${product.title} ${product.highlight ?? ""}`.trim(),
      amount_inr: product.price,
      customer_email: email,
      access_token_hash: hashOrderAccessToken(accessToken),
      status: "awaiting_payment",
    })
    .select("id")
    .single();

  if (error) {
    throw error;
  }

  return {
    id: data.id,
    amount: product.price,
    accessToken,
  };
}

export async function submitProductPayment(
  orderId: string,
  accessToken: string,
  paymentReference: string,
) {
  const supabase = createProductOrdersClient();
  const { data, error } = await supabase
    .from("product_orders")
    .update({
      payment_reference: paymentReference,
      status: "pending_review",
    })
    .eq("id", orderId)
    .eq("access_token_hash", hashOrderAccessToken(accessToken))
    .eq("status", "awaiting_payment")
    .select("id")
    .maybeSingle();

  return { data, error };
}
