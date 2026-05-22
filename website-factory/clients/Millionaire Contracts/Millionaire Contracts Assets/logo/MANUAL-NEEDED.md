# Logo Required -- Manual Supply Needed

The asset scraper attempted to harvest the Millionaire Contracts logo from
https://www.millionairecontracts.com but received no HTML response (site blocked
outbound scraping in this build environment).

## Action required

Katleho or the operator must supply the logo file before Stage 9 (hero image) and
Stage 10.1 (build) can complete.

## File placement

Drop the logo file at this path:

```
Millionaire Contracts Assets/logo/logo-original.[ext]
```

Accepted formats: SVG (preferred), PNG with transparent background, or high-resolution
JPG (minimum 800px wide).

## Also needed

If available, supply:

- `Millionaire Contracts Assets/founder-photos/katleho-mohlomi.[ext]` -- headshot or
  cutout of Katleho for the About page and hero section
- Any product/service screenshots for case study cards

## Why this matters

The hero image generator (Stage 9) uses the logo as a multimodal reference input.
Without the logo file, the hero image will be generated without brand colour
confirmation and will require manual review.
