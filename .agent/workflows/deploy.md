---
description: Standard deployment workflow for pushing changes to production
---

# Deployment Workflow

This workflow covers the standard process for deploying code changes to the live Vera Terra website.

## Prerequisites

- All code changes tested locally (`npm run dev`)
- Build verification passed (`npm run build`)

## Steps

1. **Verify Current Branch**

```bash
git branch
```

Ensure you're on `main`. If not, switch to it.

// turbo
2. **Check Git Status**

```bash
git status
```

Review which files have been modified.

// turbo
3. **Stage All Changes**

```bash
git add .
```

1. **Commit with Descriptive Message**

```bash
git commit -m "feat: [describe your changes]"
```

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation update
- `style:` - Code formatting
- `refactor:` - Code restructuring
- `perf:` - Performance improvement

// turbo
5. **Push to Remote**

```bash
git push
```

This automatically triggers Vercel deployment.

1. **Monitor Deployment**

- Check Vercel dashboard for build status
- Typical build time: 1-2 minutes
- You'll receive deployment URL once complete

1. **Verify Live Site**

- Visit the deployed URL
- Test critical pages and functionality
- Ensure no visual regressions

## Rollback (if needed)

```bash
git revert HEAD
git push
```

## Notes

- Vercel auto-deploys from `main` branch
- Preview deployments created for PRs (if using branches)
- Always test locally before deploying
