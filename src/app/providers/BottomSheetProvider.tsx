import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { useDisclosure } from '~/app/hooks/useDisclosure';

interface IContextValues {
  isOpen: boolean;
  content: ReactNode;
  title?: string | null;
  size?: 'sm' | 'md' | 'full';
  openSheet: (data: Pick<IContextValues, 'content' | 'title' | 'size'>) => void;
  onClose?: () => void;
}

export const BottomSheetContext = createContext<IContextValues>({
  content: null,
  title: '',
  isOpen: false,
  size: 'md',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openSheet: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
});

const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<IContextValues['size']>('md');
  const [title, setTitle] = useState<IContextValues['title']>('');
  const [content, setContent] = useState<IContextValues['content']>(null);

  const openSheet: IContextValues['openSheet'] = useCallback(
    ({ content, title, size = 'md' }) => {
      setTimeout(() => {
        onOpen();
        setTitle(title);
        setContent(content);
        setSize(size);
      });
    },
    [onOpen],
  );

  const values: IContextValues = useMemo(
    () => ({ isOpen, title, content, size, openSheet, onClose }),
    [isOpen, title, content, size, openSheet, onClose],
  );

  return <BottomSheetContext.Provider value={values}>{children}</BottomSheetContext.Provider>;
};

export default BottomSheetProvider;
