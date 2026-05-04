import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Application entry point.
 * StrictMode enables additional runtime warnings during development.
 */
const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('[FATAL] Root element #root not found in DOM.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
