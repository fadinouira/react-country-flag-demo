import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const mainApp = document.getElementById('root');

if (!mainApp) {
  throw new Error("The element #root wasn't found");
}
createRoot(mainApp).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
