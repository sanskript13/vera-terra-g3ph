---
description: Update existing page content
---

# Content Update Workflow

Use this when you have new content (text, images) to integrate into an existing page.

## Prerequisites

- Content provided as text/markdown
- Images (if any) in correct format

## Steps

1. **Locate Target Page**
Identify which file to edit:

- Homepage: `app/page.tsx`
- Solutions hub: `app/cozumler/page.tsx`
- Specific solution: `app/cozumler/[name]/page.tsx`
- About: `app/hakkimizda/page.tsx`
- Blog post: `app/blog/[slug]/page.tsx`

1. **Backup Current Version** (optional but recommended)

```bash
cp app/page.tsx app/page.tsx.backup
```

1. **Edit Content**
Open the file and update:

- Text content in JSX
- Metadata (title, description)
- Links
- Section headings

**Remember**:

- Escape Turkish characters: `'` → `&apos;`, `"` → `&quot;`
- Keep existing Tailwind classes
- Maintain component structure

1. **Add Images (if applicable)**

```bash
# Copy images to public directory
cp /path/to/image.png public/assets/
```

Reference in code:

```tsx
<img src="/assets/image.png" alt="Description" />
```

// turbo
5. **Test Changes Locally**

```bash
npm run dev
```

Verify content renders correctly.

// turbo
6. **Lint Check**

```bash
npm run lint
```

Fix any errors (usually unescaped characters).

// turbo
7. **Build Verification**

```bash
npm run build
```

1. **Deploy**
Use `/deploy` workflow to push live.

## Common Content Updates

### Text-Only Changes

Just edit JSX strings directly.

### Structural Changes

Consult with developer before modifying HTML structure.

### New Sections

Copy existing section patterns and adapt content.

## Notes

- Content changes don't require code review if structure is unchanged
- Always preview locally before deploying
- Keep line breaks and paragraph spacing consistent
