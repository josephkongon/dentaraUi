import { useContext } from 'react';

import { BottomSheetContext } from '~/app/providers/BottomSheetProvider';

export function useBottomSheet() {
  return useContext(BottomSheetContext);
}
