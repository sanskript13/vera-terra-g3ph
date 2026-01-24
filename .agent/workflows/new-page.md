---
description: Create a new page in the Next.js app
---

# New Page Creation Workflow

Use this workflow when adding a new page/route to the Vera Terra website.

## Steps

// turbo

1. **Create Page Directory**

```bash
mkdir -p app/[page-name]
```

Replace `[page-name]` with kebab-case route name (e.g., `yeni-sayfa`)

1. **Create Page Component**

```bash
touch app/[page-name]/page.tsx
```

1. **Add Basic Page Template**
Copy this template into the new `page.tsx`:

```tsx
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sayfa Başlığı | Vera Terra",
  description: "Sayfa açıklaması"
};

export default function YeniSayfa() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Sayfa Başlığı</h1>
          <p className="text-lg opacity-70">İçerik buraya gelecek.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
```

1. **Add to Navigation (if needed)**
Edit `app/components/Navbar.tsx` to add the page to the menu:

```tsx
const navLinks = [
  // ... existing links
  { name: 'Yeni Sayfa', href: '/yeni-sayfa' },
];
```

// turbo
5. **Test Locally**

```bash
npm run dev
```

Visit `http://localhost:3000/yeni-sayfa`

// turbo
6. **Verify Build**

```bash
npm run build
```

1. **Deploy**
Follow the `/deploy` workflow to push changes live.

## Page Type Templates

### Content Page

Use the template above.

### Landing Page (No Nav/Footer)

Remove `<Navbar />` and `<Footer />` imports.

### Dynamic Route

Create `app/[page-name]/[slug]/page.tsx` for dynamic segments.

## Notes

- Always include SEO metadata
- Follow existing component patterns
- Use Tailwind CSS variables for colors
- Escape Turkish characters (`&apos;` for `'`, `&quot;` for `"`)
