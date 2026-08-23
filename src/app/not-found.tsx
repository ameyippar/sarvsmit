import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-[70vh] flex-col items-start justify-center pt-28"
    >
      <Container>
        <p className="text-[11px] tracking-[0.28em] text-muted">404</p>
        <h1 className="mt-4 font-serif text-5xl text-silver-bright">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-8 border-b border-white/25 pb-0.5 text-sm uppercase tracking-[0.16em]"
        >
          Return home
        </Link>
      </Container>
    </main>
  );
}
