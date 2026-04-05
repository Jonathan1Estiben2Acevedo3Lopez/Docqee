import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import type { CtaTarget } from '@/content/types';
import { classNames } from '@/lib/classNames';

type ButtonLinkProps = {
  children?: ReactNode;
  className?: string;
  cta: CtaTarget;
  variant?: 'ghost' | 'primary' | 'secondary';
};

const variantStyles = {
  ghost:
    'bg-transparent text-secondary-ink hover:bg-surface-low hover:text-primary focus-visible:bg-surface-low',
  primary:
    'bg-brand-gradient text-white shadow-ambient hover:brightness-110 focus-visible:brightness-110',
  secondary:
    'bg-surface-card text-primary shadow-ambient hover:bg-surface-low focus-visible:bg-surface-low',
} as const;

export function ButtonLink({
  children,
  className,
  cta,
  variant = 'primary',
}: ButtonLinkProps) {
  const sharedClassName = classNames(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15',
    variantStyles[variant],
    className,
  );

  const label = children ?? cta.label;

  if (cta.kind === 'internal' && cta.to.startsWith('/')) {
    return (
      <Link className={sharedClassName} to={cta.to}>
        {label}
      </Link>
    );
  }

  if (cta.kind === 'internal') {
    return (
      <a className={sharedClassName} href={cta.to}>
        {label}
      </a>
    );
  }

  return (
    <a
      className={sharedClassName}
      href={cta.href}
      rel={cta.newTab ? 'noreferrer noopener' : undefined}
      target={cta.newTab ? '_blank' : undefined}
    >
      {label}
    </a>
  );
}
