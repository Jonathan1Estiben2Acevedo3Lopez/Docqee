import type { ReactNode } from 'react';

import { LegalPageShell } from './LegalPageShell';

function LegalSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-headline text-base font-extrabold tracking-tight text-ink sm:text-lg">
      {children}
    </h2>
  );
}

function LegalHighlight({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-6 text-ink">
      {children}
    </div>
  );
}

function BulletList({ items, variant = 'primary' }: { items: string[]; variant?: 'primary' | 'danger' }) {
  return (
    <ul className="space-y-1.5 pl-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-7 text-ink-muted"
        >
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${variant === 'danger' ? 'bg-rose-400' : 'bg-primary'}`}
          />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

export function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      description="Al crear una cuenta o utilizar los servicios de Docqee, usted acepta de forma expresa los presentes términos. Léalos con detenimiento antes de continuar."
      title="Términos y Condiciones de Uso"
    >
      <div className="space-y-8 text-sm leading-7 text-ink-muted">
        <div className="space-y-1 border-b border-slate-100 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted/70">
            Última actualización: abril de 2025
          </p>
        </div>

        <LegalHighlight>
          <strong className="font-semibold text-ink">Aviso importante:</strong>{' '}
          Docqee es exclusivamente una plataforma digital de vinculación y
          coordinación. No presta servicios odontológicos, no emite diagnósticos
          y no asume responsabilidad clínica. Las atenciones se realizan en el
          marco de prácticas universitarias supervisadas por docentes
          habilitados.
        </LegalHighlight>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                1
              </span>
              <LegalSectionTitle>Naturaleza y alcance de la plataforma</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee es una plataforma tecnológica de intermediación cuya función
                es facilitar la conexión, comunicación y coordinación de citas entre
                pacientes y estudiantes de odontología en el contexto de prácticas
                clínicas universitarias supervisadas. La plataforma opera como un
                canal digital de vinculación y no constituye, en ningún caso, un
                prestador de servicios de salud.
              </p>
              <p>
                Las atenciones gestionadas a través de Docqee son realizadas por
                estudiantes en formación bajo la supervisión directa de docentes
                clínicos habilitados y en las instalaciones de las instituciones
                universitarias vinculadas. La plataforma no interviene en ninguna
                etapa del proceso clínico.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                2
              </span>
              <LegalSectionTitle>Alcance de responsabilidad de la plataforma</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee delimita su responsabilidad al componente tecnológico e
                informativo. La plataforma asume responsabilidad exclusivamente
                sobre los siguientes aspectos:
              </p>
              <BulletList
                items={[
                  'El tratamiento seguro y confidencial de los datos personales conforme a la normativa colombiana vigente.',
                  'La disponibilidad funcional razonable del sistema y la integridad de las funciones de comunicación y agendamiento.',
                  'La claridad y veracidad de la información presentada dentro de la plataforma.',
                  'La trazabilidad básica de las interacciones registradas en el sistema.',
                ]}
              />
              <p>
                Docqee no asume responsabilidad por el desarrollo, la calidad, los
                resultados ni las consecuencias de las atenciones clínicas
                coordinadas a través de la plataforma. Dicha responsabilidad
                corresponde de manera exclusiva al estudiante, al docente supervisor
                y a la institución universitaria, de acuerdo con los protocolos
                académicos, éticos y legales aplicables.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                3
              </span>
              <LegalSectionTitle>Registro y condiciones de la cuenta</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Para acceder a los servicios de Docqee, el usuario debe completar el
                proceso de registro proporcionando información veraz, actualizada y
                completa. El usuario es responsable de mantener la confidencialidad
                de sus credenciales de acceso y de toda actividad que se realice
                desde su cuenta.
              </p>
              <p>
                En el caso de usuarios menores de 18 años, el registro requiere la
                autorización y datos de contacto de un tutor legal, quien asume
                conjuntamente la aceptación de los presentes términos. Docqee se
                reserva el derecho de verificar la información suministrada y de
                suspender cuentas que presenten inconsistencias o usos contrarios
                a estas condiciones.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                4
              </span>
              <LegalSectionTitle>Obligaciones del usuario</LegalSectionTitle>
            </div>
            <div className="pl-9">
              <BulletList
                items={[
                  'Proporcionar información veraz y mantenerla actualizada en todo momento.',
                  'Hacer uso del servicio únicamente para los fines para los que fue diseñado: coordinar citas en el marco de prácticas clínicas universitarias.',
                  'Respetar a los demás usuarios de la plataforma, incluyendo estudiantes, docentes y personal administrativo.',
                  'Notificar oportunamente cualquier cancelación o cambio en las citas agendadas.',
                  'No compartir su cuenta ni sus credenciales con terceros.',
                ]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                5
              </span>
              <LegalSectionTitle>Conductas prohibidas</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <BulletList
                items={[
                  'Suplantar la identidad de otro usuario, paciente, estudiante o profesional de la salud.',
                  'Utilizar la plataforma con fines comerciales no autorizados o ajenos a su propósito.',
                  'Publicar, transmitir o difundir información falsa, ofensiva o que vulnere los derechos de terceros.',
                  'Intentar acceder de forma no autorizada a cuentas, sistemas o datos de otros usuarios.',
                  'Realizar cualquier acción que comprometa la seguridad, integridad o disponibilidad de la plataforma.',
                ]}
                variant="danger"
              />
              <p>
                El incumplimiento de estas prohibiciones podrá dar lugar a la
                suspensión o eliminación permanente de la cuenta, sin perjuicio de
                las acciones legales que correspondan.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                6
              </span>
              <LegalSectionTitle>Disponibilidad del servicio</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee procura garantizar la disponibilidad continua de la
                plataforma; sin embargo, no se responsabiliza por interrupciones
                derivadas de mantenimientos programados, fallas de conectividad,
                eventos de fuerza mayor o causas ajenas al control razonable del
                equipo de desarrollo.
              </p>
              <p>
                La plataforma podrá ser modificada, actualizada o discontinuada en
                cualquier momento con el fin de mejorar la experiencia del usuario
                o cumplir con nuevos requisitos técnicos y normativos. Se
                notificará a los usuarios con antelación razonable ante cambios
                significativos.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                7
              </span>
              <LegalSectionTitle>Propiedad intelectual</LegalSectionTitle>
            </div>
            <div className="pl-9">
              <p>
                Todos los elementos que conforman la plataforma Docqee —incluyendo
                su diseño, código fuente, marcas, logotipos y contenidos— son
                propiedad de sus desarrolladores o se encuentran bajo licencias
                debidamente autorizadas. Queda prohibida su reproducción,
                distribución o uso no autorizado sin consentimiento expreso por
                escrito.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                8
              </span>
              <LegalSectionTitle>Modificaciones a los términos</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee se reserva el derecho de modificar los presentes Términos y
                Condiciones en cualquier momento. Las modificaciones serán
                comunicadas a los usuarios a través de la plataforma con un aviso
                previo razonable. El uso continuado del servicio tras la publicación
                de los cambios constituirá la aceptación de los nuevos términos.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                9
              </span>
              <LegalSectionTitle>Ley aplicable y jurisdicción</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Los presentes Términos y Condiciones se rigen por las leyes de la
                República de Colombia, en particular por la Ley 527 de 1999 sobre
                comercio electrónico, la Ley 1581 de 2012 sobre protección de datos
                personales y la Ley 23 de 1981 sobre ética médica, en lo que
                resulte aplicable.
              </p>
              <p>
                Cualquier controversia derivada del uso de la plataforma será
                sometida a los jueces y tribunales competentes de la República de
                Colombia, salvo acuerdo expreso en contrario entre las partes.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
                10
              </span>
              <LegalSectionTitle>Contacto</LegalSectionTitle>
            </div>
            <div className="pl-9">
              <p>
                Para consultas, reclamaciones o reportes relacionados con estos
                Términos y Condiciones, el usuario puede comunicarse con el equipo
                de Docqee a través de los canales habilitados en la plataforma. La
                respuesta se brindará dentro de un plazo razonable y conforme a los
                procedimientos establecidos.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/70 bg-surface-low/50 px-5 py-4 text-xs leading-6 text-ink-muted">
          Al utilizar Docqee, usted confirma haber leído y aceptado los presentes
          Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna
          de estas disposiciones, le solicitamos abstenerse de utilizar la
          plataforma.
        </div>
      </div>
    </LegalPageShell>
  );
}
