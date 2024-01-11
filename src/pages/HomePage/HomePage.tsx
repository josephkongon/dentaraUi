import { Box } from '@chakra-ui/layout';

import RootNavigation from '~/navigation/RootNavigation.tsx';

const HomePage = () => {
  return (
    <Box flex={1} display={'flex'}>
      <RootNavigation />
    </Box>
  );
};
export default HomePage;
