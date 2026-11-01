// Where the newsletter's sign-up, confirm and unsubscribe go: MC's Pipeline &
// Power mailing list in Command. Joining is double opt-in: Command records a
// pending sign-up and emails a link to /newsletter-confirm, which confirms
// it. Each call answers { ok, error }.
//
// It replaced the newsletter-* functions on a separate Supabase project,
// which by 30 October 2026 the site could no longer reach. Command checks a
// honeypot and limits sign-ups per hour, and does not verify Cloudflare
// Turnstile, so the forms no longer show it.
const COMMAND = 'https://command.millionairecontracts.com/api/lists'

export const NEWSLETTER = {
  join: `${COMMAND}/join/dgxkJEkgsNTNqubvFvZ-RCrpPZZ7HYOx`,
  confirm: `${COMMAND}/confirm`,
  leave: `${COMMAND}/leave`,
}
