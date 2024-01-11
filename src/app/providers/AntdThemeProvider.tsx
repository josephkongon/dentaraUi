import { ConfigProvider, theme } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { useAppSelector } from '~/app/hooks/useAppSelector';
import { useMediaQuery } from '~/app/hooks/useMediaQuery';

import { darkToken } from '../theme/tokens/token.dark.ts';
import { defaultToken } from '../theme/tokens/token.default.ts';
import { lightToken } from '../theme/tokens/token.light.ts';

const AntdThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme: appTheme } = useAppSelector((state) => state.ui);
  const isLightMode = appTheme === 'Light';
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <ConfigProvider
      theme={{
        algorithm: isLightMode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          ...defaultToken,
          ...(isLightMode ? lightToken : darkToken),
          ...(isMobile && { borderRadius: 0 }),
        },
      }}>
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
