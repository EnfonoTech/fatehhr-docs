# Working offline

This is the most important thing to understand about Fateh HR. **Everything important works offline.**

If you're in a warehouse with no signal, on a delivery route, in an underground carpark, or just on a flight — keep using the app exactly as normal. Nothing is lost.

## What works offline

| Action | Offline? | Notes |
|---|---|---|
| Check-in / Check-out | ✅ | GPS + selfie captured locally, stored until network returns |
| Apply for leave | ✅ | Form submit queues; shows as "Pending sync" in your leave list |
| File expense claim | ✅ | Receipt photo kept on device, syncs with the claim |
| View attendance calendar | ✅ | Shows last-fetched data; new days appear when you're back online |
| View payslips list | ✅ | Shows last-fetched list |
| View a payslip's details | ⚠️ | Only if you viewed it at least once while online |
| Download payslip PDF | ⚠️ | Cached copy if you downloaded it online before |
| View check-in history | ✅ | Your queued offline check-ins show up tagged **"Pending sync"** |
| Change profile | ✅ | Queues the update |
| Log in for the first time | ❌ | Requires initial network to get your API token |
| View announcements | ⚠️ | Only cached ones |

## The sync bar

At the top of every screen (below the title) you'll see a thin status bar. Watch it.

| State | What it means | What to do |
|---|---|---|
| **Synced now** | Everything saved to server | Nothing |
| **Synced 3 min ago** | All caught up, last sync was 3 min ago | Nothing |
| **5 changes pending · tap to sync** | You did things offline; they're waiting | Tap if you want to force sync (it'll happen automatically when online anyway) |
| **Syncing…** | Actively uploading right now | Wait a few seconds |
| **Offline — working locally** | No network detected | Keep using the app normally |
| **2 sync errors** | Something failed upload | Tap it, then Retry |

## How offline check-ins work

When you tap Check In without network:

1. The app captures your GPS coords, address (if it was cached), task, and selfie
2. It **timestamps the action right now** — not when it syncs later
3. Everything is stored in the app's local database
4. You see **"Queued — will sync when online."**
5. The item appears in your Check-in history tagged **"Pending sync"**

When you get back online:

1. The sync bar flips to **Syncing…**
2. Each queued item uploads one at a time, in the order you did them
3. Selfie photos upload first, then the check-in is created with the uploaded photo's URL
4. Sync bar goes to **Synced now**
5. The **"Pending sync"** tags disappear from your history

**The timestamp you see in the server / ERP is your ORIGINAL capture time — not the sync time.** So if you checked in at 08:00 and only got signal at 14:00, the record correctly says 08:00.

## How offline leave / expense works

Same pattern. The form submit goes straight into the queue instead of failing. Your leave list shows the request tagged **"Pending Sync"** until it reaches the server.

**Important:** if your leave or expense submission has a **validation error** (e.g. you don't have enough leave balance), the app catches that and shows the error **immediately** instead of queueing a submission that would never succeed. This only happens when you're online; offline, the app has to trust your input and tries to submit for real when it reaches the server.

## Sync errors

If an item errors on upload (most often a temporary server issue), it goes to the **Sync Errors** section, accessed from:

**More → Sync Errors**

You'll see:
- The item that failed (e.g. "checkin")
- The error message
- A **Retry** button
- A **Delete** option (type DELETE to confirm)

**Almost always the fix is to tap Retry.** Most errors are transient — weak signal during upload, server just restarted, etc. A retry usually succeeds.

If the same item keeps failing after multiple retries, screenshot the error and send it to HR / IT.

## Photos and offline

Selfies and expense receipt photos are saved **on-device** (in the app's private storage) until they can be uploaded.

- Up to about 500 MB of photo storage — plenty for weeks of offline work
- Photos are deleted from local storage **only after** they've been successfully uploaded AND the check-in / claim has been accepted
- Uninstalling the app clears all local photos — make sure you've synced before uninstalling

## Background sync (native APK only)

On the native Android app, the sync runs **even when the app is closed**. If your phone regains signal while Fateh HR is in the background or swiped away, queued items will upload automatically. You don't need to open the app.

The web app can't do this — browsers close their network connections when you close the tab.

## "Working locally" safety rules

1. **Don't uninstall the app before syncing.** All your queued items live inside the app. Uninstall = lost.
2. **Keep location on.** Offline check-ins still need GPS to know where you are.
3. **Keep enough storage.** The app needs a few hundred MB for queued photos.
4. **Open the app at least once a day.** This lets it try to sync in the background, and keeps your session active.

## Next

- [Check-in & check-out](/guide/check-in)
- [Apply for leave](/guide/leave)
- [Troubleshooting](/guide/troubleshooting)
