import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { ChakraProvider } from "@chakra-ui/react";
import { StyledEngineProvider } from "@mui/material/styles";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      {/* <ChakraProvider> */}
        <App />
      {/* </ChakraProvider> */}
    </BrowserRouter>
  </StyledEngineProvider>
);
