# Forensic AI Hub: Feature Enhancement Batches

This document provides self-prompting batch templates for optional feature enhancements. Each batch is designed to be executed by an AI agent to incrementally add new functionality to the platform.

---

## BATCH 5: Article Recommendations System

### Context

The platform currently has a library of 10 articles. To improve user engagement and content discovery, a simple article recommendation system can be implemented at the bottom of each article page.

### Objective

Implement a basic, tag-based article recommendation system that displays 3-5 related articles at the end of each article.

### Prerequisites

- [x] All 10 articles exist in `src/content` with metadata (tags, category).
- [x] Article pages are dynamically generated from MDX files.
- [x] `ArticleCard.tsx` component exists for displaying article previews.

### Tasks

#### Task 1: Create Recommendation Logic

**Action**: Create a new utility function `getRelatedArticles(currentArticleSlug, allArticles)` in a new file `src/lib/content/recommendations.ts`.

**Logic**:
1. Find the current article by its slug.
2. Identify its tags and category.
3. Filter all other articles to find those with at least one matching tag or the same category.
4. Score matches: +2 for each matching tag, +1 for matching category.
5. Sort by score in descending order.
6. Return the top 3-5 recommended articles.

#### Task 2: Create Recommendation Component

**Action**: Create a new React component `src/components/content/ArticleRecommendations.tsx`.

**Functionality**:
1. Takes `currentArticleSlug` as a prop.
2. Fetches all articles and uses `getRelatedArticles` to get recommendations.
3. Renders a section with the title "You Might Also Like".
4. Displays the recommended articles using the `ArticleCard.tsx` component.

#### Task 3: Integrate into Article Pages

**Action**: Modify the dynamic article page templates (`src/app/study-resources/[slug]/page.tsx` and `src/app/career-pathways/[slug]/page.tsx`).

**Implementation**:
1. Import the `ArticleRecommendations` component.
2. Add the component at the end of the article content, passing the current article's slug.

### Artifacts Produced

| Artifact | Path | Purpose |
|---|---|---|
| Utility Function | `src/lib/content/recommendations.ts` | Contains the logic for finding related articles. |
| React Component | `src/components/content/ArticleRecommendations.tsx` | Displays the recommended articles. |
| Updated Pages | `src/app/study-resources/[slug]/page.tsx`, `src/app/career-pathways/[slug]/page.tsx` | Integrates the recommendation component. |

### Validation Checklist

- [ ] `getRelatedArticles` function returns accurate recommendations.
- [ ] `ArticleRecommendations` component renders correctly.
- [ ] Recommendations appear at the bottom of all article pages.
- [ ] Links in the recommendation cards work correctly.
- [ ] The component is responsive on mobile devices.
- [ ] No console errors or warnings.

### Git Commit

**Message**: `feat(recommendations): Add tag-based article recommendation system (Batch 5)`

### Next Batch Prompt

```markdown
## AUTO-GENERATED PROMPT FOR BATCH 6

Execute Batch 6: Reading Progress Tracking

**Context**:
Batch 5 successfully implemented an article recommendation system. The platform now has user authentication (Batch 3) and a way to suggest content. The next logical step is to enhance the user experience by tracking their reading progress.

**Objective**:
Implement a reading progress tracking system that saves a user's scroll position in an article and displays a progress bar.

**Prerequisites**:
- Firebase Authentication is implemented (`AuthContext`).
- Firestore `userService.ts` exists with `updateReadingProgress` function.
- Article pages are dynamically generated.

**Tasks**:
1. **Create Progress Bar Component**: Build a `ReadingProgressBar.tsx` component that visually represents scroll progress.
2. **Implement Scroll Tracking Hook**: Create a `useReadingProgress.ts` hook to monitor scroll depth.
3. **Save Progress to Firestore**: On scroll, call `updateReadingProgress` to save the user's progress (debounce to avoid excessive writes).
4. **Integrate into Article Pages**: Add the progress bar and hook to the dynamic article page templates.
5. **Display Progress on Profile**: Update the profile page to show which articles are in progress.

Execute this batch now.
```

---

## BATCH 6: Reading Progress Tracking

### Context

