'use client';

import { useAuth } from '@/lib/firebase/AuthContext';
import { useEffect, useState } from 'react';
import { getUserProfile, UserProfile } from '@/lib/firebase/userService';
import { User, Mail, Calendar, Bookmark, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
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
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <User className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Sign in Required</h1>
          <p className="text-muted-foreground mb-6">
            Please sign in to view your profile and access personalized features.
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

  const readingProgressCount = profile?.readingProgress
    ? Object.keys(profile.readingProgress).length
    : 0;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="h-24 w-24 rounded-full border-4 border-blood-600"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-blood-600 flex items-center justify-center text-white">
                <User className="h-12 w-12" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {user.displayName || 'Anonymous User'}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              {profile && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Joined {new Date(profile.createdAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/bookmarks"
            className="bg-card border border-border rounded-lg p-6 hover:border-blood-600 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blood-600/10 rounded-lg group-hover:bg-blood-600/20 transition-colors">
                <Bookmark className="h-6 w-6 text-blood-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {profile?.bookmarks.length || 0}
                </p>
                <p className="text-sm text-muted-foreground">Bookmarked Articles</p>
              </div>
            </div>
          </Link>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blood-600/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-blood-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {readingProgressCount}
                </p>
                <p className="text-sm text-muted-foreground">Articles in Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
          <p className="text-muted-foreground">
            Your reading history and activity will appear here as you explore articles.
          </p>
        </div>
      </div>
    </div>
  );
}
