import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Fateh HR",
  description:
    "Field-team HR app for check-in, leave, expense, payslips — offline-ready.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#2E5D5A" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Fateh HR — User Guide",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "How to use the Fateh HR mobile app — check-in, leave, expense, payslip. Works offline.",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Fateh HR",

    nav: [
      { text: "Home", link: "/" },
      { text: "User Guide", link: "/guide/getting-started" },
      { text: "FAQ", link: "/guide/faq" },
      {
        text: "Install",
        link: "/guide/install",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Start here",
          items: [
            { text: "Getting started", link: "/guide/getting-started" },
            { text: "Install the app", link: "/guide/install" },
            { text: "Login & PIN", link: "/guide/login" },
            { text: "Biometric unlock", link: "/guide/biometric" },
          ],
        },
        {
          text: "Daily use",
          items: [
            { text: "Check-in & Check-out", link: "/guide/check-in" },
            { text: "Working offline", link: "/guide/offline" },
            { text: "Attendance calendar", link: "/guide/attendance" },
          ],
        },
        {
          text: "HR actions",
          items: [
            { text: "Apply for leave", link: "/guide/leave" },
            { text: "File an expense claim", link: "/guide/expense" },
            { text: "View payslips", link: "/guide/payslip" },
            { text: "Tasks", link: "/guide/tasks" },
          ],
        },
        {
          text: "Account",
          items: [
            { text: "Profile", link: "/guide/profile" },
            { text: "Language", link: "/guide/language" },
            { text: "Log out", link: "/guide/logout" },
          ],
        },
        {
          text: "Help",
          items: [
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
            { text: "FAQ", link: "/guide/faq" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/EnfonoTech/fatehhr" },
    ],

    footer: {
      message:
        "Fateh HR — a product of Enfono Technologies. Built on Frappe HRMS.",
      copyright: "© 2026 Enfono Technologies",
    },

    search: {
      provider: "local",
    },

    outline: { level: [2, 3], label: "On this page" },

    editLink: {
      pattern: "https://github.com/EnfonoTech/fatehhr/edit/develop/docs-site/docs/:path",
      text: "Suggest an edit",
    },
  },
});
