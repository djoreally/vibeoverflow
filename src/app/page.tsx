import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CaseSensitive, Code, GraduationCap } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const featuredTools = [
  { name: 'GitHub Copilot', logo: 'https://placehold.co/40x40.png', hint: 'github logo' },
  { name: 'Tabnine', logo: 'https://placehold.co/40x40.png', hint: 'letter T' },
  { name: 'Amazon CodeWhisperer', logo: 'https://placehold.co/40x40.png', hint: 'cloud code' },
  { name: 'Replit Ghostwriter', logo: 'https://placehold.co/40x40.png', hint: 'ghost' },
];

const featuredContent = [
    {
        icon: <CaseSensitive className="h-8 w-8 text-primary" />,
        title: 'Case Studies',
        description: 'Explore real-world applications and success stories.',
        href: '/case-studies',
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: 'Tutorials',
        description: 'Follow practical, hands-on coding tutorials.',
        href: '/tutorials',
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: 'Learning Center',
        description: 'Master AI tools with our step-by-step lessons.',
        href: '/learning-center',
    },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Supercharge Your Development with AI
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            AI Toolbench is your ultimate resource for mastering AI-powered code generation. Discover case studies, tutorials, and lessons to elevate your workflow.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/recommendations">Get Personalised Content <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#explore">Explore Resources</Link>
            </Button>
          </div>
          <div className="mt-16">
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Featured Tools
            </span>
            <div className="mt-4 flex justify-center items-center gap-8 opacity-75">
              {featuredTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2">
                  <Image src={tool.logo} alt={tool.name} width={24} height={24} data-ai-hint={tool.hint} className="rounded-sm" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="explore" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Explore Our Resources</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Dive into our curated collections of content designed to help you get the most out of AI code generators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
                <Link key={item.title} href={item.href} className="group">
                    <Card className="h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                        <CardHeader className="items-center text-center">
                            {item.icon}
                            <CardTitle className="mt-4 font-headline">{item.title}</CardTitle>
                            <CardDescription className="mt-2">{item.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
