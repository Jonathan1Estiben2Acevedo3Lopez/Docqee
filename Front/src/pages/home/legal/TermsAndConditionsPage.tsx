import { LegalPageShell } from './LegalPageShell';

export function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      description="Espacio preparado para publicar las condiciones de uso, responsabilidades, restricciones y alcance del servicio."
      title="Términos y Condiciones"
    >
      <div className="space-y-4 text-sm leading-6 text-ink-muted">
        <h2 className="font-headline text-xl font-bold text-ink">
          Contenido pendiente
        </h2>
        <p>
          Este archivo está listo para que se agreguen los Términos y
          Condiciones oficiales de Docqee.
        </p>
      </div>
    </LegalPageShell>
  );
}
