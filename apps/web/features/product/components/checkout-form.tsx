"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CircleHelp,
  CreditCard,
  LockKeyhole,
  Package2,
  ShieldCheck,
} from "lucide-react";

import AnimationContainer from "../../../components/global/animation-container";
import Wrapper from "../../../components/global/wrapper";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import type { Product } from "../data/products";

type CreatedOrder = {
  id: string;
  amount: number;
  accessToken: string;
};

type CheckoutFormProps = {
  product: Product;
};

const QR_IMAGE = "/payments/gpay-qr.png";

function isCreatedOrder(
  value: unknown,
  expectedAmount: number,
): value is CreatedOrder {
  if (!value || typeof value !== "object") {
    return false;
  }

  const order = value as Record<string, unknown>;
  return (
    typeof order.id === "string" &&
    order.amount === expectedAmount &&
    typeof order.accessToken === "string"
  );
}

async function getResponseMessage(response: Response, fallback: string) {
  try {
    const body: unknown = await response.json();
    if (
      body &&
      typeof body === "object" &&
      "message" in body &&
      typeof body.message === "string"
    ) {
      return body.message;
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export default function CheckoutForm({ product }: CheckoutFormProps) {
  const storageKey = `product-order:${product.slug}`;
  const [email, setEmail] = React.useState("");
  const [order, setOrder] = React.useState<CreatedOrder | null>(null);
  const [paymentReference, setPaymentReference] = React.useState("");
  const [isStarting, setIsStarting] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [qrLoaded, setQrLoaded] = React.useState(false);
  const [qrUnavailable, setQrUnavailable] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    try {
      const savedOrder = window.sessionStorage.getItem(storageKey);
      if (savedOrder) {
        const parsed: unknown = JSON.parse(savedOrder);
        if (isCreatedOrder(parsed, product.price)) {
          setOrder(parsed);
        } else {
          window.sessionStorage.removeItem(storageKey);
        }
      }
    } catch (error) {
      console.error("Could not restore the pending product order:", error);
    }
  }, [storageKey]);

  React.useEffect(() => {
    const qrPreloader = new window.Image();
    qrPreloader.onload = () => setQrLoaded(true);
    qrPreloader.onerror = () => setQrUnavailable(true);
    qrPreloader.src = QR_IMAGE;

    return () => {
      qrPreloader.onload = null;
      qrPreloader.onerror = null;
    };
  }, []);

  const startCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsStarting(true);

    try {
      const response = await fetch("/api/product-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: product.slug, email }),
      });

      if (!response.ok) {
        throw new Error(
          await getResponseMessage(response, "Could not start checkout."),
        );
      }

      const responseBody: unknown = await response.json();
      if (!isCreatedOrder(responseBody, product.price)) {
        throw new Error("The checkout response was invalid. Please try again.");
      }

      setOrder(responseBody);
      try {
        window.sessionStorage.setItem(storageKey, JSON.stringify(responseBody));
      } catch (error) {
        console.error("Could not save the pending product order:", error);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not start checkout. Please try again.",
      );
    } finally {
      setIsStarting(false);
    }
  };

  const submitPayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!order) {
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/product-orders/${encodeURIComponent(order.id)}/payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accessToken: order.accessToken,
            paymentReference,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(
          await getResponseMessage(
            response,
            "Could not submit payment details.",
          ),
        );
      }

      setSubmitted(true);
      try {
        window.sessionStorage.removeItem(storageKey);
      } catch (error) {
        console.error("Could not clear the completed product order:", error);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not submit payment details. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper className="relative overflow-x-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href={`/product/${product.slug}`}
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to product
        </Link>

        <AnimationContainer animation="fadeUp">
          <section className="overflow-hidden rounded-md border border-border">
            <header className="border-b border-dashed border-border">
              <div className="flex justify-center border-b border-dashed border-border p-4">
                <Badge
                  variant="outline"
                  className="border-border bg-background/70 px-4 py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <Package2
                      aria-hidden="true"
                      className="size-4 text-muted-foreground"
                    />
                    Checkout
                  </span>
                </Badge>
              </div>
              <div className="px-6 py-8 text-center md:px-10 md:py-10">
                <p className="text-sm font-medium text-muted-foreground">
                  Google Pay · UPI
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                  Complete your order
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Review the amount, pay using the QR code, then submit your
                  transaction reference for manual verification.
                </p>
              </div>
            </header>

            <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
              <div className="min-w-0">
                <div className="grid grid-cols-3 border-b border-dashed border-border">
                  {[
                    { number: "01", label: "Your details" },
                    { number: "02", label: "Pay with UPI" },
                    { number: "03", label: "We verify" },
                  ].map((step, index) => (
                    <div
                      key={step.number}
                      className={`px-3 py-4 text-center sm:px-5 ${
                        index > 0 ? "border-l border-dashed border-border" : ""
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-muted-foreground">
                        {step.number}
                      </span>
                      <span className="mt-1 block text-xs font-medium sm:text-sm">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 p-5 sm:p-8">
                  {submitted ? (
                    <div
                      className="rounded-md border border-border bg-muted/20 p-5 sm:p-6"
                      role="status"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-foreground"
                        />
                        <div>
                          <h2 className="text-lg font-semibold">
                            Reference received
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            Your order is waiting for manual payment
                            verification and is not marked as paid yet. Once we
                            verify the payment, we&apos;ll send a confirmation
                            email to the address you provided.
                          </p>
                        </div>
                      </div>
                      {order && (
                        <div className="mt-5 border-t border-dashed border-border pt-4">
                          <p className="text-xs text-muted-foreground">
                            Keep this order ID for support
                          </p>
                          <p className="mt-1 break-all font-mono text-xs">
                            {order.id}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      {!order ? (
                        <form onSubmit={startCheckout} className="space-y-4">
                          <div>
                            <h2 className="text-lg font-semibold">
                              Start your order
                            </h2>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              Enter your email to create an order ID. Please
                              wait for the ID before sending payment.
                            </p>
                          </div>
                          <div>
                            <label
                              htmlFor="checkout-email"
                              className="text-sm font-medium"
                            >
                              Email address
                            </label>
                            <input
                              id="checkout-email"
                              type="email"
                              name="email"
                              autoComplete="email"
                              required
                              maxLength={254}
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                              placeholder="you@example.com"
                            />
                            <p className="mt-2 text-xs text-muted-foreground">
                              We&apos;ll use this only to follow up about this
                              order.
                            </p>
                          </div>
                          <Button
                            type="submit"
                            disabled={isStarting || !qrLoaded || qrUnavailable}
                            className="w-full sm:w-auto"
                          >
                            {isStarting
                              ? "Creating your order..."
                              : "Create order"}
                            {!isStarting && (
                              <ArrowRight
                                aria-hidden="true"
                                className="ml-2 size-4"
                              />
                            )}
                          </Button>
                          {!qrLoaded && !qrUnavailable && (
                            <p
                              className="text-xs text-muted-foreground"
                              role="status"
                            >
                              Loading payment details...
                            </p>
                          )}
                          {qrUnavailable && (
                            <p
                              className="text-sm text-destructive"
                              role="alert"
                            >
                              Payment details are unavailable right now. Please
                              contact support before proceeding.
                            </p>
                          )}
                        </form>
                      ) : (
                        <>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <h2 className="text-lg font-semibold">
                                Pay with Google Pay
                              </h2>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Scan the QR code and pay the exact total shown.
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className="gap-1.5 border-border bg-background/70"
                            >
                              <span
                                aria-hidden="true"
                                className="size-1.5 rounded-full bg-muted-foreground"
                              />
                              Awaiting payment
                            </Badge>
                          </div>

                          <div className="grid gap-5 rounded-md border border-border bg-muted/20 p-4 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center sm:p-5">
                            <ol className="space-y-3 text-sm leading-relaxed">
                              <li className="flex gap-3">
                                <span className="font-mono text-xs text-muted-foreground">
                                  1
                                </span>
                                Scan this code in Google Pay.
                              </li>
                              <li className="flex gap-3">
                                <span className="font-mono text-xs text-muted-foreground">
                                  2
                                </span>
                                Pay exactly <strong>Rs. {order.amount}</strong>.
                              </li>
                              <li className="flex gap-3">
                                <span className="font-mono text-xs text-muted-foreground">
                                  3
                                </span>
                                Copy the UPI transaction reference from the
                                receipt.
                              </li>
                            </ol>

                            <div className="mx-auto flex aspect-square w-full max-w-48 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-2">
                              {!qrUnavailable ? (
                                <Image
                                  src={QR_IMAGE}
                                  alt="Google Pay UPI payment QR code"
                                  width={320}
                                  height={320}
                                  priority
                                  unoptimized
                                  className="h-full w-full object-contain"
                                  onLoad={() => setQrLoaded(true)}
                                  onError={() => {
                                    setQrLoaded(false);
                                    setQrUnavailable(true);
                                  }}
                                />
                              ) : (
                                <p className="px-2 text-center text-xs text-muted-foreground">
                                  The payment QR is temporarily unavailable.
                                  Please contact us before paying.
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="rounded-md border border-dashed border-border p-4">
                            <p className="text-xs font-medium text-muted-foreground">
                              Order ID
                            </p>
                            <p className="mt-1 break-all font-mono text-xs">
                              {order.id}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                              Add this as the payment note if Google Pay offers
                              that field.
                            </p>
                          </div>

                          <form
                            onSubmit={submitPayment}
                            className="space-y-4 border-t border-dashed border-border pt-5"
                          >
                            <div>
                              <label
                                htmlFor="payment-reference"
                                className="text-sm font-medium"
                              >
                                UPI transaction reference
                              </label>
                              <input
                                id="payment-reference"
                                type="text"
                                name="paymentReference"
                                required
                                minLength={6}
                                maxLength={64}
                                pattern="[A-Za-z0-9-]{6,64}"
                                autoCapitalize="characters"
                                spellCheck={false}
                                value={paymentReference}
                                onChange={(event) =>
                                  setPaymentReference(event.target.value)
                                }
                                className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                                placeholder="Enter the reference from your receipt"
                              />
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              Sending this reference does not confirm payment.
                              We check the transaction manually before marking
                              your order as paid.
                            </p>
                            <Button
                              type="submit"
                              disabled={isSubmitting || !qrLoaded}
                              className="w-full sm:w-auto"
                            >
                              {isSubmitting
                                ? "Sending reference..."
                                : "Submit payment reference"}
                            </Button>
                          </form>
                        </>
                      )}
                    </>
                  )}

                  {errorMessage && (
                    <p className="text-sm text-destructive" role="alert">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </div>

              <aside className="border-t border-dashed border-border bg-muted/10 p-5 sm:p-8 lg:border-l lg:border-t-0">
                <div className="flex items-center gap-2">
                  <Package2
                    aria-hidden="true"
                    className="size-4 text-muted-foreground"
                  />
                  <h2 className="text-sm font-semibold">Order summary</h2>
                </div>

                <div className="mt-5 border-y border-dashed border-border py-5">
                  <p className="text-base font-medium">
                    {product.title} {product.highlight ?? ""}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 py-5">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="text-xl font-semibold tracking-tight">
                    Rs. {order?.amount ?? product.price}
                  </span>
                </div>
                <p className="border-b border-dashed border-border pb-5 text-xs text-muted-foreground">
                  No card details are requested on this page.
                </p>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <LockKeyhole
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Enter your UPI PIN only inside Google Pay. We will never
                      ask for your PIN, OTP, or card information.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Check the recipient shown in Google Pay before approving.
                      If anything looks unfamiliar, cancel and contact us.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      UPI only. Card payments are not available.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-border p-4">
                  <div className="flex items-center gap-2">
                    <CircleHelp
                      aria-hidden="true"
                      className="size-4 text-muted-foreground"
                    />
                    <p className="text-sm font-medium">Need help?</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Contact us on Discord before paying if you have any
                    questions. Keep your order ID handy.
                  </p>
                  <Link
                    href={product.discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground"
                  >
                    Contact support
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </div>
              </aside>
            </div>

            <footer className="border-t border-dashed border-border px-5 py-4 text-center text-xs leading-relaxed text-muted-foreground sm:px-8">
              Payment is verified manually. Submitting a transaction reference
              does not mark an order as paid.
            </footer>
          </section>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
}
