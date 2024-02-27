import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import KeyCloakService from './security/KeycloakService'

const renderApp = function(){ 
  ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
};

KeyCloakService.CallLogin(renderApp);
