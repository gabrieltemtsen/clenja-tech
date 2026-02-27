"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

const projectRequestSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(20, "Please provide more details (at least 20 chars)"),
    budget: z.string().optional(),
    timeline: z.string().optional(),
});

export async function createProjectRequest(formData: FormData) {
    const session = await getServerSession(authOptions);

    // @ts-ignore
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const rawData = {
            title: formData.get("title"),
            description: formData.get("description"),
            budget: formData.get("budget"),
            timeline: formData.get("timeline"),
        };

        const validatedData = projectRequestSchema.parse(rawData);

        await prisma.projectRequest.create({
            data: {
                // @ts-ignore
                userId: session.user.id,
                title: validatedData.title,
                description: validatedData.description,
                budget: validatedData.budget || null,
                timeline: validatedData.timeline || null,
            },
        });

        revalidatePath("/portal");

        return {
            success: true,
            message: "Project request submitted successfully. An engineer will be assigned shortly."
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Failed to create project request:", error);
        return { success: false, error: "Something went wrong. Please try again." };
    }
}
