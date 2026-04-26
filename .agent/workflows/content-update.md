---
description: Update existing page content
---

# Content Update Workflow

Use this when you have new content (text, images) to integrate into an existing page.

## Pre-Flight Checklist (ZORUNLU)

Before making ANY changes:

```bash
# 1. Clean working tree kontrolü
git status

# 2. Doğru dosyayı bul — route yapısını kontrol et
ls app/          # Sadece production dosyaları burada olmalı
head -5 app/page.tsx   # Ana sayfa doğrulaması

# 3. Uncommitted changes varsa ÖNCE commit et
git add <files> && git commit -m "wip: save current state"
```

> ⚠️ ASLA uncommitted changes varken yeni düzenleme başlama.
> ⚠️ ASLA `git add -A` kullanma — sadece değişen dosyaları ekle.

## Active Pages (Nisan 2026)

| Route | Dosya | Durum |
|-------|-------|:-----:|
| `/` | `app/page.tsx` | ✅ Coming Soon |
| 404 | `app/not-found.tsx` | ✅ Aktif |

> Diğer sayfalar (blog, çözümler, vb.) silinmiştir.
> Full-site geliştirmesi için yeni branch açın.

## Steps

1. **Locate Target Page**

   - Homepage: `app/page.tsx`
   - Layout/meta: `app/layout.tsx`
   - Styles: `app/globals.css`

2. **Edit Content**
   Open the file and update:

   - Text content in JSX
   - Metadata (title, description) in `layout.tsx`
   - Links
   - Section headings

   **Remember**:

   - Escape Turkish characters: `'` → `&apos;`, `"` → `&quot;`
   - Keep existing Tailwind classes
   - Maintain component structure

3. **Add Images (if applicable)**

   ```bash
   # Copy images to public directory
   cp /path/to/image.png public/assets/
   ```

   Reference in code:

   ```tsx
   <img src="/assets/image.png" alt="Description" />
   ```

// turbo
4. **Build Verification (ZORUNLU — push öncesi)**

   ```bash
   npm run build
   ```

   Build başarısızsa ASLA push etme.

5. **Deploy**

   ```bash
   # Seçenek A: deploy.sh guard kullan (önerilen)
   ./deploy.sh

   # Seçenek B: manuel
   git add app/page.tsx app/layout.tsx   # sadece değişen dosyalar
   git commit -m "content: açıklama"
   git push
   ```

## Common Content Updates

### Text-Only Changes

Just edit JSX strings directly.

### Structural Changes

Consult with developer before modifying HTML structure.

### New Sections

Copy existing section patterns and adapt content.

## Notes

- Content changes don't require code review if structure is unchanged
- Always build locally before deploying
- Keep line breaks and paragraph spacing consistent
- Use `./deploy.sh` for safe deployments
