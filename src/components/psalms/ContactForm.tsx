"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EMAIL = "psalmsofnate@gmail.com";

// ponytail: builds a prefilled mailto so the form works with no backend.
// Swap for a real POST handler if inbound volume ever justifies it.
export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("Scores & permissions enquiry");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submit} className="grid gap-4 sm:max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground/70">Your name</span>
          <Input value={name} onChange={e => setName(e.target.value)} required placeholder="Jane Doe" autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground/70">Your email</span>
          <Input type="email" value={from} onChange={e => setFrom(e.target.value)} required placeholder="you@email.com" autoComplete="email" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-foreground/70">Subject</span>
        <Input value={subject} onChange={e => setSubject(e.target.value)} required />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-foreground/70">Message</span>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Which work, and how you'd like to use it (perform, record, reproduce)…"
          className="w-full rounded-xl border border-border/80 bg-white/85 px-4 py-3 text-sm shadow-sm outline-none transition placeholder:text-foreground/40 focus:border-[hsl(var(--primary))] focus:ring-4 focus:ring-[hsl(var(--primary))]/15"
        />
      </label>
      <div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