The platform has user authentication and article recommendations. To further personalize the experience, this batch will add functionality to track and display a user's reading progress for each article.

### Objective

Implement a reading progress tracking system that saves a user's scroll position in an article and displays a visual progress bar.

### Prerequisites

- [x] Firebase Authentication is implemented (`AuthContext`).
- [x] Firestore `userService.ts` exists with `updateReadingProgress` function.
- [x] Dynamic article pages exist.

### Tasks

#### Task 1: Create Reading Progress Bar Component

**Action**: Create `src/components/content/ReadingProgressBar.tsx`.

**Functionality**:
- A fixed-position bar at the top of the page.
- Width updates based on a `progress` prop (0-100).
- Styled with the site's theme (e.g., blood red).

#### Task 2: Create Scroll Tracking Hook

**Action**: Create a custom hook `src/hooks/useReadingProgress.ts`.

**Logic**:
1. Takes a ref to the article content element.
2. Adds a scroll event listener to the window.
3. Calculates scroll percentage based on viewport height and content height.
4. Returns the current progress percentage.

#### Task 3: Implement Progress Saving

**Action**: Modify the `useReadingProgress.ts` hook.

**Functionality**:
1. Import `useAuth` and `updateReadingProgress`.
2. If a user is logged in, call `updateReadingProgress` when the scroll position changes.
3. Use a debounce function (e.g., from `lodash.debounce`) to limit Firestore writes to once every 5-10 seconds.

#### Task 4: Integrate into Article Pages

**Action**: Update dynamic article page templates.

**Implementation**:
1. Wrap the main article content in a `div` with a `ref`.
2. Use the `useReadingProgress` hook with the content `ref`.
3. Pass the progress to the `ReadingProgressBar` component.

#### Task 5: Display Progress on Profile Page

**Action**: Update `src/app/profile/page.tsx`.

**Functionality**:
1. Fetch the user's `readingProgress` from their profile.
2. Display a list of articles in progress with their completion percentage.
3. Link back to the articles.

### Artifacts Produced

| Artifact | Path | Purpose |
|---|---|---|
| Component | `src/components/content/ReadingProgressBar.tsx` | Visual progress indicator. |
| Hook | `src/hooks/useReadingProgress.ts` | Logic for tracking and saving scroll progress. |
| Updated Pages | Article and Profile pages | Integration of the new feature. |

### Validation Checklist

- [ ] Progress bar appears on article pages and updates on scroll.
- [ ] Scroll position is saved to Firestore for logged-in users.
- [ ] Profile page accurately displays articles in progress.
- [ ] The feature is disabled for logged-out users.
- [ ] Performance is not negatively impacted (debounce works).

### Git Commit

**Message**: `feat(progress): Add reading progress tracking and display (Batch 6)`

### Next Batch Prompt

```markdown
## AUTO-GENERATED PROMPT FOR BATCH 7

Execute Batch 7: User Comments System

**Context**:
Batches 5 and 6 added recommendations and reading progress, enhancing the individual user experience. To build a community, the next step is to allow users to interact with the content and each other.

**Objective**:
Implement a user comments system at the bottom of each article page, allowing logged-in users to post and view comments.

**Prerequisites**:
- Firebase Authentication is implemented.
- Firestore is configured.
- Dynamic article pages exist.

**Tasks**:
1. **Design Firestore Schema**: Create a `comments` subcollection for each article document in a new `articles` collection.
2. **Create Comment Service**: Build `commentService.ts` with functions for `addComment` and `getComments`.
3. **Build Comment Components**: Create `Comment.tsx`, `CommentList.tsx`, and `CommentForm.tsx`.
4. **Integrate into Article Pages**: Add the comment section below the article content.
5. **Add Moderation Features (Basic)**: Include functionality for users to delete their own comments.

Execute this batch now.
```

---

## BATCH 7: User Comments System

### Context

The platform has individual user features like recommendations and progress tracking. This batch focuses on building community by enabling user interaction through a comments section on articles.

### Objective

Implement a user comments system at the bottom of each article page, allowing logged-in users to post, view, and delete their own comments.

### Prerequisites

