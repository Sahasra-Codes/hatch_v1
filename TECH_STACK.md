# Hatch — Tech Stack & Engineering Plan

The current workspace contains a React landing page and a FastAPI service with a health endpoint. See the [local development instructions](README.md#local-development) for commands and environment settings.

## Current stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React, TypeScript, Vite | UI, development server, and production build |
| Styling | Tailwind CSS and CSS custom properties | Responsive layout, brand tokens, and motion |
| Icons | Lucide React | Interface and demo icons |
| API | FastAPI and Python | Backend endpoints and generated API documentation |
| API server | Uvicorn | Runs the FastAPI application |
| Code quality | ESLint, TypeScript, and Prettier | Linting, type checking, and formatting |

The frontend starts at `index.html` and `app/main.tsx`. Landing sections live in `components/`. The API starts at `backend/main.py`. Vite proxies relative `/api` requests to the backend during development and preview.

Account links use public hosted URLs set at build time. Keep credentials and API secrets in the backend environment. The swipe demo uses sample profiles, and the contribution chart uses illustrative data.

## Planned platform services

| Layer | Technology | Intended use |
|---|---|---|
| Database | PostgreSQL | Profiles, skills, projects, events, connections, and messages |
| Authentication | Supabase Auth | User accounts and session management |
| Media and real-time updates | Supabase | Profile media and messaging |
| Matching | Python and SQL | Weighted compatibility based on skills, interests, availability, and goals |
| Semantic search | pgvector | Future retrieval and matching improvements |
| Hosting | Vercel and Render | Frontend and backend deployment targets |

Likely data entities include profiles, skills, projects, project members, hackathons, connections, reports, blocks, and notifications. Define authorization, visibility, retention, reporting, and blocking before handling real member data. Keep matching criteria explainable and treat contribution activity as context for a builder's work.
