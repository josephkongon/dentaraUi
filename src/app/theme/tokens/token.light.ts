import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const defaultToken = theme.defaultAlgorithm(theme.defaultSeed);

const themeColors: ThemeConfig['token'] = {
  colorBgContainer: '#ffffff',
  colorPrimary: defaultToken.colorPrimary,
  colorError: defaultToken.colorError,
  colorText: defaultToken.colorText,
};
const themeScreenSize: ThemeConfig['token'] = {};

const themeFont: ThemeConfig['token'] = {};
const themeBox: ThemeConfig['token'] = {};
export const lightToken: ThemeConfig['token'] = {
  ...themeColors,
  ...themeScreenSize,
  ...themeFont,
  ...themeBox,
};
