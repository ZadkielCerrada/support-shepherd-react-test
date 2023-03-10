import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import PannableSubCards from '@components/PannableSubCards';
import { FC, useEffect } from 'react';

const PannableCards: FC = () => {
  const Pannable = (elViewport) => {
    const start = { x: 0, y: 0 };
    let isPan = false;

    const panStart = (ev) => {
      ev.preventDefault();
      isPan = true;
      start.x = elViewport.scrollLeft + ev.clientX;
      start.y = elViewport.scrollTop + ev.clientY;
    };

    const panMove = (ev) => {
      if (!isPan) return;
      elViewport.scrollTo(start.x - ev.clientX, start.y - ev.clientY);
    };

    const panEnd = (ev) => {
      isPan = false;
    };

    elViewport.addEventListener('mousedown', panStart);
    addEventListener('mousemove', panMove);
    addEventListener('mouseup', panEnd);
  };

  useEffect(() => {
    document.querySelectorAll('.viewport').forEach(Pannable);
  }, []);

  const scrollRight = () => {
    const element = document.getElementById('viewport');
    element!.scrollLeft += 150;
  };

  const scrollLeft = () => {
    const element = document.getElementById('viewport');
    element!.scrollLeft -= 150;
  };

  return (
    <Box maxWidth="90vw" m="auto" pos="relative">
      <Box display="flex" my="10" overflowX="scroll" className="viewport" id="viewport">
        {Array.from({ length: 20 }).map((_, index) => {
          return (
            <Box borderRadius="8px" key={index} p={10} mt="10" mx={2} width="300px" border="1px solid lightgray">
              <Text whiteSpace="nowrap" color="#4AB1BD" fontWeight="bold">
                Company {index + 1}
              </Text>
              <Divider />

              <Flex mt="16px" justifyContent="space-between">
                <Text color="#26D6E8" fontWeight="bold">
                  Deck was added:
                </Text>
                <Text color="gray">3 min ago</Text>
              </Flex>

              <PannableSubCards />
            </Box>
          );
        })}
      </Box>
      <Box pos="absolute" right={0} top="50%" borderRadius="50%" bg="#26D6E8" onClick={scrollRight} cursor="pointer">
        <ChevronRightIcon fontSize="50px" color="white" />
      </Box>
      <Box pos="absolute" left={0} top="50%" borderRadius="50%" bg="#26D6E8" onClick={scrollLeft} cursor="pointer">
        <ChevronLeftIcon fontSize="50px" color="white" />
      </Box>
    </Box>
  );
};

export default PannableCards;
