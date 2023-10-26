import React from 'react';
import App from './components/App';
import ReactDOM  from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* resetCSS={false} = デフォルトのCSSリセット */}
      <ChakraProvider theme={theme} resetCSS={false}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
);