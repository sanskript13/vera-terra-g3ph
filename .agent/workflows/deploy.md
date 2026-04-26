---
description: Standard deployment workflow for pushing changes to production
---

# Deployment Workflow

This workflow covers the standard process for deploying code changes to the live Reverda website.

## Recommended: Use deploy.sh

```bash
./deploy.sh
```

This script automatically:
1. Checks for uncommitted changes
2. Shows diff since last commit
3. Runs `npm run build`
4. Asks for push confirmation

If deploy.sh passes, your deployment is safe.

## Manual Steps (if not using deploy.sh)

### Prerequisites

- All code changes tested locally (`npm run build`)
- Working tree is clean (no stray uncommitted files)

### Steps

// turbo
1. **Verify Current Branch**

   ```bash
   git branch
   ```

   Ensure you're on `main`.

// turbo
2. **Check Git Status**

   ```bash
   git status
   ```

   Review modified files. If there are unexpected changes, investigate before proceeding.

// turbo
3. **Build Verification (ZORUNLU)**

   ```bash
   npm run build
   ```

   > ⚠️ Build başarısızsa ASLA push etme.

4. **Stage ONLY Changed Files**

   ```bash
   # ✅ DO — specific files only
   git add app/page.tsx app/layout.tsx

   # ❌ DON'T — never use these
   # git add .
   # git add -A
   ```

5. **Commit with Descriptive Message**

   ```bash
   git commit -m "feat: [describe your changes]"
   ```

   Conventional commit prefixes:

   - `feat:` - New feature
   - `fix:` - Bug fix
   - `content:` - Content/text changes
   - `chore:` - Maintenance/cleanup
   - `style:` - Visual/CSS changes

// turbo
6. **Push to Remote**

   ```bash
   git push
   ```

   This automatically triggers Vercel deployment.

7. **Monitor Deployment**

   - Check Vercel dashboard for build status
   - Typical build time: 1-2 minutes
   - Verify live site after deployment

## Rollback (if needed)

```bash
# Revert last commit
git revert HEAD
git push

# OR hard reset to specific commit
git reset --hard <commit-hash>
git push --force
```

## Notes

- Vercel auto-deploys from `main` branch
- Always build locally before pushing
- Use `./deploy.sh` for the safest deployment path
