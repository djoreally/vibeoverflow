
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code2, Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/learning-center', label: 'Learning Center' },
  { href: '/recommendations', label: 'For You' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, label, isMobile }: { href: string; label: string; isMobile?: boolean }) => (
    <Link
      href={href}
      onClick={() => isMobile && setMenuOpen(false)}
      className={cn(
        'transition-colors hover:text-primary',
        pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground',
        isMobile ? 'text-lg' : 'text-sm font-medium'
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-6 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">AI Toolbench</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setMenuOpen(false)}>
                  <Code2 className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">AI Toolbench</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} label={link.label} isMobile />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
