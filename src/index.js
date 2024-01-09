import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
