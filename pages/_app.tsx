import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider
    theme={extendTheme({
      styles: {
        global: {
          '.viewport::-webkit-scrollbar': {
            display: 'none',
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          },
          '.custom-scrollbar::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
            'border-radius': '10px',
            'background-color': '#F5F5F5',
          },

          '.custom-scrollbar::-webkit-scrollbar': {
            width: '3px',
            'background-color': '#F5F5F5',
          },

          '.custom-scrollbar::-webkit-scrollbar-thumb': {
            'border-radius': '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
            'background-color': '#26D6E8',
          },
        },
      },
    })}
  >
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
