import React, { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import AppProviders from '~/app/providers/AppProviders';
import { getUserTheme } from '~/app/theme/helpers';

import { darkToken } from './app/theme/tokens/token.dark.ts';
import { lightToken } from './app/theme/tokens/token.light.ts';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppProviders>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </AppProviders>
  </StrictMode>,
);

const darkBg = darkToken?.colorBgContainer as string;
const lightBg = lightToken?.colorBgContainer as string;

document.body.style.backgroundColor = getUserTheme() === 'Dark' ? darkBg : lightBg;
