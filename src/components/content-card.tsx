import type { ContentItem } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video overflow-hidden rounded-md border">
            <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            data-ai-hint={item.imageHint}
            className="h-full w-full object-cover"
            />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button asChild variant="ghost" size="sm">
            <Link href={item.href}>
                Read
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
