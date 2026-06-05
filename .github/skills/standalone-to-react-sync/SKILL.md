---
name: standalone-to-react-sync
description: 'Convert and sync standalone HTML website changes into the React app structure. Use when migrating edits from index-standalone.html to src pages/components, reconciling content drift, syncing image assets to public, and preparing one React deployment path.'
argument-hint: 'Describe what changed in standalone and what must match in React'
user-invocable: true
---

# Standalone to React Sync

## When to Use
- You made quick changes in `index-standalone.html` and now need React to match.
- Mobile preview looked right in standalone, but React content/style differs.
- You want one production source of truth in React before deployment.

## Inputs
- What sections changed in standalone (hero, about, booking, pricing, etc.).
- Whether to preserve wording exactly or improve copy.
- Any new local assets added during standalone edits.

## Procedure
1. Inspect current standalone edits.
2. Inspect corresponding React files in `src/pages` and `src/components`.
3. Create a mismatch list (content, layout, pricing logic, links, and assets).
4. Copy missing images into `public/` and update React paths (`/filename.ext`).
5. Apply minimal React patches that preserve existing app structure.
6. Re-check key workflows:
- Navigation and CTA links
- Booking estimate logic
- Policy text and labels
- Mobile and desktop parity
7. Run error checks and (if available) build validation.
8. Report exactly what is now synchronized and what remains intentionally different.

## Sync Checklist
- Headings, subheadings, and hero CTA text match.
- About page identity details match (full name, credentials, bio text).
- Gallery/testimonials references match intended source.
- Booking calculator logic matches standalone (rates, discounts, travel, add-ons).
- Policy wording is consistent across pricing and booking forms.
- All referenced images exist in `public/`.

## Deliverable
- A concise summary of aligned files.
- Any unresolved deltas called out explicitly.
- Deployment recommendation: React app as single source of truth.
