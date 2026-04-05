import { ShieldCheck } from 'lucide-react';

import type { LandingContent } from '@/content/types';

import { ButtonLink } from '../ui/ButtonLink';
import { SurfaceCard } from '../ui/SurfaceCard';

type HeroSectionProps = {
  hero: LandingContent['hero'];
};

const heroImagePriorityProps = {
  fetchpriority: 'high',
} as Record<string, string>;

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-3 sm:pb-24 sm:pt-5 lg:pb-28 lg:pt-6">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(108,211,247,0.16),_transparent_42%),radial-gradient(circle_at_88%_14%,_rgba(0,100,124,0.08),_transparent_34%)]"
      />
      <div className="mx-auto grid max-w-layout gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 xl:items-center">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-5">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex min-w-0 items-start gap-1.5 rounded-full bg-secondary/80 px-3 py-1.5 text-[11px] font-semibold leading-tight text-secondary-ink shadow-ambient sm:items-center sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:mt-0 sm:h-4 sm:w-4" />
                <span className="min-w-0">{hero.badge}</span>
              </div>
            </div>
            <h1 className="mx-auto max-w-[20ch] text-center font-headline text-[clamp(1.7rem,8vw,2.55rem)] font-extrabold leading-[1.1] tracking-tight text-ink [text-wrap:balance] sm:max-w-3xl sm:text-5xl sm:leading-[1.06] lg:mx-0 lg:text-left lg:text-6xl lg:leading-[1.04]">
              {hero.titleStart}{' '}
              <span className="text-primary">{hero.titleAccent}</span> {hero.titleEnd}
            </h1>
            <p className="hidden max-w-2xl text-base leading-7 text-ink-muted sm:block sm:text-lg">
              {hero.description}
            </p>
          </div>
          <div className="hidden flex-col gap-3 sm:flex-row sm:items-center lg:flex">
            <ButtonLink cta={hero.primaryCta} variant="primary" />
            <ButtonLink cta={hero.secondaryCta} variant="secondary" />
          </div>
        </div>
        <div className="relative mx-auto -mt-8 w-full max-w-[28rem] sm:mt-0 sm:max-w-[31rem] lg:ml-auto lg:mr-0 lg:max-w-[33rem] xl:max-w-[35rem]">
          <div
            aria-hidden="true"
            className="absolute -right-6 top-8 hidden h-44 w-44 rounded-full bg-glow/45 blur-3xl sm:block"
          />
          <div className="relative py-3 sm:py-4">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-[2.5%] right-[2.5%] rounded-[2.2rem] bg-surface-card shadow-float"
            />
            <div className="relative z-10 mx-auto w-[88%] rounded-[1.85rem] bg-surface-low p-3 sm:w-[86%] sm:p-5">
              <img
                {...heroImagePriorityProps}
                alt={hero.image.alt}
                className="aspect-[9/10] w-full rounded-[1.45rem] object-cover"
                decoding="async"
                height={hero.image.height}
                loading="eager"
                sizes="(min-width: 1024px) 42rem, 100vw"
                src={hero.image.src}
                width={hero.image.width}
              />
            </div>
            {hero.highlights.length > 0 ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {hero.highlights.map((item) => (
                  <SurfaceCard
                    key={item.title}
                    className="h-full bg-surface px-5 py-5 shadow-none"
                  >
                    <p className="font-headline text-base font-extrabold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {item.description}
                    </p>
                  </SurfaceCard>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <p className="-mt-12 text-left text-base leading-7 text-ink-muted sm:hidden">
          {hero.description}
        </p>
        <div className="-mt-10 flex flex-row items-center justify-center gap-3 lg:hidden">
          <ButtonLink cta={hero.primaryCta} variant="primary" />
          <ButtonLink cta={hero.secondaryCta} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
