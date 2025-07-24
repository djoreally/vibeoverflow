// RecommendContentBasedOnUserPreferences story implementation.

'use server';

/**
 * @fileOverview AI tool to recommend relevant blog content to the reader based on the AI tools they are using and their use-cases, learning from community feedback.
 *
 * - recommendContent - A function that recommends blog content.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  aiTools: z
    .array(z.string())
    .describe('A list of AI tools the user is currently using.'),
  useCases: z
    .array(z.string())
    .describe('A list of use cases the user is interested in.'),
  communityFeedback: z
    .string()
    .optional()
    .describe('Community feedback on previous recommendations.'),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendedContent: z
    .array(z.string())
    .describe('A list of recommended blog content URLs.'),
  reasoning: z
    .string()
    .describe('The AI reasoning for recommending the content.'),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const recommendContentPrompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are an AI assistant designed to recommend relevant blog content to users based on their AI tool usage and use cases.

  Based on the AI tools the user is using:
  {{#each aiTools}}- {{this}}\n{{/each}}

  And their use cases:
  {{#each useCases}}- {{this}}\n{{/each}}

  Recommend a list of blog content URLs that would be most helpful to the user.

  Community feedback: {{communityFeedback}}

  Include a brief reasoning for each recommendation.

  Return the recommendations in a JSON format.
  `, // Updated prompt
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await recommendContentPrompt(input);
    return output!;
  }
);
