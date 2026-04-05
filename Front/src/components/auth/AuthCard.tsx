import type { PropsWithChildren } from 'react';

import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { classNames } from '@/lib/classNames';

type AuthCardProps = PropsWithChildren<{
  className?: string;
}>;

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <SurfaceCard
      className={classNames(
        'w-full max-w-[28.5rem] rounded-[1.55rem] px-5 py-5 shadow-float sm:px-6 sm:py-6',
        className,
      )}
    >
      {children}
    </SurfaceCard>
  );
}
