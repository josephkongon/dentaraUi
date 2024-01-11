import { ILocalConfig } from '~/lib/interfaces/config';

export function getLocalConfig(): ILocalConfig {
  return {
    API_EP: import.meta.env.VITE_APP_API_EP as string,
  };
}
