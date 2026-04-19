# Login & PIN

## First login

1. Open **Fateh HR**.
2. You're on the **Welcome** screen.
3. Enter your **work email** (the one HR registered).
4. Enter your **password**.
5. Tap the **eye icon** in the password field if you want to check what you typed.
6. Tap **Continue**.

::: tip
After your first successful login, your email is remembered. Next time you reach this screen, the email field is pre-filled and the keyboard lands directly on the **password** field — one less tap.
:::

### "That email or password didn't match"

If you see this message:

- **Check for typos** in the email (common: `.com` vs `.in`, missing dot)
- **Check the password** — tap the eye icon to see what you typed
- Caps Lock / autocaps on mobile can change the case of characters
- If it still fails, ask HR to **reset your password** from the ERPNext Desk

## Set your PIN

Right after your first login, you're asked to set a 4–6 digit PIN.

1. Tap the digits on the keypad to build your PIN.
2. You can use **4, 5, or 6 digits**.
3. Tap **⌫** to delete a digit.
4. Once you have at least 4 digits, tap **Save PIN**.

This PIN is what you'll enter every time you open the app, instead of your full password. Think of it as a quick unlock for day-to-day use.

::: warning Choose something you'll remember
You can't recover a forgotten PIN from inside the app. If you forget it, tap **"Forgot PIN"** on the PIN screen → you'll be logged out and have to sign in with your password again, then set a new PIN.
:::

### Good PIN, bad PIN

| ✅ Good | ❌ Avoid |
|---|---|
| A memorable 4–6 digit sequence | `1234`, `0000`, `1111` |
| Your own, not shared | The year you joined (HR knows it) |
| Different from other apps | Same PIN as your SIM lock |

## After PIN setup

Immediately after saving, you'll see a **prompt** asking if you'd like to use Face / Touch / Fingerprint unlock. See [Biometric unlock](/guide/biometric) — strongly recommended if your phone supports it.

If you skip this, you can still enable it later (it just asks you again after your next successful PIN unlock).

## Day-to-day: unlocking the app

From day two onwards, opening the app shows the **PIN screen** directly — not the login form.

**If you enabled biometric:** the fingerprint / face prompt appears automatically. Touch the sensor or look at the screen → straight to the home screen.

**If you didn't:** type your PIN and tap **Unlock**.

Your session stays "unlocked" for about 2 hours of activity. After that the PIN / biometric is asked again.

## Too many wrong PIN attempts

If you get the PIN wrong **5 times in a row**, the app locks you out and takes you back to the login screen. You'll need to sign in with your full password again, then set a fresh PIN.

## Forgot PIN

On the PIN screen, tap **"Forgot PIN"**.

This clears your local session and returns you to the login screen. Sign in with your password to pick a new PIN.

Your data (check-ins, leave requests, etc) stays safe on the server — this only affects the local unlock credential.

## Changing your PIN

Right now, changing the PIN means:

1. Tap **Forgot PIN** on the PIN screen
2. Log in with your password
3. Set a new PIN when prompted

(A dedicated "Change PIN" option inside the app is on our roadmap.)

## Next

- [Enable biometric unlock](/guide/biometric)
- [Your first check-in](/guide/check-in)
