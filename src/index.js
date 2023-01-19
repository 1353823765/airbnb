import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import "normalize.css"
 import "@/assets/css/index.less"
import { Provider } from 'react-redux';
import { store } from './store';
import App from "@/App"
import { thmem } from './assets/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
  <Provider store={store}>
  <ThemeProvider theme={thmem}>
  <HashRouter>
    <App />
    </HashRouter>
  </ThemeProvider>
    </Provider>
   </Suspense>

);


