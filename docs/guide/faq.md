# FAQ

Quick answers to the most common questions.

## Installing

### Do I need the Play Store?

No. Fateh HR ships as a direct APK download. When you tap it, Android asks for a one-time permission to install from that source.

### Is there an iPhone version?

Not yet — a native iOS build is on our roadmap. In the meantime, iPhone users can use the **web version** at `hr-demo.enfonoerp.com/fatehhr` and add it to their home screen via Safari's share menu.

### How do I update to a new version?

Your HR team shares the new APK link. Tap it → Install → you're updated. Your PIN and login stay.

## Login & security

### Can I share the app with a colleague?

Each person needs their **own login**. Sharing an account means your check-ins and payslips show up as theirs. Ask HR to set your colleague up with their own work email.

### Does the app know my location all the time?

**No.** Location is only captured at the moment you tap **Check In** or **Check Out**. There's no background location tracking.

### What data is stored on my phone?

- Your session token (not your password)
- A hashed version of your PIN (so offline unlock works)
- Any check-ins / leave / expense submissions you've done offline and are queued to sync
- Your last-viewed attendance data (for offline viewing)
- Photos of selfies and expense receipts you haven't uploaded yet

### Can IT see what I do on my phone?

No. The Fateh HR app only sees what happens **inside the app**. It doesn't have access to your photos, messages, calls, or other apps.

## Check-in

### I forgot to check out yesterday. What happens?

The app auto-closes the open pair at midnight. The day will still show as **Present** but the hours will stop at 23:59. In the attendance calendar's day detail, the pair is marked **"auto-closed at midnight"** so HR knows.

### I checked in at the wrong location by mistake. Can I delete it?

Not from the app. Ask HR — they can delete or amend the Employee Checkin record from the Desk.

### Can I check in from anywhere, or only at my work location?

Depends on your task. If your task has a **geofence radius**, you can check in anywhere but being outside the radius is flagged for manager review. If no geofence is set, anywhere goes.

## Offline

### How long can I work offline?

Indefinitely — as long as the app has storage for queued items and photos. Typical usage is days to weeks between syncs without trouble.

### If I'm offline for a week, will I lose my check-ins?

No. Every check-in is stored locally until it can be uploaded. When you get back online, they all sync automatically in the order they happened.

### Do offline check-ins record the right time?

Yes. The app timestamps every action at the **moment you tap** the button, not when it syncs. So if you checked in at 08:00 and synced at 14:00, the server shows 08:00.

### I uninstalled the app before my queued check-ins synced. Are they gone?

Yes, unfortunately. Offline data lives inside the app's private storage; uninstalling wipes it. Always make sure the sync bar says **"Synced now"** before uninstalling.

## Leave & expense

### I need to apply for leave I already took. Can I backdate?

Yes. Just pick the past dates in the From/To fields. HR will see the submission date is different from the leave dates — normal and expected for post-facto requests.

### My leave balance shows 0 but HR said I should have some.

HR needs to create a **Leave Allocation** for you on the Desk. Ask them to check **HR → Leave Allocation** for your employee record.

### Can I file a claim without a receipt?

No — every line requires a receipt photo. If you've lost a receipt, mention it to HR separately; they can record it on the Desk with appropriate notes.

### My expense claim was approved for less than I claimed. Why?

Approvers can reduce the sanctioned amount. Open the claim in the app, scroll to the "Approved" figure — it shows what was approved. Ask your approver if you need justification.

## Payslip

### The payslip number looks weird — "Sal Slip/None/…"

That's the default Frappe naming series; your HR can customise it. It doesn't affect the contents of the payslip.

### Can I see payslips from before I started using the app?

If they were generated on the Frappe HR Desk, yes — they're all there. The app lists everything linked to your Employee record.

### My net pay is wrong.

The app only **displays** what the Desk computes. If a figure's wrong:
1. Note the exact discrepancy
2. Tell HR with the payslip name (e.g. `Sal Slip/None/00006`)
3. HR corrects it on the Desk, and your app view updates automatically

## App behaviour

### Why does the app auto-close after I log in sometimes?

That's your **session timeout** (~2 hours of inactivity). Next time you open it, it'll ask for your PIN / fingerprint instead of a full login. Totally expected.

### Why is the calendar blank for the first few seconds?

You're watching the monthly data load. The app shows a pulsing skeleton grid until the real data arrives — usually 1-3 seconds.

### The app shows a toast "Press back again to exit" — what does it mean?

On Android, pressing the back button from the home screen triggers a double-tap-to-exit. This prevents accidental exits. Press back again within 2 seconds to actually exit.

### Can I use a tablet?

Yes, the web app works well on tablets. The native APK is sized for phones but runs on tablets in phone layout.

## Data & privacy

### Where is my data stored?

- **Cloud:** Your employer's Frappe/ERPNext server (your HR's choice of hosting).
- **Device:** Only the data needed for offline use + your session token. Everything syncs with the cloud as the source of truth.

### What happens if my phone is stolen?

- Your session is protected by PIN / biometric. The thief can't open the app without it.
- Ask HR to **reset your API credentials** on the Desk — this invalidates the stolen phone's session.
- Set a new PIN after you get a new phone.

### Does the app use mobile data?

- When online, yes — for sync, map tiles, selfie uploads.
- For light users, typical usage is under 20 MB/month.
- Heavy selfie / photo use can push that to 50–100 MB/month.
- OpenStreetMap tiles on the check-in map are cached after first load, so repeat visits to the same area reuse cached tiles.

## Couldn't find your answer?

Visit the full **[User Guide](/guide/getting-started)** or contact your HR team.
