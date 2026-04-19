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

You'll be asked automatically once, right after your first successful **PIN setup**. A small card slides up:

> **Enable Fingerprint?**
>
> *Unlock the app with Fingerprint instead of typing your PIN. Your PIN will remain as a backup.*
>
> **[Not now]   [Enable Fingerprint]**

Tap **Enable** → your phone's native biometric prompt appears → place your finger / look at the screen → confirmation → done. You're taken to the home screen.

If you tap **Not now**, you can still enable it later (the app asks again after your next PIN unlock).

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

## Turning it off

Right now, to disable biometric unlock:

1. Tap **Forgot PIN** on the PIN screen (logs you out)
2. Log in with password → set a new PIN
3. Tap **Not now** when the biometric prompt appears

(A direct toggle in the More tab is on our roadmap.)

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
