'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code2, Menu, LogIn, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navLinks = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/learning-center', label: 'Learning Center' },
  { href: '/recommendations', label: 'For You' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

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

  const AuthButton = ({ isMobile }: { isMobile?: boolean }) => {
    if (status === 'loading') {
      return <Button variant="ghost" size={isMobile ? 'lg' : 'default'}>Loading...</Button>;
    }

    if (session) {
      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={session.user?.image || ''} />
            <AvatarFallback>{session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}</AvatarFallback>
          </Avatar>
          <Button onClick={() => signOut()} variant="ghost" size={isMobile ? 'lg' : 'default'}>
            <LogOut className={cn("mr-2 h-4 w-4", isMobile && "h-5 w-5")} />
            Sign Out
          </Button>
        </div>
      );
    }

    return (
      <Button onClick={() => signIn()} variant="ghost" size={isMobile ? 'lg' : 'default'}>
        <LogIn className={cn("mr-2 h-4 w-4", isMobile && "h-5 w-5")} />
        Sign In
      </Button>
    );
  };

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
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex">
            <AuthButton />
          </div>
          <ThemeToggle />
          <div className="md:hidden">
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
                  <nav className="flex flex-col gap-6 mb-8">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} href={link.href} label={link.label} isMobile />
                    ))}
                  </nav>
                  <AuthButton isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
