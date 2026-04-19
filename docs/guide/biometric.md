# Biometric unlock

Skip the PIN pad — unlock Fateh HR with your fingerprint, face, or iris.

## What you'll see

On any Android phone that has biometric hardware you've set up at the OS level (fingerprint enrolled in Settings, or Face Unlock configured), Fateh HR can use it.

The label in the app adapts to your device:
- **Fingerprint** — capacitive / in-display fingerprint readers
- **Face Unlock** — face-based unlock (Google's or manufacturer's)
- **Iris Unlock** — some Samsung devices
- **Touch ID / Face ID** — iOS (web version; see note below)

## Enabling it

There are two places you can enable it.

### Option 1 — From the More tab (any time)

1. Open the **More** tab (bottom-right of the screen).
2. Scroll to the **Security** card.
3. Tap the toggle next to **"Unlock with Fingerprint"** (or Face ID / whatever your device shows).
4. Your phone's native biometric prompt appears — place your finger / look at the screen.
5. Toggle flips green. Done.

This is the recommended path if you've been using the app for a while and haven't seen the enrollment prompt.

### Option 2 — After setting a PIN (new or reset)

You'll be asked automatically once, right after a successful **PIN setup** (either your first PIN or a reset via Forgot PIN). A small card slides up:

> **Enable Fingerprint?**
>
> *Unlock the app with Fingerprint instead of typing your PIN. Your PIN will remain as a backup.*
>
> **[Not now]   [Enable Fingerprint]**

Tap **Enable** → phone's biometric prompt → done.

If you tap **Not now**, you can still enable it later from the More tab (see Option 1).

::: tip Why didn't I see the prompt?
The one-time enrollment modal only appears immediately after saving a **new** PIN. If you upgraded the app while keeping your existing PIN, the modal won't fire — use **Option 1** from the More tab instead.
:::

## Turning it off

Same **Security** card → tap the green toggle again. It flips off. Next time you open the app, you'll type your PIN as normal.

## Daily use

From now on, opening Fateh HR does this:

1. PIN screen appears
2. Biometric prompt **pops up automatically** on the same screen
3. Touch the sensor / face scan → you're at the home screen

No typing needed.

## If biometric fails

The biometric prompt is the OS's — not ours. It handles failure natively (three failed attempts on most Androids, then it backs off). When it fails or you cancel:

- The prompt disappears
- You stay on the PIN screen
- **Type your PIN** to unlock as before
- A **"Use Fingerprint"** button stays at the bottom to retry biometric

**Your PIN always works** as a fallback. Biometric is just faster when it's working.

## Security notes

- We **never store your fingerprint or face image** — that lives only in your phone's secure enclave.
- The biometric prompt acts as **proof of identity** — when it passes, the app trusts that you are you and unlocks. The PIN check is skipped.
- Uninstalling the app clears the enrolment flag. You'll re-enrol when you reinstall.
- If you switch phones, biometric enrolment doesn't transfer — the new phone prompts you after your first PIN setup.

## On iPhone / web version

The web version (Safari or Chrome on iPhone) doesn't currently support biometric unlock — iOS locks biometric APIs to native apps. Use your PIN.

A native iOS app is on our roadmap.

## Next

- [Your first check-in](/guide/check-in)
- [How offline mode works](/guide/offline)
