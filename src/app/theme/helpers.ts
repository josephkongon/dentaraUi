import { LocalStorageService } from '~/app/services/localStorage.service';
import { AppTheme } from '~/lib/interfaces/ui';

export function getUserTheme(): AppTheme {
  return (
    LocalStorageService.get('theme') ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light')
  );
}
