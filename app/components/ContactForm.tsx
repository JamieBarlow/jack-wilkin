"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
}

const nameField = z
  .string()
  .min(2, "Must be at least 2 characters.")
  .max(50, "Cannot be greater than 50 characters.");

const formSchema = z.object({
  firstName: nameField,
  lastName: nameField,
  email: z.email("Please enter a valid email"),
  phone: z.string().optional(),
  commsPrefs: z.string().max(500, "Message too long.").optional(),
  message: z
    .string()
    .min(10, "Message too short.")
    .max(1000, "Message too long."),
});

export type FormFields = z.infer<typeof formSchema>;
const RequiredField = () => (
  <span className="text-red-500 font-noto-sans text-sm">*</span>
);

const ContactForm = ({ className }: ContactFormProps) => {
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      commsPrefs: "",
      message: "",
    },
  });
  const { handleSubmit, setError, formState } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<FormFields> = async (
    data,
    _e
  ): Promise<void> => {
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(data);
      if (!res.ok) {
        throw new Error("Server error");
      }
      toast("Form submitted successfully");
      form.reset();
    } catch (_error) {
      setError("root", {
        message: "Error submitting form - please refresh and try again.",
      });
      toast("Something went wrong. Please refresh and try again.");
    }
  };

  return (
    <div className={`box-gradient-bg-right py-5 pr-5 ${className}`}>
      <div className="card card-lg bg-sea-nymph-50 shadow-sm rounded-none p-8">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 text-placeholder"
          >
            <div
              id="name-fields"
              className="flex flex-row items-start flex-wrap gap-8 mb-8"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First Name <RequiredField />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        className="bg-base-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Last Name <RequiredField />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        className="bg-base-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <RequiredField />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="bg-base-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      className="bg-base-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Message <RequiredField />
                  </FormLabel>
                  <FormDescription>
                    Please let me know you reason for getting in touch:
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="bg-base-100 resize-none h-40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commsPrefs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Communications preferences</FormLabel>
                  <FormDescription>
                    Please provide details of any communication preferences or
                    reasonable adjustments:
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder="Details here"
                      className="bg-base-100 resize-none h-20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormDescription className="mb-6">
              I aim to reply to all enquiries within 48 hours.
            </FormDescription>
            <Button
              type="submit"
              className="text-md text-base-100 hover:cursor-pointer my-4"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
