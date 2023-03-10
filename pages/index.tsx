import { Box, Text } from '@chakra-ui/react';
import PannableCards from '@components/PannableCards';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Box maxW="90vw" m="auto" mt="20px" userSelect="none">
        <Text>Latest Activity:</Text>
      </Box>
      <Box mt="-50px">
        <PannableCards />
      </Box>
    </>
  );
};

export default Home;
