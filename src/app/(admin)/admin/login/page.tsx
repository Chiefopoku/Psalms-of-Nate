import { Container } from "@/components/layout/Container";
import { LoginForm } from "@/components/auth/LoginForm";

export default function AdminLoginPage() {
  return (
    <Container className="max-w-md py-16">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Secure area</p>
      <h1 className="mb-6 text-3xl font-semibold">Admin sign in</h1>
      <LoginForm />
    </Container>
  );
}
