import type { ReactNode } from 'react';

import { Seo } from '@/components/ui/Seo';

type LegalPageShellProps = {
  children: ReactNode;
  description: string;
  title: string;
};

export function LegalPageShell({
  children,
  description,
  title,
}: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-surface">
      <Seo
        description={`${title} de Docqee.`}
        noIndex
        title={`Docqee | ${title}`}
      />
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 sm:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-sm leading-6 text-ink-muted sm:text-base">
            {description}
          </p>
        </header>
        <section className="mt-10 rounded-[1.25rem] border border-slate-200/80 bg-white px-5 py-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)] sm:px-8 sm:py-8">
          {children}
        </section>
      </main>
    </div>
  );
}
