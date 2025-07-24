'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendations } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Bot, Link as LinkIcon, Loader2, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function RecommendationsClient() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(getRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== "Success!") {
        if(state.errors?.aiTools || state.errors?.useCases) {
            // Field errors are displayed next to the fields
            return;
        }
        
        toast({
            variant: "destructive",
            title: "Error",
            description: state.message,
        });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Card className="border-accent shadow-lg shadow-accent/10">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Tell us about you</CardTitle>
          <CardDescription>
            List the tools you use and what you want to achieve. Use commas to separate items.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="aiTools">AI Tools You Use</Label>
              <Input
                id="aiTools"
                name="aiTools"
                placeholder="e.g., GitHub Copilot, Tabnine, Replit Ghostwriter"
                required
              />
              {state.errors?.aiTools && (
                <p className="text-sm font-medium text-destructive">{state.errors.aiTools[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="useCases">Your Use Cases / Interests</Label>
              <Input
                id="useCases"
                name="useCases"
                placeholder="e.g., API development, frontend refactoring, testing"
                required
              />
              {state.errors?.useCases && (
                <p className="text-sm font-medium text-destructive">{state.errors.useCases[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="communityFeedback">Feedback (Optional)</Label>
              <Textarea
                id="communityFeedback"
                name="communityFeedback"
                placeholder="e.g., I'd like to see more content on Python."
                className="min-h-[100px]"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline flex items-center">
            <Bot className="h-7 w-7 mr-3 text-primary"/> Your Curated Reading List
        </h2>
        {state.recommendations ? (
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="text-lg">AI Reasoning</CardTitle>
                    <CardDescription className="italic">
                        "{state.recommendations.reasoning}"
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {state.recommendations.recommendedContent.map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-secondary">
                                    <LinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <span className="text-sm font-medium text-foreground truncate">{url}</span>
                                    <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
                <Sparkles className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">Your recommendations will appear here.</p>
                <p className="text-sm text-muted-foreground/80">Fill out the form to get started!</p>
            </div>
        )}
      </div>
    </div>
  );
}
