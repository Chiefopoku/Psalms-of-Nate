import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/features/auth/login";

export function LoginForm() {
  return (
    <form action={login} className="grid gap-3 rounded-3xl border border-white/75 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
