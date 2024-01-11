import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageService } from '~/app/services';
import { getUserTheme } from '~/app/theme/helpers.ts';
import { AppTheme } from '~/lib/interfaces/ui';

const theme = getUserTheme();
updateBodyTheme(theme);

const slice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'Light' as AppTheme,
  },
  reducers: {
    toggleTheme: (ui) => {
      ui.theme = ui.theme === 'Light' ? 'Dark' : 'Light';

      LocalStorageService.set('theme', ui.theme);
      updateBodyTheme(ui.theme);
    },
  },
});

export const uiActions = slice.actions;

export default slice.reducer;

function updateBodyTheme(theme: AppTheme) {
  document.body.classList.remove('Light', 'Dark');
  document.body.classList.add(theme);
}
