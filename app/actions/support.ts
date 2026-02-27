"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

const supportTicketSchema = z.object({
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    description: z.string().min(10, "Please provide more details"),
    category: z.enum(["GENERAL", "BUG", "BILLING"]),
    priority: z.enum(["LOW", "NORMAL", "HIGH", "URGENT"]),
});

export async function createSupportTicket(formData: FormData) {
    const session = await getServerSession(authOptions);

    // @ts-ignore
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const rawData = {
            subject: formData.get("subject"),
            description: formData.get("description"),
            category: formData.get("category"),
            priority: formData.get("priority"),
        };

        const validatedData = supportTicketSchema.parse(rawData);

        await prisma.supportTicket.create({
            data: {
                // @ts-ignore
                userId: session.user.id,
                subject: validatedData.subject,
                description: validatedData.description,
                category: validatedData.category,
                priority: validatedData.priority,
            },
        });

        revalidatePath("/portal/support");
        revalidatePath("/portal");

        return {
            success: true,
            message: "Support ticket created successfully. Our team will review it shortly."
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Failed to create support ticket:", error);
        return { success: false, error: "Something went wrong. Please try again." };
    }
}
