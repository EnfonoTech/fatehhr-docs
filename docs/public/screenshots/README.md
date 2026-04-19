# Screenshots

Drop PNG / JPG files here and reference them from any `.md` page.

## Recommended

- **Format:** PNG (lossless, crisp) or JPG (smaller)
- **Frame:** just the app, no phone chrome needed — VitePress styles it nicely
- **Width:** 300–400 px looks good in line with text; keep source at phone-native resolution (e.g. 1080×2400) and let the CSS scale
- **Dark status bar:** crop it out so all screenshots feel consistent

## Naming

Use dash-case matching the page that uses them:

```
home-hero.png
check-in-map.png
check-in-success.png
offline-sync-pending.png
leave-apply.png
leave-balance-gauges.png
expense-new-claim.png
payslip-detail.png
attendance-calendar.png
biometric-toggle.png
biometric-enroll-prompt.png
more-tab.png
```

## Embedding in markdown

```md
![Check-in success confirmation](/screenshots/check-in-success.png)
```

Or as a styled block with a caption:

```md
<figure>
  <img src="/screenshots/check-in-success.png" alt="Check-in success" />
  <figcaption>After tap, the button confirms "Recorded." and flips to "Check Out".</figcaption>
</figure>
```
