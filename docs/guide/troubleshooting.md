# Troubleshooting

The fixes we recommend most often.

## Login & PIN

### "That email or password didn't match."

- Check for typos, especially in the domain (`.com` vs `.in`)
- The eye icon in the password field lets you see what you typed
- Caps Lock / auto-caps can silently uppercase characters
- If still stuck, ask HR to reset your password from the Frappe Desk

### "Too many wrong PIN attempts."

Five wrong PINs in a row locks you out. You're taken back to the login screen — sign in with your password and set a new PIN.

### Forgot my PIN

Tap **Forgot PIN** on the PIN screen → log in with password → set a new PIN.

### The PIN screen won't accept my PIN even though I'm sure it's right

- You may have an old cached PIN from a previous account. Tap **Forgot PIN** → login with password → set the PIN fresh.
- If you changed your password recently, the old PIN stops working — same fix.

## Check-in

### "Can't get GPS. Grant location permission, then tap Check In again."

Android Settings → Apps → **Fateh HR Demo** → Permissions → **Location** → **Allow all the time** (or at least "While using the app").

### "Finding your location…" just sits there

GPS fix can take 10–30 seconds indoors. Try:
- Step outside / near a window
- Make sure Location services are ON in Android's quick settings
- Turn on High Accuracy GPS mode (Android Settings → Location → Google Location Accuracy)

### Selfie screen is blank / camera error

Android Settings → Apps → Fateh HR Demo → Permissions → **Camera** → Allow.

### Check-in recorded but appears with the wrong time

- All times are shown in **your phone's timezone**. If your phone's clock is wrong, so will the display be. Android Settings → System → Date & time → **Set automatically** ON.
- ERP (Frappe Desk) shows times in the **company's timezone** — those will differ from your phone by the timezone offset. That's normal and both are correct.

## Offline / sync

### Sync bar shows "3 sync errors"

Tap the bar → **Sync Errors** screen → tap **Retry** on each row. Most errors are transient network issues.

If a row keeps failing after retries:
1. Screenshot the error message
2. Send to HR / IT

### The sync bar never says "Synced now"

- Check that your device has network (you might be connected to WiFi with no internet)
- Force-close the app (recent apps → swipe up) and reopen
- Try a different network (WiFi vs mobile data)

### My offline check-in didn't sync

- Open the **Check-in history** — if it says **"Pending sync"** next to the entry, it's still queued. Get online, watch the sync bar.
- If it's not in history at all, check the **Sync Errors** screen — it may have failed. Retry from there.

## Payslip PDF download

### "Download" button does nothing

- On old APK versions (pre-1.0.13), native download was broken. **Update to the latest APK** — your HR team will have the download link.
- After the update, tap Download → you should see **"Saved to Documents."** confirmation.

### I can't find the downloaded PDF

Open any file manager (Google Files, Samsung My Files, etc.) → **Documents** folder. The filename looks like `Sal_Slip_None_00006.pdf`.

### Share opens but doesn't have PDF attached

Some older Android versions don't support the share-file API. In that case the app falls back to Download. Look for the PDF in your Documents folder, then share it from the file manager.

## General

### App feels slow to open

- Clear background apps to free memory (recent apps → clear all)
- Reboot the phone
- On the web app: clear browser cache, or try a fresh tab

### "Something went wrong" screen

This is Vue's error boundary. It means an unhandled error occurred. Steps:
1. Close the app fully and reopen
2. If it happens again, note what you were doing and tell HR / IT — they can check the Error Log on the Frappe Desk.

### Data on mobile doesn't match the ERP Desk

After any change on the Desk (new leave allocation, payslip created, policy update), the mobile app picks it up **next time you open the relevant screen** or **pull to refresh** (if available). Force-close and reopen the app to pull fresh data.

## Still stuck?

1. **Note which APK version** — tap **More** → scroll to the bottom, the version is shown (e.g. `1.0.19`)
2. **Screenshot the error** or the screen you're stuck on
3. **Send both to HR / IT** along with a brief description

## Next

- [FAQ](/guide/faq)
- [Getting started](/guide/getting-started)
