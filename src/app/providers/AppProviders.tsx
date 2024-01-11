import { Global } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';

import BottomSheetProvider from '~/app/providers/BottomSheetProvider';
import store from '~/app/store';
import i18n from '~/app/utils/i18n';

import { antdStyleOverrides } from '../theme/styles/antd.overrides.ts';
import { globalStyles } from '../theme/styles/global.ts';
import AntdThemeProvider from './AntdThemeProvider';
import ThemeProvider from './ThemeProvider';

const queryClient = new QueryClient();

const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <AntdThemeProvider>
              <ThemeProvider>
                <BottomSheetProvider>
                  {children}
                  <Global styles={antdStyleOverrides} />
                  <Global styles={globalStyles} />
                </BottomSheetProvider>
              </ThemeProvider>
            </AntdThemeProvider>
          </HelmetProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default AppProviders;
