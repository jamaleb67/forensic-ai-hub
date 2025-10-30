import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from './config';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bookmarks: string[];
  readingProgress: Record<string, number>;
  createdAt: Date;
  lastLogin: Date;
}

export async function createUserProfile(user: {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}) {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const profile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || 'Anonymous',
      photoURL: user.photoURL || undefined,
      bookmarks: [],
      readingProgress: {},
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    await setDoc(userRef, profile);
    return profile;
  } else {
    // Update last login
    await updateDoc(userRef, {
      lastLogin: new Date(),
    });
    return userSnap.data() as UserProfile;
  }
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }
  return null;
}

export async function addBookmark(uid: string, articleSlug: string) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    bookmarks: arrayUnion(articleSlug),
  });
}

export async function removeBookmark(uid: string, articleSlug: string) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    bookmarks: arrayRemove(articleSlug),
  });
}

export async function updateReadingProgress(
  uid: string,
  articleSlug: string,
  progress: number
) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    [`readingProgress.${articleSlug}`]: progress,
  });
}
