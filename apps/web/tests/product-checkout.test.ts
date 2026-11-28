import { describe, expect, it } from "vitest";

import {
  createProductOrderSchema,
  submitProductPaymentSchema,
} from "../features/product/schema";

describe("product checkout validation", () => {
  it("accepts a valid email and trims the checkout input", () => {
    expect(
      createProductOrderSchema.parse({
        productSlug: " emo-pack ",
        email: " buyer@example.com ",
      }),
    ).toEqual({
      productSlug: "emo-pack",
      email: "buyer@example.com",
    });
  });

  it("rejects malformed emails", () => {
    expect(
      createProductOrderSchema.safeParse({
        productSlug: "emo-pack",
        email: "not-an-email",
      }).success,
    ).toBe(false);
  });

  it("accepts a valid UPI reference and rejects malformed references", () => {
    expect(
      submitProductPaymentSchema.parse({
        accessToken: "a".repeat(32),
        paymentReference: "  123456789012  ",
      }).paymentReference,
    ).toBe("123456789012");

    expect(
      submitProductPaymentSchema.safeParse({
        accessToken: "a".repeat(32),
        paymentReference: "not valid!",
      }).success,
    ).toBe(false);
  });
});
