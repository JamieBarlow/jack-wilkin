"use client"
import React from "react";
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";

type FormFields = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    comments: string
}

const ContactForm = () => {
    const form = useForm<FormFields>();
    return (
        <Form>
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Form>
    )
}

export default ContactForm;