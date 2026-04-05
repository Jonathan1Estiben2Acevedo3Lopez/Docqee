import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { AppProviders } from '@/app/providers/AppProviders';
import { router } from '@/app/router/router';
import { RouteLoadingFallback } from '@/components/ui/RouteLoadingFallback';

import '@/styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el contenedor raíz para la aplicación.');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider
        fallbackElement={<RouteLoadingFallback />}
        future={{ v7_startTransition: true }}
        router={router}
      />
    </AppProviders>
  </StrictMode>,
);
