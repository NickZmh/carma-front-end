export const tokens = {
  colors: {
    background:              { cssVar: "--background",              tailwind: "bg-background",              hex: "#FAFAFA", figmaKey: "fill_J5UQ7L" },
    foreground:              { cssVar: "--foreground",              tailwind: "text-foreground",             hex: "#0A0A0A", figmaKey: "fill_BR3BDS" },
    card:                    { cssVar: "--card",                    tailwind: "bg-card",                    hex: "#FFFFFF" },
    "card-foreground":       { cssVar: "--card-foreground",        tailwind: "text-card-foreground",        hex: "#0A0A0A" },
    popover:                 { cssVar: "--popover",                 tailwind: "bg-popover",                 hex: "#FFFFFF" },
    "popover-foreground":    { cssVar: "--popover-foreground",     tailwind: "text-popover-foreground",     hex: "#0A0A0A" },
    primary:                 { cssVar: "--primary",                 tailwind: "bg-primary",                 hex: "#F97316", figmaKey: "fill_NONS1J" },
    "primary-foreground":    { cssVar: "--primary-foreground",     tailwind: "text-primary-foreground",     hex: "#FAFAFA" },
    secondary:               { cssVar: "--secondary",               tailwind: "bg-secondary",               hex: "#F5F5F5", figmaKey: "fill_M7S5X5" },
    "secondary-foreground":  { cssVar: "--secondary-foreground",   tailwind: "text-secondary-foreground",   hex: "#171717", figmaKey: "fill_Y8TLNJ" },
    muted:                   { cssVar: "--muted",                   tailwind: "bg-muted",                   hex: "#F5F5F5" },
    "muted-foreground":      { cssVar: "--muted-foreground",       tailwind: "text-muted-foreground",       hex: "#737373", figmaKey: "fill_81CKHK" },
    accent:                  { cssVar: "--accent",                  tailwind: "bg-accent",                  hex: "#F5F5F5" },
    "accent-foreground":     { cssVar: "--accent-foreground",      tailwind: "text-accent-foreground",      hex: "#171717" },
    destructive:             { cssVar: "--destructive",             tailwind: "bg-destructive",             hex: "#DC2626", figmaKey: "fill_9KLXX8" },
    border:                  { cssVar: "--border",                  tailwind: "border-border",              hex: "#E5E5E5", figmaKey: "fill_OVTKPT" },
    input:                   { cssVar: "--input",                   tailwind: "border-input",               hex: "#E5E5E5" },
    ring:                    { cssVar: "--ring",                    tailwind: "ring-ring",                  hex: "#A3A3A3" },
    "code-surface":          { cssVar: "--card",                    tailwind: "bg-card",                    hex: "#18181B", figmaKey: "fill_SZY6N2" },
    "table-stripe":          { cssVar: "--secondary",               tailwind: "bg-secondary",               hex: "#F5F5F5", figmaKey: "fill_RJN8L1" },
  },

  typography: {
    "heading-1-desktop": {
      figmaStyle: "text-5xl/leading-normal/extrabold",
      tailwind: "text-5xl font-extrabold leading-none",
      fontFamily: "Figtree",
      fontSize: 48,
      fontWeight: 800,
      lineHeight: "48px",
    },
    "heading-1-mobile": {
      figmaStyle: "text-4xl/leading-normal/extrabold",
      tailwind: "text-4xl font-extrabold leading-none",
      fontFamily: "Figtree",
      fontSize: 36,
      fontWeight: 800,
      lineHeight: "40px",
    },
    "heading-2": {
      figmaStyle: "text-3xl/leading-normal/semibold",
      tailwind: "text-3xl font-semibold leading-none",
      fontFamily: "Figtree",
      fontSize: 30,
      fontWeight: 600,
      lineHeight: "36px",
    },
    "heading-3": {
      figmaStyle: "text-2xl/leading-normal/semibold",
      tailwind: "text-2xl font-semibold leading-none",
      fontFamily: "Figtree",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "32px",
    },
    "heading-4": {
      figmaStyle: "text-xl/leading-normal/semibold",
      tailwind: "text-xl font-semibold",
      fontFamily: "Figtree",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "28px",
    },
    lead: {
      figmaStyle: "text-xl/leading-normal/normal",
      tailwind: "text-xl font-normal",
      fontFamily: "Figtree",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "28px",
    },
    large: {
      figmaStyle: "text-lg/leading-normal/semibold",
      tailwind: "text-lg font-semibold",
      fontFamily: "Figtree",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "28px",
    },
    body: {
      figmaStyle: "text-base/leading-normal/normal",
      tailwind: "text-base font-normal",
      fontFamily: "Figtree",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    },
    "body-bold": {
      figmaStyle: "text-base/leading-normal/bold",
      tailwind: "text-base font-bold",
      fontFamily: "Figtree",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "24px",
    },
    "body-medium": {
      figmaStyle: "text-base/leading-normal/underlined (medium)",
      tailwind: "text-base font-medium underline",
      fontFamily: "Figtree",
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    small: {
      figmaStyle: "text-sm/leading-normal/medium",
      tailwind: "text-sm font-medium",
      fontFamily: "Figtree",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "20px",
    },
    "label-caps": {
      figmaStyle: "style_5XU05J",
      tailwind: "text-xs font-light uppercase tracking-widest",
      fontFamily: "Figtree",
      fontSize: 12,
      fontWeight: 300,
      lineHeight: "16px",
      letterSpacing: "5%",
      textTransform: "uppercase" as const,
    },
    "code-block": {
      figmaStyle: "style_0VNF91",
      tailwind: "font-mono text-base",
      fontFamily: "Menlo",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    },
  },

  spacing: {
    "1": "8px",
    "2": "16px",
    "3": "24px",
    "4": "32px",
    "5": "40px",
    "8": "64px",
    "16": "128px",
  },

  radius: {
    sm: "6px",   /* InlineCode */
    md: "10px",  /* Code blocks, Doc links */
    lg: "14px",  /* Dark preview panels */
    xl: "16px",  /* Light preview panels */
  },

  shadows: {
    xs:   "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    ring: "0px 0px 0px 4px rgba(163, 163, 163, 1), 0px 0px 0px 2px rgba(250, 250, 250, 1)",
  },

  animation: {
    durationFast:   "150ms",
    durationNormal: "300ms",
    easing:         "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export type TokenColor = keyof typeof tokens.colors;
export type TokenTypography = keyof typeof tokens.typography;
export type TokenSpacing = keyof typeof tokens.spacing;
export type TokenRadius = keyof typeof tokens.radius;
export type TokenShadow = keyof typeof tokens.shadows;
