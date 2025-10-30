'use client';

import { useAuth } from '@/lib/firebase/AuthContext';
import { useEffect, useState } from 'react';
import { getUserProfile, UserProfile } from '@/lib/firebase/userService';
import { Bookmark, BookmarkX } from 'lucide-react';
import Link from 'next/link';

export default function BookmarksPage() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (user) {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);
      }
      setLoading(false);
    }

    if (!authLoading) {
      loadProfile();
    }
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blood-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading bookmarks...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <Bookmark className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Sign in Required</h1>
          <p className="text-muted-foreground mb-6">
            Please sign in to view your bookmarked articles.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-blood-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blood-700 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const hasBookmarks = profile && profile.bookmarks.length > 0;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Bookmarks</h1>
          <p className="text-muted-foreground">
            Articles you've saved for later reading
          </p>
        </div>

        {hasBookmarks ? (
          <div className="space-y-4">
            {profile.bookmarks.map((slug) => (
              <div
                key={slug}
                className="bg-card border border-border rounded-lg p-6 hover:border-blood-600 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </h3>
                    <Link
                      href={`/${slug.split('/')[0]}/${slug.split('/')[1]}`}
                      className="text-sm text-blood-600 hover:text-blood-700 font-medium"
                    >
                      Read article →
                    </Link>
                  </div>
                  <Bookmark className="h-5 w-5 text-blood-600 fill-blood-600" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <BookmarkX className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No bookmarks yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Start exploring articles and bookmark the ones you want to read later.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-blood-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blood-700 transition-colors"
            >
              Explore Articles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
