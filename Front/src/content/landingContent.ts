import heroIllustration from '@/assets/images/Imagen_pagina_960.jpg';
import { ROUTES } from '@/constants/routes';

import type { LandingContent } from './types';

export const landingContent: LandingContent = {
  footer: {
    blurb: '',
    legalNote: '',
    links: [],
  },
  hero: {
    badge: 'Estudiantes supervisados por docentes profesionales',
    description:
      'Docqee conecta pacientes con estudiantes de odontología en formación clínica, brindando un espacio confiable, cercano y organizado para acceder a atención odontológica dentro de un entorno universitario.',
    highlights: [],
    image: {
      alt: 'Sillón odontológico en un entorno clínico luminoso y sereno.',
      height: 1066,
      src: heroIllustration,
      width: 960,
    },
    primaryCta: {
      kind: 'internal',
      label: 'Crear cuenta',
      to: ROUTES.register,
    },
    secondaryCta: {
      kind: 'internal',
      label: 'Cómo funciona',
      to: '#how-it-works',
    },
    titleAccent: 'atención odontológica',
    titleEnd: 'universitaria',
    titleStart: 'Tu puente hacia la',
  },
  meta: {
    description:
      'Docqee conecta pacientes con estudiantes de odontología supervisados por docentes profesionales en un entorno universitario confiable.',
    imagePath: '/og-image.svg',
    title: 'Docqee | Atención odontológica universitaria',
  },
  navigation: {
    items: [
      { href: '#top', label: 'Inicio' },
      { href: '#how-it-works', label: 'Cómo funciona' },
      { href: '#universities', label: 'Universidades aliadas' },
    ],
    login: {
      kind: 'internal',
      label: 'Iniciar sesión',
      to: ROUTES.login,
    },
    register: {
      kind: 'internal',
      label: 'Crear cuenta',
      to: ROUTES.register,
    },
  },
  steps: [
    {
      ctaLabel: 'Empezar',
      description:
        'Accede fácilmente a la plataforma para iniciar tu proceso de registro y vinculación.',
      icon: 'account',
      title: 'Crea tu cuenta o inicia sesión',
    },
    {
      ctaLabel: 'Ver perfiles',
      description:
        'Encuentra una opción adecuada dentro de un entorno académico supervisado por expertos.',
      icon: 'search',
      title: 'Busca y conéctate con un estudiante',
    },
    {
      ctaLabel: 'Agendar cita',
      description:
        'Recibe atención acompañada por docentes profesionales durante cada paso de tu tratamiento.',
      icon: 'clipboard',
      title: 'Recibe atención con acompañamiento',
    },
  ],
  universities: [
    {
      icon: 'landmark',
      label: 'Universidad Andina',
      supportText: 'Facultad con enfoque clínico y trayectoria formativa.',
    },
    {
      icon: 'graduation',
      label: 'Universidad Superior del Oriente',
      supportText: 'Acompañamiento académico con estándar institucional.',
    },
    {
      icon: 'book',
      label: 'Universidad San Ignacio de los Andes',
      supportText: 'Conexión entre práctica, docencia y experiencia del paciente.',
    },
    {
      icon: 'shield',
      label: 'Universidad Nueva Colombia',
      supportText: 'Relación cercana entre formación clínica y seguimiento responsable.',
    },
  ],
};
