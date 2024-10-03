import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes }from './routes'
import GlobalStyles from './styles/global';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <GlobalStyles/>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
