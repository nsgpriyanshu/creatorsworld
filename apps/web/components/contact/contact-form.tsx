"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Send,
  User2,
  Mail,
  Phone,
  MessageSquare,
  CirclePlus,
  Globe,
} from "lucide-react";

import {
  contactSchema,
  ContactFormValues,
} from "../../lib/validations/contact";

import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

const ContactFormSkeleton = () => {
  return (
    <div className="w-full rounded-md border border-border overflow-hidden">
      <div className="border-b border-dashed border-border px-6 py-4 space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-28 w-full rounded-md" />
        </div>

        <div className="border-t border-dashed border-border pt-4 flex gap-3">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      country: "",
      companySize: "",
    },
  });

  const messageValue = watch("message");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper className="w-full pb-24 overflow-x-hidden">
      <AnimationContainer animation="fadeUp" delay={0.45}>
        {isSubmitting ? (
          <ContactFormSkeleton />
        ) : (
          <div className="w-full rounded-md border border-border overflow-hidden">
            {/* Header */}
            <div className="border-b border-dashed border-border px-6 py-4">
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                Send us a message
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Fill out the form below and we&apos;ll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-6 py-6 space-y-6"
            >
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <User2 className="h-4 w-4 text-muted-foreground" />
                    First Name
                  </label>

                  <Input
                    id="firstName"
                    {...register("firstName")}
                    placeholder="Prakriti"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                  />

                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="text-xs text-destructive"
                    >
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <User2 className="h-4 w-4 text-muted-foreground" />
                    Last Name
                  </label>

                  <Input
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Lisaa"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                  />

                  {errors.lastName && (
                    <p id="lastName-error" className="text-xs text-destructive">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email
                </label>

                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="prakritilisaa@cw.com.com"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />

                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Phone
                </label>

                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+91 1234567890"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />

                {errors.phone && (
                  <p id="phone-error" className="text-xs text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Country */}
              <div className="space-y-1.5">
                <label
                  htmlFor="country"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  Country
                </label>

                <Input
                  id="country"
                  {...register("country")}
                  placeholder="India"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.country}
                  aria-describedby={
                    errors.country ? "country-error" : undefined
                  }
                />

                {errors.country && (
                  <p id="country-error" className="text-xs text-destructive">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label
                  htmlFor="companySize"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  Company Size
                </label>

                <Input
                  id="companySize"
                  {...register("companySize")}
                  placeholder="1-10 employees"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.companySize}
                  aria-describedby={
                    errors.companySize ? "companySize-error" : undefined
                  }
                />

                {errors.companySize && (
                  <p
                    id="companySize-error"
                    className="text-xs text-destructive"
                  >
                    {errors.companySize.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Message
                  </label>

                  <span className="text-xs text-muted-foreground">
                    {messageValue?.length || 0}/5000
                  </span>
                </div>

                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />

                {errors.message && (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="border-t border-dashed border-border pt-4 flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                  className="flex-1 gap-2 rounded-md"
                >
                  <CirclePlus className="h-4 w-4 rotate-45" />
                  Clear
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 gap-2 rounded-md"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </AnimationContainer>
    </Wrapper>
  );
}
