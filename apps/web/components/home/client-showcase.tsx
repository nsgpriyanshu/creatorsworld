import { Marquee } from "@repo/ui/components/ui/marquee";

export function ClientShowcase() {
  const companies = ["Prisim Paddle Kyaking", "Coming Soon", "Coming Soon"];

  return (
    <section
      aria-labelledby="companies-heading"
      className="mx-auto mt-16 w-full max-w-7xl border-t border-border pt-10 md:mt-20 md:pt-12"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            SELECTED CLIENTS
          </p>
          <h2
            id="companies-heading"
            className="mt-2 text-2xl font-semibold tracking-tight"
          >
            Developed &amp; shipped for
          </h2>
        </div>
        <span className="hidden text-sm text-muted-foreground sm:block">
          A few of the teams behind the work
        </span>
      </div>
      <ul
        className="sr-only"
        aria-label="Companies we've developed and shipped for"
      >
        {companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
      <div className="relative mt-6 overflow-hidden">
        <Marquee
          aria-hidden="true"
          pauseOnHover
          className="[--duration:28s] [--gap:1rem] p-0"
        >
          {companies.map((company, index) => (
            <div
              key={company}
              className="flex h-20 w-48 items-center justify-between rounded-md border border-border/70 bg-background/50 px-5"
            >
              <span className="text-lg font-semibold tracking-tight text-foreground/80">
                {company}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                0{index + 1}
              </span>
            </div>
          ))}
        </Marquee>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"
        />
      </div>
    </section>
  );
}
