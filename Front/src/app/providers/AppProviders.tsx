import type { PropsWithChildren } from 'react';

type AppProvidersProps = PropsWithChildren;

export function AppProviders({ children }: AppProvidersProps) {
  return <>{children}</>;
}
