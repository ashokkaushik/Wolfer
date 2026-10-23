---
name: Architectural Precision System
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00014'
  primary: '#ba0013'
  on-primary: '#ffffff'
  primary-container: '#e31e24'
  on-primary-container: '#fffafa'
  inverse-primary: '#ffb4ab'
  secondary: '#8c4f00'
  on-secondary: '#ffffff'
  secondary-container: '#fd9923'
  on-secondary-container: '#663800'
  tertiary: '#5c5b5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#757474'
  on-tertiary-container: '#fffbfb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb874'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6b3b00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
  headline-xl:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-spec:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
---

## Brand & Style

This design system translates the industrial strength of tile manufacturing into a premium architectural narrative. The brand personality is authoritative, precise, and sophisticated, targeting architects, interior designers, and high-end contractors. 

The aesthetic is rooted in **Industrial Minimalism** with an **Editorial** layout. It emphasizes structural integrity through sharp geometry and high-contrast transitions. Every interface element should feel engineered rather than decorated, avoiding soft aesthetics like rounded corners or translucent glass in favor of solid planes, crisp lines, and massive typographic hierarchies.

## Colors

The palette is anchored by the interplay between **Off-White (#F9F8F6)** and **Charcoal (#1A1A1A)**, creating a canvas that mimics high-end architectural materials like stone and steel.

- **Wolfer Red (#E31E24):** Used for primary brand moments, critical CTAs, and logo-mark alignment.
- **Orange (#F7941D):** Reserved for highlighting technical features or secondary brand accents.
- **Adhesive Green (#2E7D32):** Product-specific category color for adhesive lines.
- **Grout Navy (#1A237E):** Product-specific category color for epoxy grout lines.

Transitions between Light and Dark modes should be handled as "Material Zones." Use Charcoal backgrounds for high-impact hero sections and technical spec summaries to evoke a sense of premium durability.

## Typography

The typographic strategy relies on the tension between the condensed, vertical power of **Oswald** and the neutral, institutional clarity of **Public Sans**.

- **Display Headlines:** Must be uppercase and condensed. Use for product names, hero messaging, and section titles to create a "wall of text" effect that feels as solid as a tiled surface.
- **Body & Technical Copy:** Public Sans provides a readable, grounded contrast. It should be used for all technical specifications, descriptions, and UI labels.
- **Scale:** Maintain a dramatic scale difference between headlines and body text to reinforce the editorial feel. Use `label-caps` for category eyebrow text.

## Layout & Spacing

The design system utilizes an **Asymmetrical Editorial Grid** to avoid the predictability of standard corporate layouts.

- **Desktop (1440px+):** 12-column grid. Use intentional "empty" columns to create asymmetrical balance. Content should often span columns 1-7 or 5-12 rather than centering.
- **Sectioning:** Use large vertical gaps (`section-gap`) to allow architectural photography to breathe.
- **Material Breaks:** Color transitions (e.g., switching from Off-White to Charcoal) should happen on full-width horizontal bands with 0px margin between sections to simulate layered materials.
- **Alignment:** Technical data and specs should be hard-aligned to the left or right grid edges, never centered.

## Elevation & Depth

This system avoids "floating" elements. Depth is communicated through **Tonal Layering** and **Industrial Shadows**.

- **Tonal Layers:** Objects sit on the surface or are inset. Use subtle shifts in value (e.g., #F2F1EF on #F9F8F6) to define card boundaries rather than heavy borders.
- **Shadows:** When used for product cards, shadows should be "Physical"—short, crisp, and slightly offset to one side (e.g., `4px 4px 0px rgba(0,0,0,0.05)`), simulating a tile mounted to a wall.
- **Outlines:** Use 1px solid borders for input fields and tables in a mid-tone grey (#D1D1D1) to maintain a technical, architectural drawing aesthetic.

## Shapes

The shape language is strictly **Rectilinear**. All components—buttons, cards, input fields, and images—must have **0px corner radius**. This reinforces the "Tile" metaphor and the precision of architectural materials. Rounded shapes are strictly prohibited as they conflict with the industrial nature of the product.

## Components

### Buttons
- **Primary:** Solid Charcoal (#1A1A1A) with White text. Sharp edges. Rectangular.
- **Secondary:** Transparent background with 2px Charcoal border.
- **Interaction:** On hover, primary buttons shift to Wolfer Red (#E31E24).

### Product Cards
- No borders. Use a very subtle "Hard" shadow to create a 3D lift effect.
- The product image should be silhouetted (no background) to emphasize the packaging design.
- Typography within the card must follow the strict `label-caps` for the category and `headline-lg` for the product name.

### Technical Tables
- Architectural style: Horizontal lines only (no vertical lines).
- Header row: Charcoal background with White uppercase text.
- Row hover: Subtle shift to Light Grey (#F2F1EF).

### Input Fields
- Underline-only or full 1px border.
- Focus state: Border color changes to Wolfer Red (#E31E24).
- Placeholder text in Public Sans, light weight.

### Navigation
- Desktop: Full-width, minimal height. Links in `label-caps`. 
- CTAs in the nav (e.g., "Request Quote") should be styled as Primary Buttons but smaller in scale.
