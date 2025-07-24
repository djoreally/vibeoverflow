import { RecommendationsClient } from "./recommendations-client";

export default function RecommendationsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Personalized Content</h1>
                <p className="text-muted-foreground mt-3">
                    Tell us about your tech stack and goals. Our AI will curate a personalized list of articles, tutorials, and case studies just for you.
                </p>
            </div>

            <RecommendationsClient />
        </div>
    );
}
