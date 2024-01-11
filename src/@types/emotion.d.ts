import '@emotion/react';

import { GlobalToken } from 'antd/es/theme/interface';

declare module '@emotion/react' {
  export type Theme = GlobalToken;
}
