import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">AI Toolbench</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {year} AI Toolbench. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
