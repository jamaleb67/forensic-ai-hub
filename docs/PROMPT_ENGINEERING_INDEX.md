# Forensic AI Hub: Prompt Engineering Framework - Master Index

## Overview

This is the master index for the Forensic AI Hub's prompt engineering framework. This framework enables **AI-driven, iterative development** through self-prompting batches that build upon each other systematically.

## Framework Documents

### 1. Core Framework
**📄 [PROMPT_ENGINEERING_FRAMEWORK.md](./PROMPT_ENGINEERING_FRAMEWORK.md)**
- **Purpose**: Foundational principles and architecture for AI-driven development
- **Key Topics**:
  - Self-prompting architecture
  - Batch template structure
  - Prompt engineering best practices
  - Execution workflow
  - Version control strategy
  - Quality assurance

**When to Use**: Start here to understand the overall framework and principles.

### 2. Feature Enhancement Batches
**📄 [FEATURE_ENHANCEMENT_BATCHES.md](./FEATURE_ENHANCEMENT_BATCHES.md)**
- **Purpose**: Ready-to-execute batch templates for adding new features
- **Included Batches**:
  - Batch 5: Article Recommendations System
  - Batch 6: Reading Progress Tracking
  - Batch 7: User Comments System
  - (More batches can be added following the same pattern)

**When to Use**: When you want to add new functionality to the platform.

### 3. Content Expansion Guide
**📄 [CONTENT_EXPANSION_GUIDE.md](./CONTENT_EXPANSION_GUIDE.md)**
- **Purpose**: Templates and guidelines for creating high-quality articles
- **Key Topics**:
  - Master article prompt template
  - Content batch framework
  - Example prompts for different article types
  - SEO optimization strategies

**When to Use**: When you want to create new articles or content series.

### 4. User Feedback Framework
**📄 [USER_FEEDBACK_FRAMEWORK.md](./USER_FEEDBACK_FRAMEWORK.md)**
- **Purpose**: System for collecting, analyzing, and acting on user feedback
- **Key Topics**:
  - Feedback collection mechanisms
  - Analysis and prioritization
  - Feedback-driven batch framework
  - Example feedback batch

**When to Use**: When you have user feedback or analytics data to act upon.

---

## Quick Start Guide

### For First-Time Users

**Step 1: Understand the Framework**
1. Read [PROMPT_ENGINEERING_FRAMEWORK.md](./PROMPT_ENGINEERING_FRAMEWORK.md) to understand the core principles.
2. Review the batch template structure.

**Step 2: Choose Your Path**
- **Want to add a feature?** → Go to [FEATURE_ENHANCEMENT_BATCHES.md](./FEATURE_ENHANCEMENT_BATCHES.md)
- **Want to create content?** → Go to [CONTENT_EXPANSION_GUIDE.md](./CONTENT_EXPANSION_GUIDE.md)
- **Have user feedback?** → Go to [USER_FEEDBACK_FRAMEWORK.md](./USER_FEEDBACK_FRAMEWORK.md)

**Step 3: Execute a Batch**
1. Copy the relevant batch prompt.
2. Customize it for your specific needs.
3. Provide it to an AI agent (or execute manually).
4. Validate the results.
5. Commit to Git.

---

## How to Execute a Batch (Detailed)

### Using an AI Agent (Recommended)

1.  **Select a Batch**: Choose a pre-defined batch from one of the framework documents.
2.  **Copy the Prompt**: Copy the entire batch prompt, including all sections (Context, Objective, Tasks, etc.).
3.  **Provide to AI**: Paste the prompt into your AI tool (ChatGPT, Claude, Cursor, etc.).
4.  **Monitor Execution**: The AI will execute the tasks step-by-step. Monitor for errors.
5.  **Validate**: Once complete, verify that all validation criteria are met.
6.  **Commit**: Create a Git commit with the specified message.
7.  **Deploy**: Push to GitHub, which triggers automatic deployment on Vercel.

