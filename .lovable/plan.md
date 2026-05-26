
## Goal
Make the existing contact form in `src/routes/index.tsx` actually send messages to your Gmail using EmailJS with the credentials you provided.

## Credentials (all public-safe, hardcoded in client)
- Service ID: `service_242cv5u`
- Template ID: `template_uvm8zwt`
- Public Key: `ue1LJ5q7zq-5KWIjx`

These are EmailJS public/browser keys — safe to commit to the frontend.

## Steps

1. **Install dependency**
   - `bun add @emailjs/browser`

2. **Update the Contact section in `src/routes/index.tsx`**
   - Convert the existing `Field` inputs + textarea into controlled inputs with React state (`name`, `email`, `message`).
   - Add `name` attributes (`from_name`, `from_email`, `message`) matching EmailJS template variables.
   - Replace the fake `onSubmit` (which just toggles `sent`) with a real handler that:
     - Calls `emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name, from_email, message }, { publicKey: PUBLIC_KEY })`
     - Shows loading state ("Sending…"), success ("Sent — thank you!"), and error ("Couldn't send — try again") states on the submit button
     - Clears the form on success
   - Keep all existing styling (rounded-3xl glass card, shadow-glow button, etc.) — purely a behavior change.

3. **Verify**
   - Confirm the build succeeds (no TS errors from controlled inputs).
   - The user can test by submitting the form on `/#contact`; the message arrives in the Gmail account linked to their EmailJS template.

## Notes
- EmailJS template variables must match what we send. Your template likely uses `from_name`, `from_email`, and `message` — if it uses different names (e.g., `subject`), tell me and I'll adjust the payload.
- No backend, no Lovable Cloud, no server routes needed — 100% free, runs entirely in the browser.
