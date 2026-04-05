import { ROUTES } from '@/constants/routes';
import type { CtaTarget } from '@/content/types';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { LogoMark } from '@/components/ui/LogoMark';
import { Seo } from '@/components/ui/Seo';

type RoutePlaceholderPageProps = {
  kind: 'register';
};

const routeCopy = {
  register: {
    description:
      'La ruta de registro ya quedó preparada para conectar el siguiente frente de producto sin rehacer la navegación.',
    title: 'Registro en preparación',
  },
} as const;

export function RoutePlaceholderPage({ kind }: RoutePlaceholderPageProps) {
  const copy = routeCopy[kind];
  const secondaryCta: CtaTarget = {
    kind: 'internal',
    label: 'Iniciar sesión',
    to: ROUTES.login,
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-12">
      <Seo
        description={copy.description}
        noIndex
        title={`Docqee | ${copy.title}`}
      />
      <main className="w-full max-w-2xl rounded-[2rem] bg-surface-card p-8 text-center shadow-float sm:p-10">
        <LogoMark className="justify-center" />
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-primary">
          Ruta lista para crecer
        </p>
        <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-ink">
          {copy.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-muted">{copy.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink
            cta={{ kind: 'internal', label: 'Volver al inicio', to: ROUTES.home }}
            variant="secondary"
          />
          <ButtonLink cta={secondaryCta} variant="primary" />
        </div>
      </main>
    </div>
  );
}
