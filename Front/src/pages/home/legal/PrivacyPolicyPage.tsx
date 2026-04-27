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

function SubLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-ink">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-7 text-ink-muted"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-black text-primary">
      {n}
    </span>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      description="En Docqee nos comprometemos a proteger su privacidad y a tratar sus datos personales con responsabilidad, transparencia y conforme a la normativa colombiana vigente."
      title="Política de Privacidad y Tratamiento de Datos Personales"
    >
      <div className="space-y-8 text-sm leading-7 text-ink-muted">
        <div className="space-y-1 border-b border-slate-100 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted/70">
            Última actualización: abril de 2025
          </p>
        </div>

        <LegalHighlight>
          <strong className="font-semibold text-ink">Base normativa:</strong>{' '}
          Esta política se fundamenta en la Ley 1581 de 2012 (Protección de
          Datos Personales), la Ley 1266 de 2008 (Hábeas Data), el Decreto
          1377 de 2013 y la Resolución Conjunta 866 de 2021 sobre
          interoperabilidad de la historia clínica electrónica, así como en
          los principios del Tratado de Helsinki en materia de protección de
          la información de los participantes.
        </LegalHighlight>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={1} />
              <LegalSectionTitle>Responsable del tratamiento</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                El responsable del tratamiento de los datos personales recopilados
                a través de la plataforma Docqee es el equipo de desarrollo del
                proyecto, en el marco de su condición académica como trabajo de
                grado universitario, bajo los lineamientos institucionales de la
                universidad vinculada al proyecto.
              </p>
              <p>
                Para ejercer sus derechos como titular de datos o formular
                cualquier consulta o reclamación relacionada con el tratamiento
                de su información, puede comunicarse a través de los canales
                habilitados en la plataforma.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={2} />
              <LegalSectionTitle>Datos personales que recopilamos</LegalSectionTitle>
            </div>
            <div className="space-y-4 pl-9">
              <p>
                Con el propósito de prestar los servicios de vinculación y
                coordinación de citas, Docqee recopila los siguientes datos
                personales:
              </p>
              <div className="space-y-3 rounded-xl border border-slate-100 bg-surface-low/40 p-4">
                <div>
                  <SubLabel>Datos de identificación</SubLabel>
                  <p>
                    Nombre completo, tipo y número de documento de identidad,
                    fecha de nacimiento, sexo y datos del tutor legal en caso de
                    usuarios menores de edad.
                  </p>
                </div>
                <div>
                  <SubLabel>Datos de contacto</SubLabel>
                  <p>
                    Correo electrónico, número de teléfono, ciudad y localidad de
                    residencia.
                  </p>
                </div>
                <div>
                  <SubLabel>Datos de uso de la plataforma</SubLabel>
                  <p>
                    Historial de solicitudes y citas, conversaciones con
                    estudiantes, registros de acceso y actividad dentro de la
                    plataforma.
                  </p>
                </div>
                <div>
                  <SubLabel>Datos sensibles</SubLabel>
                  <p>
                    En la medida en que se registre información relacionada con el
                    estado de salud del paciente en el contexto de la atención
                    clínica, dicha información se considera dato sensible y
                    recibirá protección reforzada conforme al artículo 6 de la Ley
                    1581 de 2012 y la Ley 23 de 1981.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={3} />
              <LegalSectionTitle>Finalidades del tratamiento</LegalSectionTitle>
            </div>
            <div className="pl-9">
              <BulletList
                items={[
                  'Gestionar el registro, autenticación y administración de la cuenta del usuario.',
                  'Facilitar la conexión y comunicación entre pacientes y estudiantes de odontología.',
                  'Coordinar y dar seguimiento a las solicitudes y citas agendadas a través de la plataforma.',
                  'Permitir a los docentes supervisores el seguimiento académico de las prácticas clínicas de los estudiantes.',
                  'Enviar notificaciones relevantes sobre el estado de las citas y actualizaciones del servicio.',
                  'Cumplir con obligaciones legales, normativas e institucionales aplicables.',
                  'Mejorar la funcionalidad y experiencia de la plataforma mediante análisis estadístico agregado y anonimizado.',
                ]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={4} />
              <LegalSectionTitle>Base legal del tratamiento</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                El tratamiento de sus datos personales se sustenta en las
                siguientes bases legales, conforme a la Ley 1581 de 2012 y el
                Decreto 1377 de 2013:
              </p>
              <BulletList
                items={[
                  '<strong class="font-semibold text-ink">Consentimiento expreso:</strong> otorgado por el usuario al momento de registrarse en la plataforma y aceptar la presente política.',
                  '<strong class="font-semibold text-ink">Ejecución de una relación contractual:</strong> necesario para prestar los servicios de vinculación y coordinación solicitados por el usuario.',
                  '<strong class="font-semibold text-ink">Cumplimiento de obligaciones legales:</strong> derivadas de la normativa colombiana sobre protección de datos, ética médica e historia clínica electrónica.',
                ]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={5} />
              <LegalSectionTitle>Derechos del titular de los datos</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Conforme a la Ley 1581 de 2012 y la Ley 1266 de 2008 (Hábeas
                Data), usted tiene los siguientes derechos sobre sus datos
                personales:
              </p>
              <BulletList
                items={[
                  '<strong class="font-semibold text-ink">Acceso:</strong> conocer los datos personales que Docqee posee sobre usted.',
                  '<strong class="font-semibold text-ink">Actualización y rectificación:</strong> solicitar la corrección de información inexacta o desactualizada.',
                  '<strong class="font-semibold text-ink">Supresión:</strong> solicitar la eliminación de sus datos cuando no exista una obligación legal o contractual que justifique su conservación.',
                  '<strong class="font-semibold text-ink">Revocatoria del consentimiento:</strong> retirar en cualquier momento la autorización otorgada para el tratamiento de sus datos, sin efectos retroactivos.',
                  '<strong class="font-semibold text-ink">Oposición:</strong> oponerse al tratamiento de sus datos para finalidades específicas, salvo que exista un fundamento legal que lo impida.',
                  '<strong class="font-semibold text-ink">Queja:</strong> presentar reclamaciones ante la Superintendencia de Industria y Comercio (SIC) si considera que sus derechos han sido vulnerados.',
                ]}
              />
              <p>
                Para ejercer cualquiera de estos derechos, el titular deberá
                comunicarse a través de los canales disponibles en la plataforma.
                La solicitud será atendida dentro de los plazos establecidos por
                la normativa vigente.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={6} />
              <LegalSectionTitle>Compartición de datos con terceros</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee no comercializa ni cede los datos personales de sus usuarios
                a terceros con fines comerciales. La información podrá ser
                compartida únicamente en los siguientes supuestos:
              </p>
              <BulletList
                items={[
                  'Con las instituciones universitarias vinculadas, en el marco del seguimiento académico de las prácticas clínicas, y exclusivamente con los docentes supervisores autorizados.',
                  'Con proveedores tecnológicos que presten servicios de infraestructura o soporte a la plataforma, bajo acuerdos de confidencialidad y tratamiento responsable de datos.',
                  'Por requerimiento expreso de autoridad judicial o administrativa competente, conforme a la legislación colombiana.',
                ]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={7} />
              <LegalSectionTitle>Medidas de seguridad</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee implementa medidas técnicas y organizativas razonables
                orientadas a proteger los datos personales contra el acceso no
                autorizado, la pérdida, la alteración o la divulgación indebida.
                Estas medidas incluyen el cifrado de contraseñas, el control de
                acceso por roles, la autenticación mediante verificación de correo
                electrónico y la trazabilidad de operaciones sensibles.
              </p>
              <p>
                En caso de que se detecte una vulneración de seguridad que afecte
                los datos personales de los usuarios, Docqee notificará a los
                afectados y a las autoridades competentes conforme a los
                procedimientos establecidos por la normativa vigente.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={8} />
              <LegalSectionTitle>Retención de datos</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Los datos personales serán conservados durante el tiempo que el
                usuario mantenga una cuenta activa en la plataforma y, con
                posterioridad, por el período mínimo exigido por la normativa
                colombiana aplicable o el que resulte necesario para atender
                reclamaciones o cumplir con obligaciones legales.
              </p>
              <p>
                Una vez cumplido el período de retención, los datos serán
                eliminados o anonimizados de forma segura, de manera que no sea
                posible asociarlos a un titular identificable.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={9} />
              <LegalSectionTitle>Cookies y tecnologías de rastreo</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                Docqee puede utilizar cookies técnicas y de sesión estrictamente
                necesarias para el funcionamiento de la plataforma, tales como la
                gestión de la autenticación y la preservación de preferencias del
                usuario. No se utilizan cookies de rastreo con fines publicitarios.
              </p>
              <p>
                El usuario puede configurar su navegador para rechazar o eliminar
                cookies; sin embargo, esto puede afectar el correcto funcionamiento
                de algunas funciones de la plataforma.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={10} />
              <LegalSectionTitle>Actualizaciones a esta política</LegalSectionTitle>
            </div>
            <div className="space-y-3 pl-9">
              <p>
                La presente Política de Privacidad podrá ser actualizada para
                reflejar cambios normativos, funcionales o de seguridad. Las
                modificaciones serán notificadas a los usuarios con antelación
                razonable a través de la plataforma. El uso continuado del
                servicio tras la publicación de los cambios constituirá la
                aceptación de la política actualizada.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <NumberBadge n={11} />
              <LegalSectionTitle>Contacto para ejercicio de derechos</LegalSectionTitle>
            </div>
            <div className="pl-9">
              <p>
                Para consultas, solicitudes de acceso, rectificación, supresión,
                revocatoria del consentimiento o cualquier reclamación relacionada
                con el tratamiento de sus datos personales, puede comunicarse con
                el equipo de Docqee a través de los canales habilitados en la
                plataforma. Su solicitud será atendida de conformidad con los
                plazos y procedimientos establecidos en la Ley 1581 de 2012 y el
                Decreto 1377 de 2013.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/70 bg-surface-low/50 px-5 py-4 text-xs leading-6 text-ink-muted">
          Al registrarse en Docqee y aceptar esta política, usted autoriza
          expresamente el tratamiento de sus datos personales para las
          finalidades aquí descritas, conforme a la Ley 1581 de 2012 y demás
          normativa aplicable en Colombia.
        </div>
      </div>
    </LegalPageShell>
  );
}
