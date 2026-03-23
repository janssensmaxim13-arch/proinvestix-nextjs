# ProInvestiX Enterprise

🇲🇦 National Investment Platform for Morocco - WK 2030

## Architecture

```
proinvestix-nextjs/
├── proinvestix-api/        # FastAPI Backend (Python)
├── proinvestix-frontend/   # Next.js Web App (TypeScript)
├── proinvestix-desktop/    # Tauri Desktop App (Rust + Next.js)
└── proinvestix-deploy/     # Deployment Configs (Docker, Railway, Vercel)
```

## Quick Start

### Backend (FastAPI)
```bash
cd proinvestix-api
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend (Next.js)
```bash
cd proinvestix-frontend
npm install
npm run dev
```

### Desktop (Tauri)
```bash
cd proinvestix-desktop
npm install
npm run tauri:dev
```

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** FastAPI, SQLAlchemy, PostgreSQL
- **Desktop:** Tauri, Rust
- **Auth:** JWT

## Related

- [ProInvestiX Streamlit](https://github.com/janssensmaxim13-arch/pro-invest-x) - Demo/Development version
