import { z } from "zod";

export const createProductOrderSchema = z.object({
  productSlug: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
});

export const submitProductPaymentSchema = z.object({
  accessToken: z.string().min(32).max(128),
  paymentReference: z
    .string()
    .trim()
    .regex(/^[A-Za-z0-9-]{6,64}$/, "Enter a valid UPI transaction reference")
    .transform((value) => value.toUpperCase()),
});
