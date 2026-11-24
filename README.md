# HATCH 🐣

**Find your people. Build what's next.**

## Overview

HATCH is a technology-focused networking and matchmaking platform designed to connect developers, tech entrepreneurs, designers, hackathon participants, and aspiring innovators with compatible collaborators.

Unlike traditional professional networking platforms, HATCH prioritizes meaningful collaboration over accumulating connections. Users discover people based on their technical skills, interests, experience, availability, working styles, and entrepreneurial goals.

Whether you're looking for a hackathon teammate, a startup cofounder, or someone to build your next project with, HATCH helps you find the right people.

## Core Features

- **Builder Profiles:** Personalized profiles showcasing skills, experience, interests, education, and collaboration goals.
- **Intelligent Matching:** Personalized recommendations based on compatibility and complementary skills.
- **Builder Discovery:** Browse, filter, and connect with potential collaborators.
- **Mutual Connections:** Establish connections through mutual interest.
- **Direct Messaging:** Communicate with connections and exchange ideas.
- **Group Chats:** Form teams and collaborate in shared conversations.
- **Hackathon Discovery:** Explore upcoming hackathons and connect with potential teammates.
- **Privacy & Safety:** Profile verification, age-appropriate matching, reporting, blocking, and secure messaging.

## Proposed Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend development |
| TypeScript | Type-safe application logic |
| Vite | Frontend build tooling |
| Tailwind CSS | Responsive UI and styling |
| FastAPI | Backend API and matching service |
| Python | Recommendation and matching algorithms |
| Supabase | Authentication, storage, and real-time messaging |
| PostgreSQL | Relational database |
| pgvector | Future semantic matching and vector search |
| Vercel | Frontend deployment |
| Render | Backend deployment |
| Git & GitHub | Version control |
| Figma | UI/UX design |

## Matching System

HATCH recommends collaborators based on multiple compatibility factors:

- Technical and complementary skills
- Collaboration objectives
- Experience level
- Shared interests
- Availability and commitment
- Working preferences
- University and regional preferences
- Upcoming hackathons and events

The initial recommendation system will use weighted compatibility scoring, with future plans to incorporate semantic search and AI-powered recommendations.

## Target Audience

- Computer science and engineering students
- Software developers
- Tech entrepreneurs and aspiring founders
- Hackathon participants
- UI/UX and product designers
- Product managers
- Technology researchers and innovators

## Development Roadmap

- [ ] Landing page and brand identity
- [ ] Authentication and account management
- [ ] User onboarding
- [ ] Builder profiles
- [ ] Database architecture
- [ ] Compatibility matching algorithm
- [ ] Builder discovery and filtering
- [ ] Mutual connections
- [ ] Direct messaging
- [ ] Group chats and team formation
- [ ] Hackathon directory
- [ ] Privacy, security, and moderation
- [ ] Beta testing
- [ ] Public deployment

## Project Status

Currently in early-stage development.

## Mission

To make meaningful technological collaboration more accessible by connecting people who share the curiosity, ambition, and desire to build.

## Vision

A global ecosystem where builders can discover their teammates, cofounders, and collaborators, regardless of their existing professional networks.

---

**Great ideas deserve great teams.**
## Local development

Use Node.js 24 and Python 3.11 or newer. Install the frontend and backend dependencies from the repository root.

```powershell
npm.cmd ci
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r backend/requirements.txt
```

Start FastAPI and Vite in separate terminals.

```powershell
.\.venv\Scripts\python.exe -m uvicorn backend.main:app --reload
```

```powershell
npm.cmd run dev
```

Vite serves the frontend on port 5173 and proxies `/api` to FastAPI on port 8000. Check `/api/health` through Vite or open `/docs` directly on FastAPI for the API explorer. On macOS and Linux, use `npm` and `.venv/bin/python`.

Copy `.env.example` to `.env.local` if you need a different local API target or have hosted account URLs. Set `VITE_HATCH_LOGIN_URL` and `VITE_HATCH_SIGNUP_URL` before building to enable those destinations.

Run `npm run lint`, `npm run typecheck`, and `npm run build` to verify the frontend. The production build goes to `dist/`. Configure your production host to serve the Vite entry page for `/account` and forward `/api/*` to the FastAPI service.
