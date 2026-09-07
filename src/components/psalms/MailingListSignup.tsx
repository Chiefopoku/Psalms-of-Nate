// ponytail: plain form POST to Buttondown — no JS/client component needed.
// Setup: create a free account at buttondown.com, then replace USERNAME below.
// To switch to Mailchimp: change `action` to your Mailchimp form URL and the
// email input's `name` to "EMAIL" (Mailchimp's convention).
const BUTTONDOWN_USERNAME = "Psalms_of_Nate";

export function MailingListSignup() {
  return (
    <section className="mt-10 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
      <h2 className="text-lg font-semibold">Get new scores by email</h2>
      <p className="mt-1 text-sm text-foreground/75">
        Free updates when a new manuscript is released. No spam, unsubscribe anytime.
      </p>
      <form
        action={`https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`}
        method="post"
        className="mt-4 flex flex-wrap gap-3"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm outline-none focus:border-[hsl(var(--primary))]"
        />
        <button
          type="submit"
          className="rounded-full bg-[hsl(var(--foreground))] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[hsl(var(--primary))]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
