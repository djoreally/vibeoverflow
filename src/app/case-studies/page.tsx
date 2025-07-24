import { ContentCard } from "@/components/content-card";
import type { ContentItem } from "@/lib/types";

const caseStudies: ContentItem[] = [
    {
        title: "Boosting Legacy Codebase Performance with AI",
        description: "How a fintech startup used an AI code assistant to refactor and optimize their legacy Java code, resulting in a 40% performance increase.",
        image: "https://placehold.co/600x400.png",
        imageHint: "code performance",
        tags: ["Fintech", "Java", "Optimization"],
        href: "#"
    },
    {
        title: "Accelerating Frontend Development at a SaaS Company",
        description: "A deep dive into how a mid-sized SaaS company integrated AI tools to build UI components 70% faster with React and TypeScript.",
        image: "https://placehold.co/600x400.png",
        imageHint: "frontend development",
        tags: ["SaaS", "React", "UI"],
        href: "#"
    },
    {
        title: "From Python Scripts to Production APIs",
        description: "This case study follows a data science team's journey of using AI to turn their Python analysis scripts into robust, scalable APIs with FastAPI.",
        image: "https://placehold.co/600x400.png",
        imageHint: "python api",
        tags: ["Data Science", "Python", "API"],
        href: "#"
    },
    {
        title: "AI-Powered Debugging in a Complex Microservices Architecture",
        description: "Learn how a distributed team uses AI code assistants to rapidly identify and fix bugs across dozens of microservices.",
        image: "https://placehold.co/600x400.png",
        imageHint: "debugging code",
        tags: ["Debugging", "Microservices", "DevOps"],
        href: "#"
    },
    {
        title: "Enhancing Code Quality with AI-Generated Unit Tests",
        description: "A look at how an e-commerce platform achieved 95% code coverage by leveraging AI to generate comprehensive unit and integration tests.",
        image: "https://placehold.co/600x400.png",
        imageHint: "code quality",
        tags: ["E-commerce", "Testing", "QA"],
        href: "#"
    },
    {
        title: "Rapid Prototyping for a Mobile App",
        description: "A startup story of building a fully functional mobile app prototype in one week using an AI code generator and Flutter.",
        image: "https://placehold.co/600x400.png",
        imageHint: "mobile app",
        tags: ["Mobile", "Flutter", "Prototyping"],
        href: "#"
    }
];


export default function CaseStudiesPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Case Studies</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Discover real-world examples of how developers are leveraging AI to build faster, smarter, and more efficiently.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((item) => (
                    <ContentCard key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
}
