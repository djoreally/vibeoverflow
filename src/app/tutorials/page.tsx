import { ContentCard } from "@/components/content-card";
import type { ContentItem } from "@/lib/types";

const tutorials: ContentItem[] = [
    {
        title: "Building a REST API with Node.js and AI",
        description: "A step-by-step guide to creating a complete REST API from scratch using Express.js, with AI assistance for boilerplate code and logic.",
        image: "https://placehold.co/600x400.png",
        imageHint: "rest api",
        tags: ["Node.js", "API", "Backend"],
        href: "#"
    },
    {
        title: "Creating Interactive Charts with D3.js and an AI Partner",
        description: "Learn how to use AI to quickly generate complex D3.js data visualizations for your web applications.",
        image: "https://placehold.co/600x400.png",
        imageHint: "interactive charts",
        tags: ["D3.js", "Data Viz", "Frontend"],
        href: "#"
    },
    {
        title: "AI-Assisted Game Development with Unity",
        description: "This tutorial shows you how to use an AI code assistant to write C# scripts for character movement, physics, and game logic in Unity.",
        image: "https://placehold.co/600x400.png",
        imageHint: "game development",
        tags: ["Unity", "C#", "GameDev"],
        href: "#"
    },
    {
        title: "Developing a Serverless Function with AWS Lambda and AI",
        description: "Walkthrough of creating, testing, and deploying a Python-based serverless function on AWS Lambda, accelerated by AI.",
        image: "https://placehold.co/600x400.png",
        imageHint: "serverless function",
        tags: ["AWS", "Serverless", "Python"],
        href: "#"
    },
    {
        title: "Building a Full-Stack App with Next.js and an AI Assistant",
        description: "A comprehensive tutorial on building a modern web application with Next.js, Prisma, and Tailwind CSS, using AI for every step.",
        image: "https://placehold.co/600x400.png",
        imageHint: "full stack",
        tags: ["Next.js", "Full-Stack", "Tutorial"],
        href: "#"
    },
    {
        title: "Web Scraping with Python and AI",
        description: "Learn how to efficiently scrape websites using BeautifulSoup and Scrapy, with AI helping to write robust and resilient selectors.",
        image: "https://placehold.co/600x400.png",
        imageHint: "web scraping",
        tags: ["Python", "Web Scraping", "Data"],
        href: "#"
    }
];

export default function TutorialsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Tutorials</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Follow our practical, hands-on tutorials to learn new skills and build amazing projects with AI code generators.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutorials.map((item) => (
                    <ContentCard key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
}
