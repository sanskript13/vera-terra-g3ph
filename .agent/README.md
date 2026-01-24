# Vera Terra Web Development Workspace

## 🎯 Workspace Purpose

This is the **central web development workspace** for the Vera Terra regenerative agriculture platform. All website development, testing, and deployment operations are managed from here.

**Repository**: `sanskript13/vera-terra-g3ph`  
**Live URL**: TBD (Vercel deployment)  
**Local Dev**: `http://localhost:3000`

---

## 📂 Workspace Structure

```
reverda web01/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Gateway Homepage (v1)
│   ├── components/          # Shared React components
│   ├── cozumler/            # Solutions hub & pages
│   ├── tasarim-lab/         # Design experiments
│   ├── blog/                # Blog posts
│   └── ...                  # Other routes
├── public/                   # Static assets (images, etc)
├── tasarım dosyaları/        # Design briefs & references
├── .agent/                   # Workspace configuration (this)
│   ├── workflows/           # Automation workflows
│   └── README.md            # This file
├── package.json             # Dependencies
└── next.config.ts           # Next.js configuration
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel (auto-deploy from `main` branch)
- **CMS**: None (content provided externally)

---

## 🚀 Quick Start

### Development

```bash
npm run dev       # Start local server on :3000
npm run build     # Production build (verify before deploy)
npm run lint      # Check code quality
```

### Git & Deployment

```bash
git add .
git commit -m "feat: describe change"
git push          # Auto-deploys to Vercel
```

---

## ✅ System Health Check

### Build Status

- ✅ **Build**: Passes (`npm run build` successful)
- ✅ **TypeScript**: No errors
- ✅ **Routes**: 31 pages rendering correctly
- ⚠️ **Lint**: Minor Turkish character escaping issues (non-blocking)

### Key Routes

- `/` - Gateway Homepage v1
- `/cozumler` - Solutions Hub
- `/cozumler/antep-fistigi` - Pistachio program (detailed)
- `/nasil-calisir` - How it works (5-step methodology)
- `/tasarim-lab` - Design experiments
- `/tasarim-lab/v1-home` - Archived original homepage

---

## 🎨 Design System

**Brand Identity**: Hybrid Realism (Tech + Nature)

### Colors

- **Primary**: `--color-neon-blue` (#00FFFF)
- **Accent**: `--color-accent-pop` (#FF6B35)
- **Soil Tones**: Olive (`#5F6F52`), Pistachio (`#93C572`)

### Themes

- System 1 (Saha Gerçekliği): Olive/Natural
- System 2 (Quiet Confidence): Editorial/Minimal
- System 3 (Pistachio Reality): Product-specific

---

## 📋 Content Management

**IMPORTANT**: This workspace is **code-only**. Content is prepared externally and provided via:

- Direct text in prompts
- Markdown files (placed in `/tasarım dosyaları` for reference)
- SSOT documents from other workspaces

**Do NOT**:

- Mix content strategy with code development
- Store long-form content in this workspace
- Use this workspace for brand/copywriting

---

## 🔄 Workflows

### Standard Development Cycle

1. Receive content/design requirements
2. Implement in appropriate route/component
3. Test locally (`npm run dev`)
4. Verify build (`npm run build`)
5. Commit & push (triggers Vercel deployment)
6. Verify live deployment

### Adding New Pages

```bash
# Create page file
touch app/new-page/page.tsx

# Add to navigation (if needed)
# Edit: app/components/Navbar.tsx

# Test & deploy
npm run dev
npm run build
git add . && git commit -m "feat: add new page" && git push
```

---

## 🐛 Common Issues

### Issue: Unescaped Turkish characters

**Fix**: Replace `'` with `&apos;` and `"` with `&quot;` in JSX

### Issue: Images not loading

**Check**: Images must be in `/public/assets/` and referenced as `/assets/filename.ext`

### Issue: Build warnings about workspace root

**Status**: Non-critical, related to monorepo detection

---

## 📊 Current Project Status

**Phase**: Production-ready, iterative improvements  
**Last Major Update**: Gateway Homepage v1 (2026-01-22)

### Completed

- ✅ Full site architecture (31 routes)
- ✅ Design system & theming
- ✅ Gateway homepage
- ✅ Solutions hub with detailed pages
- ✅ Design lab with 7 experiments
- ✅ Dark mode toggle
- ✅ Vercel deployment pipeline

### In Progress

- 🔄 Content population (external)
- 🔄 Fine-tuning typography & spacing

### Backlog

- MRV methodology page (placeholder exists)
- Certification/compliance page (placeholder exists)
- Additional sectoral programs (Cotton, Cereals)
- Blog content expansion

---

## 🎯 Recommendations for Workspace Optimization

### 1. Create `.agent/workflows/` Directory

Automate repetitive tasks:

- `deploy.md` - Standard deployment workflow
- `new-page.md` - Page creation template
- `content-update.md` - Content integration workflow

### 2. Add Vercel Configuration

Create `vercel.json` for deployment settings:

- Environment variables
- Build optimization
- Redirects/rewrites

### 3. Enhance `.gitignore`

Ensure clean version control:

- Ignore design files if not needed in repo
- Separate content staging area

### 4. Documentation Hygiene

- Keep this README updated
- Document custom components in `/app/components/`
- Maintain changelog for major releases

---

## 🔗 Related Resources

- **Design Briefs**: `/tasarım dosyaları/Design_Brief_*.md`
- **Audit Report**: `/tasarım dosyaları/Vera_Terra_Audit_Report.md`
- **Previous Task History**: Conversation ID `1a0dcba7-b8d1-4ddf-86b9-4d91b89573da`

---

**Last Updated**: 2026-01-24  
**Workspace Owner**: sans  
**Agent**: Antigravity (Claude 4.5 Sonnet Thinking)
