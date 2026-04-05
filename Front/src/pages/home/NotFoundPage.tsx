import { ROUTES } from '@/constants/routes';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { LogoMark } from '@/components/ui/LogoMark';
import { Seo } from '@/components/ui/Seo';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-12">
      <Seo
        description="La página solicitada no existe dentro de la experiencia actual de Docqee."
        noIndex
        title="Docqee | Página no encontrada"
      />
      <main className="w-full max-w-2xl rounded-[2rem] bg-surface-card p-8 text-center shadow-float sm:p-10">
        <LogoMark className="justify-center" />
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-primary">
          Página no encontrada
        </p>
        <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-ink">
          Esta ruta no está disponible
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-muted">
          Puedes volver al inicio y seguir explorando la landing pública mientras se
          conectan más flujos del producto.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink
            cta={{ kind: 'internal', label: 'Volver a la landing', to: ROUTES.home }}
            variant="primary"
          />
        </div>
      </main>
    </div>
  );
}
