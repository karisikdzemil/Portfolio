import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-ink bg-grid px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Error</p>
      <h1 className="mt-4 text-7xl font-bold text-white md:text-9xl">404</h1>
      <p className="mt-4 max-w-md text-white/60">
        This route doesn&apos;t exist. Maybe it 404s, maybe it never shipped.
      </p>
      <div className="mt-10">
        <Button href="/" variant="solid">
          Back to home
        </Button>
      </div>
    </section>
  );
}
