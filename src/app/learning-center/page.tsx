import { ContentCard } from "@/components/content-card";
import type { ContentItem } from "@/lib/types";

const lessons: ContentItem[] = [
    {
        title: "Lesson 1: Mastering Prompts for Code Generation",
        description: "Learn the art and science of writing effective prompts to get the precise code you need from any AI assistant.",
        image: "https://placehold.co/600x400.png",
        imageHint: "prompt engineering",
        tags: ["Beginner", "Prompting", "Fundamentals"],
        href: "#"
    },
    {
        title: "Lesson 2: Integrating AI into Your Existing Workflow",
        description: "Strategies and best practices for seamlessly adding AI code assistants to your development cycle without disruption.",
        image: "https://placehold.co/600x400.png",
        imageHint: "developer workflow",
        tags: ["Intermediate", "Workflow", "IDE"],
        href: "#"
    },
    {
        title: "Lesson 3: Advanced Refactoring Techniques with AI",
        description: "Go beyond simple code generation. Learn how to use AI for complex refactoring, code simplification, and applying design patterns.",
        image: "https://placehold.co/600x400.png",
        imageHint: "code refactoring",
        tags: ["Advanced", "Refactoring", "Patterns"],
        href: "#"
    },
    {
        title: "Lesson 4: Understanding and Verifying AI-Generated Code",
        description: "Critical skills for reviewing, testing, and ensuring the quality and security of code produced by AI tools.",
        image: "https://placehold.co/600x400.png",
        imageHint: "code review",
        tags: ["Intermediate", "Security", "Best Practices"],
        href: "#"
    },
    {
        title: "Lesson 5: Customizing Your AI Code Assistant",
        description: "A guide to fine-tuning and providing context to your AI assistant to align it with your project's coding style and architecture.",
        image: "https://placehold.co/600x400.png",
        imageHint: "ai customization",
        tags: ["Advanced", "Customization", "Context"],
        href: "#"
    },
    {
        title: "Lesson 6: The Ethics of AI in Software Development",
        description: "A thoughtful discussion on copyright, attribution, and the ethical considerations of using AI in professional software engineering.",
        image: "https://placehold.co/600x400.png",
        imageHint: "ai ethics",
        tags: ["All Levels", "Ethics", "Community"],
        href: "#"
    }
];

export default function LearningCenterPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Learning Center</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Master the effective use of AI code generator tools with our structured, step-by-step lessons.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lessons.map((item) => (
                    <ContentCard key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
}
