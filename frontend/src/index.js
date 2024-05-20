import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './hooks/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
    <GlobalProvider>
        <App />
    </GlobalProvider>
    </AuthProvider>
  </React.StrictMode>
);

