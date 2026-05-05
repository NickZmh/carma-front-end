# Claude Code — Project Instructions

## Stack
- Next.js 14+ App Router, TypeScript strict mode
- TailwindCSS + shadcn/ui (Radix-based)
- Zod for validation, next/font for typography

---

## Folder structure

```
src/
├── components/
│   ├── ui/          ← shadcn primitives ONLY, never modify
│   ├── shared/      ← reusable custom components (used in 2+ places)
│   ├── features/    ← domain-specific components
│   ├── sections/    ← full page sections
│   └── layouts/     ← page layout wrappers
├── lib/
│   ├── utils.ts     ← cn() and helpers
│   └── validators/  ← zod schemas
├── hooks/           ← custom React hooks
├── types/           ← global TypeScript types
└── config/
    ├── site.ts      ← siteConfig
    └── tokens.ts    ← design tokens reference
```

---

## Component rules

1. Use shadcn/ui primitives from /components/ui — never recreate them.
2. Feature components go in /components/features
3. Page sections go in /components/sections/
4. Always use `cn()` from @/lib/utils for conditional classes.
5. No inline styles — only Tailwind classes.
6. Props interface before the component, exported as `{ComponentName}Props`.
7. Use Server Components by default. Add `"use client"` only when needed
   (event handlers, hooks, browser APIs).

---

## ⚠️ Before generating ANY component — mandatory checklist

Before writing a single line of code, always follow this order:

**STEP 1 — Check /components/ui (shadcn)**
- Does a shadcn/ui primitive cover this need?
- If YES: import and use it directly. Never recreate.
- shadcn components: Button, Input, Card, Badge, Dialog, Sheet,
  Select, Checkbox, RadioGroup, Switch, Tabs, Table, Avatar,
  Tooltip, Popover, DropdownMenu, NavigationMenu, Form, Label,
  Separator, Skeleton, ScrollArea, Progress, Alert, Toast,
  Sidebar, Command, Calendar, Carousel, Chart...

**STEP 2 — Check /components/shared**
- Run: `find src/components/shared -name "*.tsx" | head -50`
- Does a shared component already solve this need (even partially)?
- If YES: use or extend it — do NOT create a duplicate.
- If SIMILAR exists: refactor it to accept new props instead.

**STEP 3 — Only then create**
- Used in 1 place only → /components/features/{domain}/
- Used in 2+ places    → /components/shared/
- Full page block      → /components/sections/

---

## ⚠️ Composite shadcn components — critical rule

Some shadcn components are COMPOSITE — they ship with built-in
sub-components. Always use them, never recreate.

- Before building any UI block — check if shadcn has a composite
  component for it (Sidebar, Table, Form, Dialog, Tabs, Card etc.)
- If yes — use ALL its sub-components as intended by shadcn.
  Never replace sub-components with plain divs, buttons, or custom elements.
- Check available sub-components by reading the existing file in
  /components/ui/ before writing any code.
- If a sub-component exists for the job — use it.

Examples:
- Nav item inside Sidebar   → SidebarMenuButton, not Button
- Row inside Table          → TableRow + TableCell, not div
- Item inside DropdownMenu  → DropdownMenuItem, not button
- Content inside Card       → CardHeader + CardContent, not div


Chart (Recharts wrapper):
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent

- Always wrap charts in ChartContainer with config prop
- ChartConfig defines colors and labels for each data key
- Never use Recharts components directly without ChartContainer
- Colors reference CSS vars via ChartConfig:
  config = { revenue: { color: "hsl(var(--chart-1))" } }
- Chart color vars already defined in globals.css — use --chart-1 through --chart-5

---

## ⚠️ /components/ui/ contamination rule

Never add non-shadcn code into existing /components/ui/ files.
If a shadcn file needs extension → create in /components/shared/ instead.

Periodic check: each /components/ui/ file must contain
only its own component and its own sub-components — nothing else.

## shadcn update strategy

- /components/ui/     — vanilla shadcn only, never customize
- /components/shared/ — all extensions and customizations live here
- On shadcn update: only /ui files are overwritten, /shared is safe

---

## Naming conventions

- Components:  PascalCase        → HeroSection.tsx
- Hooks:       camelCase + use   → useMediaQuery.ts
- Utils:       camelCase         → formatDate.ts
- Types:       PascalCase suffix → UserCardProps, SiteConfig
- Files:       match component name exactly

---

## Figma → code mapping

- Figma frame      → Section component (/sections)
- Figma group      → Feature or Shared component
- Figma atom       → shadcn/ui primitive or /shared component
- Auto Layout      → flex / grid Tailwind
- Figma nav item   → SidebarMenuButton / NavigationMenuLink
- Figma table row  → TableRow + TableCell
- Figma card       → Card + CardHeader + CardContent
- Repeated element → always goes to /shared

### Figma Chart → shadcn Chart mapping

Before building any chart — check if shadcn has it installed.
run: find src/components/ui -name "*chart*"

Figma naming → shadcn Chart type:
- "Chart / Line Chart"        → AreaChart or LineChart
- "Chart / Bar Chart"         → BarChart
- "Chart / Pie Chart / Donut" → PieChart with innerRadius (donut)
- "Chart / Pie Chart"         → PieChart
- "Chart / Radar Chart"       → RadarChart
- "Chart / Radial Chart"      → RadialBarChart

Always use this structure:
<ChartContainer config={chartConfig} className="...">
  <PieChart>
    <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
  </PieChart>
</ChartContainer>

Rules:
- NEVER build custom SVG charts — always use shadcn Chart wrapper
- Chart component goes in features/{domain}/{ChartName}/
- chartConfig must use --chart-1 through --chart-5 CSS vars
- Always pass className with explicit width/height to ChartContainer

## Figma component naming → code mapping

- `Card`           → use shadcn Card directly from /components/ui
- `_Card`          → shadcn Card + custom props → /components/shared/
- `_Chart / Card`  → feature component using Card as base → /components/features/{domain}/
- Prefix `_`       → always custom, never vanilla shadcn
- Slash `/`        → parent/child relationship in Figma, not a file path

---

## Assets & images

### Static assets → /public

```
public/
├── images/
│   ├── logo/        ← svg, png, webp
│   ├── icons/       ← static icons (not lucide)
│   ├── backgrounds/ ← background images
│   └── og/          ← og:image for social
└── fonts/           ← local fonts if not via next/font
```

Rules:
- Always use Next.js `<Image />` from "next/image" — never `<img>`
- SVG icons → prefer lucide-react, fallback to /public/images/icons
- File names: kebab-case (hero-background.webp, logo-dark.svg)
- Prefer .webp over .jpg/.png for photos
- Prefer .svg for logos and icons

### Dynamic assets → CDN (Cloudinary / S3 / Uploadthing)

- User uploads: avatars, photos, documents — never store in /public
- Always configure domains in next.config.ts:
  ```ts
  images: { remotePatterns: [{ hostname: "res.cloudinary.com" }] }
  ```

### Figma assets export

- Icons        → SVG  → /public/images/icons/
- Illustrations → SVG or WebP → /public/images/
- Logos        → SVG + PNG fallback → /public/images/logo/
- Use `mcp__figma__download_figma_images` to download directly to correct folder

---

## Import order (enforce always)

1. React / Next.js
2. Third-party libraries
3. @/components/ui
4. @/components/shared
5. @/components/features
6. @/lib / @/hooks / @/types
7. Relative imports