'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code2, Menu, LogIn, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

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
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex">
            <AuthButton />
          </div>
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
                  <div className="mb-8">
                    <AuthButton isMobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
