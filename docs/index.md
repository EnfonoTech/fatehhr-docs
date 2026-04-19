---
layout: home

hero:
  name: "Fateh HR"
  text: "Your HR, in your pocket."
  tagline: Check in from the field. Apply leave. See your payslip. Works offline.
  image:
    src: /screenshots/home-dashboard.jpeg
    alt: Fateh HR home screen
  actions:
    - theme: brand
      text: Getting started
      link: /guide/getting-started
    - theme: alt
      text: Install the app
      link: /guide/install

features:
  - icon: 📍
    title: Check-in, anywhere
    details: GPS-stamped IN / OUT with optional selfie. Take a check-in even when you have no network — it syncs when you're back online.
  - icon: 📴
    title: Built for the field
    details: Full offline mode. Your check-ins, leave requests and expense claims queue up locally and sync as soon as connectivity returns. No data lost.
  - icon: 🔒
    title: Secure but friendly
    details: Sign in once with your work email and set a PIN. On supported phones, unlock with Face ID or your fingerprint instead.
  - icon: 💰
    title: Payslips & expenses
    details: Download any month's payslip as a PDF. File a claim with a receipt photo in seconds.
  - icon: 📅
    title: Attendance at a glance
    details: Monthly calendar with Present / Absent / Leave / Holiday days. Tap a day to see your IN / OUT pairs and hours worked.
  - icon: 🌐
    title: English & العربية
    details: Full Arabic with right-to-left layout. Switch anytime from the More tab.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #2E5D5A 30%, #6fa59f);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #2E5D5A55 50%, #6fa59f55 50%);
  --vp-home-hero-image-filter: blur(56px);
}

.VPHero .image-container {
  transform: none !important;
}
.VPHero .image-bg {
  width: 320px;
  height: 320px;
}
.VPHero .image-src {
  position: relative;
  max-width: 260px;
  max-height: 560px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25);
}
</style>
