# Sales Agencies Niche -- Hero Image Composition Guide

Used by Stage 9 (hero-image agent) and the Nano Banana image generation skill.

---

## Composition variants

### Variant A: Geometric precision (default)
Use when the client does not have a high-quality founder portrait.

Background: #0F1923 near-black.
Overlay: Abstract geometric grid at 8% opacity using #0EA5E9 lines on a dark base. Grid spacing: 60px x 60px. Horizontal and vertical lines only (graph paper grid, not diagonal).
Radial glow: sky-blue (#0EA5E9) radial gradient at 4% opacity, centered at the top 30% of the image.
Content: Text-only hero. No photographic element.

**Image generation prompt template (Variant A):**
"Dark navy background #0F1923, subtle geometric grid pattern at very low opacity, faint sky-blue radial glow at the top, minimalist, professional, B2B SaaS aesthetic, high contrast, no people, no stock photography, precision and authority"

---

### Variant B: Founder portrait (preferred when portrait is available)
Use when the client provides a high-quality founder headshot at minimum 600x600px.

Layout: Text block left 55% + portrait right 45%. Portrait has a gradient fade from the left (dark background blending into the portrait).
Background: #0F1923 on the left. Portrait on the right.
Portrait treatment: No border, no frame. Gradient fade starts at 40% width of the image from left, reaches full transparency at 60%.
Content: Text overlay on the left half only.

**Image generation prompt template (Variant B):**
"Dark navy professional portrait split composition, left half dark navy #0F1923 background, right half professional founder in office or studio setting, clean even lighting, confident posture, left-to-right horizontal gradient transition, no background clutter, B2B professional services, authoritative"

---

## Hero image specs

Dimensions: 1500px wide x 700px tall (minimum). Output: JPEG or WebP, quality 90+.
Text area: Left-centered column, max-width 860px, horizontally centered on the image or left-aligned for split composition.
Safe zone for overlay text: Top 60% of image height. Bottom 40% may be gradient-faded.

---

## What the hero image must never show

- Stock photography of smiling salespeople shaking hands
- Open-plan office with generic business people
- Handshake or briefcase stock image
- Any photography that could be described as "corporate stock"
- Lifestyle photography unrelated to B2B sales
- Warm tones or sunset lighting (this niche uses cool, professional palette)

---

## Fidelity checkpoint

The design-fidelity-qa-agent checks the hero SSIM region at threshold 0.90 with weight 0.25.
The hero is the highest-weight region in the quality gate. Stage 9 reruns image generation if the SSIM score falls below 0.88.
