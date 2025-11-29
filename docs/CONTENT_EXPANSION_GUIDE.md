# Forensic AI Hub: Content Expansion Prompt Engineering Guide

## Document Purpose

This guide provides a systematic framework for creating high-quality, consistent, and engaging articles for the Forensic AI Hub using AI. It is designed to be used by human authors or AI agents to generate content that aligns with the platform's mission and quality standards.

## Core Content Principles

All content must adhere to these five principles:

1.  **Empathetic and Motivational**: Address the student's anxieties (especially around math) and empower them with confidence and a clear path forward.
2.  **Actionable and Practical**: Provide specific, step-by-step advice, real-world examples, and tools that students can use immediately.
3.  **Comprehensive and Well-Researched**: Go beyond surface-level explanations. Cover topics in depth, citing sources and providing data where applicable.
4.  **Structured for Readability**: Use clear headings, subheadings, tables, and lists to break up text and make information easy to scan and digest.
5.  **SEO Optimized**: Naturally integrate keywords and structure content to be discoverable by search engines.

---

## The Master Article Prompt Template

This template is the foundation for generating any new article. Fill it out completely to provide the AI with the necessary context and constraints.

```markdown
## MASTER PROMPT: GENERATE FORENSIC AI HUB ARTICLE

### 1. Core Metadata

-   **Title**: [Enter a compelling, SEO-friendly title]
-   **Description**: [Write a 1-2 sentence meta description for SEO, summarizing the article's value]
-   **Category**: [Choose one: `study-resources`, `career-pathways`, `about`]
-   **Tags**: [List 5-7 relevant, comma-separated tags]
-   **Difficulty**: [Choose one: `beginner`, `intermediate`, `advanced`]
-   **Word Count Goal**: [Specify target word count, e.g., 2,500-4,000 words]

### 2. Target Audience

-   **Primary Audience**: [Describe the target reader, e.g., "A first-year GMU forensic science student struggling with calculus"]
-   **Key Problem/Question**: [What specific problem does this article solve for them?]

### 3. Content Outline & Key Sections

[Provide a detailed, hierarchical outline of the article. The more detail, the better the output.]

-   **Introduction**:
    -   Hook: [Start with a relatable story or a surprising fact]
    -   Problem: [State the audience's pain point]
    -   Solution: [Promise what the article will deliver]
-   **Section 1: [Title]**
    -   Subsection 1.1: [Detail]
    -   Subsection 1.2: [Detail]
-   **Section 2: [Title]**
    -   Case Study/Example: [Describe a real-world example to include]
    -   Table: [Specify a table to create, including columns and example rows]
-   **Section N: [Title]**
    -   [Continue with as many sections as needed]
-   **Conclusion**:
    -   Summary: [Recap the key takeaways]
    -   Motivation: [End with an empowering message]
    -   Next Steps: [Provide a clear, actionable to-do list]

### 4. Tone, Style, and Voice

-   **Primary Tone**: [e.g., `Empathetic`, `Authoritative`, `Motivational`]
-   **Voice**: Speak directly to the student (`You`, `Your`). Be a knowledgeable and supportive mentor.
-   **Analogies**: Use analogies related to forensic science or popular culture (like Dexter) to explain complex topics.
-   **Formatting**: Use Markdown for structure. Include tables, blockquotes for quotes, and code blocks for AI prompts or code snippets.

### 5. SEO & Keywords

-   **Primary Keyword**: [The main search term, e.g., "forensic science portfolio"]
-   **Secondary Keywords**: [List 5-10 related keywords, e.g., "forensic science projects", "how to get a forensics job"]
-   **Instructions**: Naturally integrate these keywords into headings and body text. The primary keyword should appear in the title, first paragraph, and at least 3-4 headings.

### 6. AI Instructions

-   **Action**: "You are an expert technical writer for the Forensic AI Hub. Write a comprehensive, engaging, and well-structured article based on the specifications above."
-   **Constraints**: "Do not invent facts. Adhere strictly to the provided outline. Ensure the tone is supportive and motivational. The final output must be a single, complete MDX file."

```

