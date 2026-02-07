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
import { Card, CardContent } from "@repo/ui/components/ui/card";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

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
    <Wrapper className="relative w-full pb-24 overflow-x-hidden">
      <div className="flex justify-center w-full">
        <AnimationContainer animation="fadeUp">
          <Card className="max-w-2xl lg:w-2xl rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md">
            {/* Content */}
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User2 className="h-4 w-4 text-muted-foreground" />
                      First Name
                    </label>
                    <Input
                      {...register("firstName")}
                      placeholder="Prakriti"
                      disabled={isSubmitting}
                      className="h-9 rounded-md"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-destructive">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User2 className="h-4 w-4 text-muted-foreground" />
                      Last Name
                    </label>
                    <Input
                      {...register("lastName")}
                      placeholder="Lisa"
                      disabled={isSubmitting}
                      className="h-9 rounded-md"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-destructive">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="prakriti@cw.com"
                    disabled={isSubmitting}
                    className="h-9 rounded-md"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Phone (Optional)
                  </label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 12345 67890"
                    disabled={isSubmitting}
                    className="h-9 rounded-md"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    Country
                  </label>
                  <Input
                    {...register("country")}
                    type="text"
                    placeholder="India"
                    disabled={isSubmitting}
                    className="h-9 rounded-md"
                  />
                  {errors.country && (
                    <p className="text-xs text-destructive">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                {/* Company Size */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    Company Size
                  </label>
                  <Input
                    {...register("companySize")}
                    type="text"
                    placeholder="1-10 employees"
                    disabled={isSubmitting}
                    className="h-9 rounded-md"
                  />
                  {errors.companySize && (
                    <p className="text-xs text-destructive">
                      {errors.companySize.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      Message
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {messageValue?.length || 0}/5000
                    </span>
                  </div>

                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your inquiry..."
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full resize-none rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />

                  {errors.message && (
                    <p className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => reset()}
                    disabled={isSubmitting}
                    className="h-9 flex-1"
                  >
                    <CirclePlus className="h-4 w-4 rotate-45" />
                    Clear
                  </Button>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-9 flex-1 gap-2"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
}
