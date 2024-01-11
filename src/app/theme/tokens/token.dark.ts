import { ThemeConfig } from 'antd/es/config-provider/context';

const themeColors: ThemeConfig['token'] = {
  // colorBgContainer: '',
  // colorBgBase: '',
  // colorBorder: '',
  // colorPrimary: '',
  // colorError: '',
};
const themeScreenSize: ThemeConfig['token'] = {};

const themeFont: ThemeConfig['token'] = {};
const themeBox: ThemeConfig['token'] = {};
export const darkToken: ThemeConfig['token'] = {
  ...themeColors,
  ...themeScreenSize,
  ...themeFont,
  ...themeBox,
};
