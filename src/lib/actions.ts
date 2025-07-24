'use server';

import { recommendContent, RecommendContentInput, RecommendContentOutput } from "@/ai/flows/recommend-content";
import { z } from "zod";

const FormSchema = z.object({
  aiTools: z.string().min(1, 'Please enter at least one AI tool.'),
  useCases: z.string().min(1, 'Please enter at least one use case.'),
  communityFeedback: z.string().optional(),
});

export type FormState = {
    message: string;
    recommendations?: RecommendContentOutput;
    errors?: {
        aiTools?: string[];
        useCases?: string[];
        communityFeedback?: string[];
    }
}

export async function getRecommendations(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = FormSchema.safeParse({
        aiTools: formData.get('aiTools'),
        useCases: formData.get('useCases'),
        communityFeedback: formData.get('communityFeedback'),
    });

    if (!validatedFields.success) {
        return {
            message: "Validation failed. Please check your input.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { aiTools, useCases, communityFeedback } = validatedFields.data;

    const input: RecommendContentInput = {
        aiTools: aiTools.split(',').map(tool => tool.trim()).filter(Boolean),
        useCases: useCases.split(',').map(useCase => useCase.trim()).filter(Boolean),
        communityFeedback: communityFeedback,
    };

    try {
        const recommendations = await recommendContent(input);
        return {
            message: "Success!",
            recommendations
        };
    } catch (error) {
        console.error(error);
        return {
            message: "An error occurred while fetching recommendations. Please try again."
        }
    }
}
