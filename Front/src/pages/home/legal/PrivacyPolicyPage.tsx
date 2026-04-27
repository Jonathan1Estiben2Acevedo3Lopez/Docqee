import { LegalPageShell } from './LegalPageShell';

export function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      description="Espacio preparado para publicar el manejo de datos personales, finalidades, autorizaciones y derechos de los usuarios."
      title="Política de Privacidad"
    >
      <div className="space-y-4 text-sm leading-6 text-ink-muted">
        <h2 className="font-headline text-xl font-bold text-ink">
          Contenido pendiente
        </h2>
        <p>
          Este archivo está listo para que se agregue la Política de Privacidad
          oficial de Docqee.
        </p>
      </div>
    </LegalPageShell>
  );
}