---

## Example Prompt Fill: Career Pathway Article

Here is an example of the master template filled out to generate a new career article.

```markdown
### 1. Core Metadata
-   **Title**: "Beyond the Bench: 5 Non-Lab Careers in Forensic Science"
-   **Description**: "Think forensic science is only for lab coats? Discover 5 exciting, well-paid career paths outside the traditional laboratory, from forensic accounting to criminal profiling."
-   **Category**: `career-pathways`
-   **Tags**: `forensic careers`, `non-lab jobs`, `forensic accounting`, `criminal profiling`, `digital forensics`
-   **Difficulty**: `beginner`
-   **Word Count Goal**: `3,000 words`

### 2. Target Audience
-   **Primary Audience**: "A forensic science student who enjoys the field but is unsure if they want to work in a lab environment for their entire career."
-   **Key Problem/Question**: "What can I do with a forensic science degree besides work in a crime lab?"

### 3. Content Outline & Key Sections
-   **Introduction**:
    -   Hook: Start with the stereotype of a lab-bound scientist.
    -   Problem: Acknowledge that lab work isn't for everyone.
    -   Solution: Introduce 5 exciting non-lab career paths.
-   **Section 1: Forensic Accounting**
    -   What it is: Following the money trail.
    -   Day-in-the-life.
    -   Salary and skills required.
-   **Section 2: Digital Forensics Examiner**
    -   (Reference the existing detailed article, but provide a summary).
-   **Section 3: Criminal Profiler / Behavioral Analyst**
    -   The reality vs. the TV myth.
    -   Path to the FBI's Behavioral Analysis Unit (BAU).
    -   Skills: Psychology, statistics, law enforcement experience.
-   **Section 4: Forensic Social Worker**
    -   The intersection of social work and the legal system.
    -   Roles: Victim advocacy, court testimony, child welfare.
-   **Section 5: Medicolegal Death Investigator**
    -   Working for a medical examiner's office.
    -   Responsibilities: Investigating scenes, collecting evidence, interviewing families.
-   **Table**: Create a comparison table of the 5 careers (Salary, Math Level, Required Experience, Day-to-Day).
-   **Conclusion**:
    -   Summary: Recap the diverse opportunities.
    -   Motivation: Encourage students to find their unique niche.
    -   Next Steps: Suggest informational interviews and relevant coursework.

... (sections 4, 5, and 6 would be filled out similarly)
```

---

## The Content Batch Framework

To create content efficiently, plan it in batches. A content batch is a collection of 3-5 related articles created in a single development cycle.

### Content Batch Prompt Template

```markdown
## MASTER PROMPT: EXECUTE CONTENT BATCH [N]

### 1. Batch Overview

-   **Batch Name**: [e.g., "Advanced DNA Analysis Series"]
-   **Theme**: [The central topic connecting all articles]
-   **Number of Articles**: [e.g., 4]
-   **Objective**: [e.g., "To provide students with in-depth knowledge of modern DNA analysis techniques beyond the standard curriculum."]

### 2. Article Briefs

[For each article in the batch, provide a concise brief. This is a mini-version of the master prompt.]

-   **Article 1: [Title]**
    -   **Objective**: [What this specific article will teach]
    -   **Key Sections**: [3-5 main headings]
    -   **Primary Keyword**: [Main SEO keyword]

-   **Article 2: [Title]**
    -   **Objective**: [Objective]
    -   **Key Sections**: [Outline]
    -   **Primary Keyword**: [Keyword]

-   **Article N: [Title]**
    -   [Repeat for all articles in the batch]

### 3. AI Instructions

-   **Action**: "You are an expert technical writer for the Forensic AI Hub. Generate [N] comprehensive, engaging, and well-structured articles based on the briefs provided above. Create each article as a separate, complete MDX file."
-   **Execution**: "Generate the articles sequentially. After each article is generated, confirm its completion before proceeding to the next."

### 4. Batch Completion

-   **Final Step**: Once all articles are created, commit them to the Git repository with a single, descriptive commit message.
-   **Commit Message**: `feat(content): Add [Batch Name] article series (Batch [N])`

```

