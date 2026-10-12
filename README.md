# BookNest — Responsive E-commerce Bookstore

A responsive Angular 18 single-page storefront created for the IBM Applied AI Specialist Manager Review activity. It demonstrates a product catalogue, category filters, live search, add-to-bag interactions, responsive layouts, and a small local book-recommendation helper.

## Run locally

Requirements: Node.js 18.19+ or 20.11+, npm.

```bash
npm install
npm start
```

Open `http://localhost:4200`. To make a production build, run `npm run build`.

## Features

- Responsive storefront layout for desktop and mobile
- Catalogue cards with category, author, rating and price
- Search by title, author or category
- Category filters
- Add-to-bag count and total, with user feedback
- Local recommendation helper based on the sample catalogue
- Semantic labels and keyboard-friendly native controls
- Standalone Angular component and typed book model

## AI-assisted development workflow (use IBM Bob if available)

This repository is the starter implementation. For the assessment, open the folder in your approved IDE and use IBM Bob (or the agentic tool approved for your environment) to review and improve it. Suggested prompts:

1. **Plan:** “Inspect this Angular bookstore. Create a concise implementation plan for accessibility, responsive behaviour, and maintainability. Do not edit files yet.”
2. **Review:** “Review the bookstore for Angular 18 best practices, accessibility, responsive UI and potential defects. Return findings ordered by severity.”
3. **Implement one improvement:** “Implement the highest-priority low-risk improvement from your review. Explain each changed file and why.”
4. **Verify:** “Run or guide me through the available build checks, identify errors, and propose fixes. Do not claim checks passed unless they actually ran successfully.”
5. **Reflect:** “Summarize the changes made, tests/build checks actually run, limitations, and remaining work for a code review.”

Review agent suggestions before accepting them, run the build locally, and describe only the actions you actually performed in your video. Do not claim the recommendation helper uses a hosted LLM: it is a deterministic local demo, not a production AI integration.

## Suggested next steps for a production version

- Connect a backend/API and persistent inventory
- Add routing, product detail pages and checkout flow
- Persist cart state and add automated unit/e2e tests
- Connect an approved AI recommendation service with privacy and security review

## GitHub

Create a new repository in your own GitHub account, then from this folder run:

```bash
git init
git add .
git commit -m "Build responsive BookNest bookstore UI"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/booknest-ai-store.git
git push -u origin main
```

Replace the remote URL with your actual repository URL before sharing it. Do not submit the placeholder URL.