- [x] Firebase Authentication is implemented.
- [x] Firestore is configured.
- [x] Dynamic article pages exist.

### Tasks

#### Task 1: Design Firestore Schema

**Action**: Plan the Firestore data structure.

**Schema**:
- A top-level `articles` collection.
- Each document in `articles` will be named by the article `slug`.
- Each article document will have a `comments` subcollection.
- Each comment document will contain:
  - `uid`: User ID of the commenter
  - `displayName`: User's display name
  - `photoURL`: User's profile picture
  - `text`: The comment content
  - `createdAt`: Timestamp

#### Task 2: Create Comment Service

**Action**: Create `src/lib/firebase/commentService.ts`.

**Functions**:
- `addComment(articleSlug, commentData)`: Adds a new comment to the subcollection.
- `getComments(articleSlug)`: Fetches all comments for an article, ordered by `createdAt`.
- `deleteComment(articleSlug, commentId)`: Deletes a specific comment.

#### Task 3: Build Comment Components

**Action**: Create the following components in `src/components/comments/`:

1.  **`CommentForm.tsx`**: A form with a textarea for logged-in users to submit new comments.
2.  **`Comment.tsx`**: Displays a single comment with user avatar, name, timestamp, and text. Includes a delete button if the comment belongs to the current user.
3.  **`CommentList.tsx`**: Fetches and displays a list of comments using the `Comment` component.
4.  **`CommentsSection.tsx`**: The main component that combines `CommentList` and `CommentForm` and handles the overall state.

#### Task 4: Integrate into Article Pages

**Action**: Update dynamic article page templates.

**Implementation**:
1. Import the `CommentsSection` component.
2. Add it below the `ArticleRecommendations` component.
3. Pass the `articleSlug` as a prop.

### Artifacts Produced

| Artifact | Path | Purpose |
|---|---|---|
| Service | `src/lib/firebase/commentService.ts` | Handles all Firestore operations for comments. |
| Components | `src/components/comments/` | UI components for displaying and submitting comments. |
| Updated Pages | Article pages | Integration of the new comments section. |

### Validation Checklist

- [ ] Logged-in users can post comments.
- [ ] Logged-out users see a "Sign in to comment" message.
- [ ] Comments are displayed correctly and in chronological order.
- [ ] Users can delete their own comments, but not others'.
- [ ] The comments section is responsive and well-styled.
- [ ] Firestore security rules are updated to protect comment data (optional but recommended).

### Git Commit

**Message**: `feat(comments): Add user comments system to articles (Batch 7)`

### Next Batch Prompt

```markdown
## AUTO-GENERATED PROMPT FOR BATCH 8

Execute Batch 8: Content Expansion - Advanced DNA Analysis

**Context**:
Batches 5-7 successfully added significant feature enhancements (recommendations, progress tracking, comments). The platform is now more interactive. The next logical step is to return to content creation, focusing on a more advanced topic to provide deeper value to students.

**Objective**:
Create a series of 3-5 comprehensive articles on advanced DNA analysis techniques and concepts relevant to a forensic science curriculum.

**Prerequisites**:
- The MDX content creation pipeline is established.
- The platform can host and display new articles.

**Tasks**:
1. **Research and Outline**: Plan 3-5 article topics. Suggestions:
   - "Next-Generation Sequencing (NGS) in Forensics: The Future of DNA Analysis"
   - "Understanding STRmix: A Guide to Probabilistic Genotyping"
   - "Mitochondrial DNA (mtDNA) Analysis: When and Why It's Used"
   - "Y-STR Analysis: Tracing Paternal Lineages in Forensic Cases"
   - "Forensic Genealogy: How GEDmatch and Parabon are Solving Cold Cases"
2. **Write Articles**: Draft each article (2,500-4,000 words each) with detailed explanations, case studies, and visuals.
3. **Create Visuals**: Design diagrams or find images to illustrate complex concepts (e.g., NGS workflow, STRmix output).
4. **Publish Articles**: Add the new MDX files to the `src/content/study-resources` directory with appropriate metadata.
5. **Update Navigation**: Ensure the new articles are discoverable through category pages or featured sections.

Execute this batch now.
```
```
