import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from 'antd';
import { FC, PropsWithChildren, useMemo } from 'react';

import { themeBreakPoints } from '~/app/theme/breakpoints';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = theme.useToken();

  const colors = useMemo(
    () => Object.fromEntries(Object.entries(token).filter(([key]) => key.startsWith('color'))),
    [token],
  );

  // token.colorBorderSecondary

  return (
    <EmotionThemeProvider theme={{ ...token }}>
      <ChakraProvider theme={{ breakpoints: themeBreakPoints, colors }}>{children}</ChakraProvider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