---

## Example Content Batch Prompt (Batch 8)

This is a ready-to-use prompt for the next content expansion.

```markdown
## MASTER PROMPT: EXECUTE CONTENT BATCH 8

### 1. Batch Overview

-   **Batch Name**: "Advanced DNA Analysis Series"
-   **Theme**: Modern and emerging DNA techniques in forensic science.
-   **Number of Articles**: 4
-   **Objective**: "To provide students with in-depth knowledge of DNA analysis techniques that are shaping the future of forensics, moving beyond what is typically covered in an undergraduate curriculum."

### 2. Article Briefs

-   **Article 1: "Next-Generation Sequencing (NGS) in Forensics: The Future of DNA Analysis"**
    -   **Objective**: Explain what NGS is, how it differs from traditional STR analysis, and its applications in forensics (e.g., mixture deconvolution, phenotyping).
    -   **Key Sections**: What is NGS?, NGS vs. Sanger Sequencing, The NGS Workflow in a Forensic Lab, Applications (Mixtures, mtDNA, Phenotyping), Challenges and Ethical Considerations.
    -   **Primary Keyword**: "Next-Generation Sequencing forensics"

-   **Article 2: "Understanding STRmix: A Practical Guide to Probabilistic Genotyping"**
    -   **Objective**: Demystify probabilistic genotyping software like STRmix, explaining what it does, why it's necessary for complex mixtures, and how to interpret its results (Likelihood Ratios).
    -   **Key Sections**: The Problem with Complex DNA Mixtures, What is Probabilistic Genotyping?, How STRmix Works (Simplified), Interpreting the Likelihood Ratio (LR), The 'Black Box' Debate in Court.
    -   **Primary Keyword**: "STRmix guide"

-   **Article 3: "Forensic Genealogy: How GEDmatch and DNA Databases are Solving Cold Cases"**
    -   **Objective**: Detail the rise of forensic genealogy, explaining the process from crime scene DNA to identifying a suspect using public DNA databases, and discuss the ethical implications.
    -   **Key Sections**: The Golden State Killer Case, The Forensic Genealogy Workflow, Key Tools (GEDmatch, FamilyTreeDNA), The Ethical and Privacy Debate, The Future of the Technique.
    -   **Primary Keyword**: "forensic genealogy"

-   **Article 4: "Beyond the Nucleus: A Guide to Mitochondrial DNA (mtDNA) Analysis"**
    -   **Objective**: Explain the unique properties of mtDNA, when it is used in forensic cases (e.g., old bones, hair shafts), its limitations (paternal lineage), and how it compares to nuclear DNA analysis.
    -   **Key Sections**: What Makes mtDNA Different?, When to Use mtDNA (and When Not To), The Process of mtDNA Analysis, Interpreting mtDNA Results, Famous Cases Solved with mtDNA.
    -   **Primary Keyword**: "mitochondrial DNA analysis forensics"

### 3. AI Instructions

-   **Action**: "You are an expert technical writer for the Forensic AI Hub. Generate 4 comprehensive, engaging, and well-structured articles based on the briefs provided above. Create each article as a separate, complete MDX file."
-   **Execution**: "Generate the articles sequentially. After each article is generated, confirm its completion before proceeding to the next."

### 4. Batch Completion

-   **Final Step**: Once all articles are created, commit them to the Git repository with a single, descriptive commit message.
-   **Commit Message**: `feat(content): Add Advanced DNA Analysis article series (Batch 8)`
```
