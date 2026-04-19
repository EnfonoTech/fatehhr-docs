# Fateh HR — User Documentation

End-user documentation for the Fateh HR mobile app. Built with [VitePress](https://vitepress.dev/), deployed on Vercel.

## Develop

```bash
pnpm install
pnpm run dev     # localhost:5173
```

## Build

```bash
pnpm run build   # outputs docs/.vitepress/dist
pnpm run preview
```

## Deploy

The site is deployed on Vercel. Any push to the default branch triggers a rebuild.

## Structure

```
docs/
├── .vitepress/
│   └── config.mjs        # nav, sidebar, theme
├── public/               # static assets (logo, favicon, images)
├── guide/                # all user-facing content
│   ├── getting-started.md
│   ├── install.md
│   ├── login.md
│   ├── biometric.md
│   ├── check-in.md
│   ├── offline.md
│   ├── attendance.md
│   ├── leave.md
│   ├── expense.md
│   ├── payslip.md
│   ├── tasks.md
│   ├── profile.md
│   ├── language.md
│   ├── logout.md
│   ├── troubleshooting.md
│   └── faq.md
└── index.md              # landing page
```

Every guide page stands alone — each has "Next" links to the related pages so users can navigate either through the sidebar or by following the flow.

## License

MIT — see the parent project at [github.com/EnfonoTech/fatehhr](https://github.com/EnfonoTech/fatehhr).
