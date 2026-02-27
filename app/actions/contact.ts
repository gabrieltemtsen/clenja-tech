"use server";

import { z } from "zod";
import { ConvexHttpClient } from "convex/browser";
import { revalidatePath } from "next/cache";

// @ts-ignore
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL || "http://127.0.0.1:3210");

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            budget: formData.get("budget") as string,
            message: formData.get("message") as string,
        };

        const validatedData = contactSchema.parse(rawData);

        // @ts-ignore
        await convex.mutation(api.leads.createLead, {
            name: validatedData.name,
            email: validatedData.email,
            company: validatedData.company,
            budget: validatedData.budget,
            message: validatedData.message,
        });

        revalidatePath("/admin");

        return { success: true, message: "Thank you! We have received your message and will reach out shortly." };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Failed to submit contact form:", error);
        return { success: false, error: "Something went wrong. Please try again later." };
    }
}
