import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

const PannableSubCards: FC = () => {
  const Pannable = (elViewport) => {
    const start = { x: 0, y: 0 };
    let isPan = false;

    const panStart = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
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
    document.querySelectorAll('.viewport-subcards').forEach(Pannable);
  }, []);

  const scrollRight = () => {
    const element = document.getElementById('viewport-subcards');
    element!.scrollLeft += 150;
  };

  const scrollLeft = () => {
    const element = document.getElementById('viewport-subcards');
    element!.scrollLeft -= 150;
  };

  return (
    <Box maxWidth="90vw" m="auto" pos="relative">
      <Box
        display="flex"
        my="10"
        overflowX="scroll"
        className="viewport-subcards custom-scrollbar"
        id="viewport-subcards"
      >
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <Box key={index} p={10} mt="10" mx={2} border="1px solid lightgray" borderRadius="8px">
              <Text whiteSpace="nowrap">Subcard {index + 1}</Text>
            </Box>
          );
        })}
      </Box>
      <Box pos="absolute" right={0} top="50%" borderRadius="50%" bg="#26D6E8" onClick={scrollRight} cursor="pointer">
        <ChevronRightIcon fontSize="20px" color="white" />
      </Box>
      <Box pos="absolute" left={0} top="50%" borderRadius="50%" bg="#26D6E8" onClick={scrollLeft} cursor="pointer">
        <ChevronLeftIcon fontSize="20px" color="white" />
      </Box>
    </Box>
  );
};

export default PannableSubCards;