### Manually (For Learning or Small Changes)

1.  **Read the Batch**: Understand the objective and tasks.
2.  **Execute Tasks**: Perform each task manually (create files, write code, etc.).
3.  **Test**: Validate that everything works as expected.
4.  **Commit**: Commit your changes to Git.
5.  **Deploy**: Push to GitHub.

---

## Batch Execution Checklist

Use this checklist for every batch you execute:

- [ ] **Read the entire batch prompt** before starting.
- [ ] **Verify prerequisites** are met.
- [ ] **Execute tasks sequentially** (unless specified as parallel).
- [ ] **Test incrementally** (don't wait until the end to test).
- [ ] **Validate all criteria** from the validation checklist.
- [ ] **Commit with the correct message format** (`feat:`, `fix:`, `docs:`, etc.).
- [ ] **Push to GitHub** to trigger deployment.
- [ ] **Verify deployment** on the live site.
- [ ] **Document any issues** or deviations from the plan.
- [ ] **Generate the next batch prompt** (if applicable).

---

## Customizing Batches

The provided batches are templates. You can and should customize them:

### Customization Examples

**Change the Scope**:
- Original: "Implement a tag-based recommendation system."
- Customized: "Implement a tag-based recommendation system **with user preference weighting**."

**Add Constraints**:
- Original: "Create a search feature."
- Customized: "Create a search feature **using Algolia for instant search**."

**Combine Batches**:
- Combine Batch 5 and Batch 6 if they are small and related.

**Split Batches**:
- Split a large batch into two smaller ones if it's too complex.

---

## Creating New Batches

When the existing batches don't cover your needs, create a new one using this process:

### New Batch Creation Process

1.  **Identify the Need**: What problem are you solving? What feature are you adding?
2.  **Define the Objective**: Write a single, clear statement of what the batch will accomplish.
3.  **List Prerequisites**: What must exist before this batch can be executed?
4.  **Break Down Tasks**: Divide the work into 3-10 specific, executable tasks.
5.  **Define Artifacts**: What files or outputs will be produced?
6.  **Set Validation Criteria**: How will you know the batch was successful?
7.  **Write the Commit Message**: Plan the Git commit message in advance.
8.  **Generate Next Prompt**: Think about what logically comes after this batch.

### New Batch Template

```markdown
## BATCH [N]: [Descriptive Name]

### Context
[Why is this batch needed? What is the current state?]

### Objective
[Single, clear statement of what this batch accomplishes]

### Prerequisites
- [ ] Prerequisite 1
- [ ] Prerequisite 2

### Tasks

#### Task 1: [Name]
**Action**: [Specific command or operation]
**File**: [Path to file]
**Expected Output**: [What success looks like]

#### Task 2: [Name]
[Repeat structure]

### Artifacts Produced

| Artifact | Path | Purpose |
|----------|------|---------|
| Component | src/components/... | Description |

### Validation Checklist

- [ ] Criterion 1
- [ ] Criterion 2

### Git Commit

**Message**: `[type]: [description] (Batch [N])`

### Next Batch Prompt

[Auto-generated prompt for the next batch]
```

---

## Best Practices

### For AI-Driven Execution

1.  **Be Explicit**: The more specific your prompt, the better the output.
2.  **Provide Context**: Always include the current state of the project.
3.  **Reference Existing Code**: Point the AI to existing files for style and structure.
4.  **Validate Incrementally**: Don't wait until the end to test.
5.  **Iterate**: If the first attempt isn't perfect, refine and try again.

### For Version Control

1.  **Commit After Each Batch**: One batch = one commit (or a few related commits).
2.  **Use Descriptive Messages**: Follow the format: `<type>(<scope>): <subject>`.
3.  **Push Regularly**: Don't let uncommitted work pile up.
4.  **Tag Major Milestones**: Use Git tags for significant releases (e.g., `v1.0-batch-10`).

### For Quality

1.  **Test on Multiple Devices**: Always check mobile responsiveness.
2.  **Check for Errors**: No console errors, no TypeScript errors.
3.  **Proofread Content**: Use Grammarly or similar for articles.
4.  **Get Feedback**: Show new features to users before considering them "done."

---

## Troubleshooting

### Common Issues

**Issue**: "The AI didn't follow the prompt exactly."
- **Solution**: Make the prompt more explicit. Break down complex tasks into smaller steps.

**Issue**: "I got TypeScript errors after executing a batch."
- **Solution**: Review the error messages. Often, it's a missing import or type definition. Fix and re-test.

**Issue**: "The deployment failed on Vercel."
- **Solution**: Check the Vercel build logs. Common causes: missing dependencies, TypeScript errors, incorrect file paths.

**Issue**: "The batch took too long / the AI got stuck."
- **Solution**: The batch might be too complex. Split it into two smaller batches.

---

## Roadmap: Suggested Batch Sequence

This is a suggested order for executing the optional batches, but you can adapt based on your priorities and user feedback.

### Phase 1: Core Features (Batches 5-7)
1.  **Batch 5**: Article Recommendations
2.  **Batch 6**: Reading Progress Tracking
3.  **Batch 7**: User Comments System

**Goal**: Build community and engagement features.

### Phase 2: Content Expansion (Batches 8-10)
4.  **Batch 8**: Advanced DNA Analysis Series (4 articles)
5.  **Batch 9**: Crime Scene Investigation Series (5 articles)
6.  **Batch 10**: Interview Preparation Guides (3 articles)

**Goal**: Expand the content library to cover more topics in depth.

### Phase 3: User Feedback (Batches 11-14)
7.  **Batch 11**: Implement Search Functionality (based on feedback)
8.  **Batch 12**: Improve Mobile Navigation (based on analytics)
9.  **Batch 13**: Add Dark Mode (based on user request)
10. **Batch 14**: Optimize Images for Performance (based on analytics)

**Goal**: Respond to user needs and improve the experience.

### Phase 4: Advanced Features (Batches 15+)
11. **Batch 15**: AI-Powered Study Assistant (chatbot)
12. **Batch 16**: Personalized Learning Paths
13. **Batch 17**: Gamification (badges, points, leaderboards)
14. **Batch 18**: Integration with External Tools (Notion, Google Drive)

**Goal**: Differentiate the platform with unique, advanced capabilities.

---

## Conclusion

This prompt engineering framework is designed to empower you (or an AI agent) to systematically build and improve the Forensic AI Hub. By following the principles, using the templates, and executing batches iteratively, you can create a platform that is:

-   **User-Centered**: Built based on real user needs.
-   **High-Quality**: Comprehensive, well-tested, and polished.
-   **Scalable**: Architected to grow and evolve.
-   **Maintainable**: Clean code, clear documentation, version-controlled.

**Start with Batch 5 and see where the journey takes you. Happy building!**

---

## Quick Reference

| Document | Purpose | Use When |
|----------|---------|----------|
| [PROMPT_ENGINEERING_FRAMEWORK.md](./PROMPT_ENGINEERING_FRAMEWORK.md) | Core principles and architecture | Learning the framework |
| [FEATURE_ENHANCEMENT_BATCHES.md](./FEATURE_ENHANCEMENT_BATCHES.md) | Feature batch templates | Adding new functionality |
| [CONTENT_EXPANSION_GUIDE.md](./CONTENT_EXPANSION_GUIDE.md) | Content creation templates | Writing new articles |
| [USER_FEEDBACK_FRAMEWORK.md](./USER_FEEDBACK_FRAMEWORK.md) | Feedback-driven development | Acting on user input |
| [PROMPT_ENGINEERING_INDEX.md](./PROMPT_ENGINEERING_INDEX.md) (this file) | Master index and quick start | Finding your way around |

---

**Last Updated**: January 30, 2025  
**Framework Version**: 1.0  
**Maintained By**: Forensic AI Hub Development Team
