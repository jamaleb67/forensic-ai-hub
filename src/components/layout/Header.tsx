'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, LogOut, Bookmark } from 'lucide-react';
import { useAuth } from '@/lib/firebase/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Study Resources', href: '/study-resources' },
  { name: 'Forensic Science', href: '/forensic-science' },
  { name: 'Tech Skills', href: '/tech-skills' },
  { name: 'Career Pathways', href: '/career-pathways' },
  { name: 'Community', href: '/community' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUserMenuOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blood-600 dark:text-blood-500">
              Forensic AI Hub
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-blood-600 dark:hover:text-blood-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-full hover:opacity-80 transition-opacity"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="h-8 w-8 rounded-full border-2 border-blood-600"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-blood-600 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-foreground border-b border-border">
                      <p className="font-semibold">{user.displayName}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      href="/bookmarks"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Bookmark className="h-4 w-4" />
                      Bookmarks
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted border-t border-border"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="text-sm font-semibold leading-6 text-foreground hover:text-blood-600 dark:hover:text-blood-500"
            >
              Sign in <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/bookmarks"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bookmarks
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={handleSignIn}
                className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
