import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redirect unknown paths to home (useful for local dev where unknown routes
// load this SPA but should be sent to the root URL)
(() => {
  const pathname = window.location.pathname || '/';
  const allowedPaths = [
    '/',
    '/index.html',
    '/privacy-policy',
    '/privacy-policy/',
    '/privacy-policy.html',
    '/tnc',
    '/tnc/',
    '/tnc.html',
  ];
  const assetPrefixes = [
    '/static',
    '/assets',
    '/favicon',
    '/logo',
    '/manifest',
    '/home.webm',
    '/home.gif',
    '/robots.txt',
  ];

  const isAllowed =
    allowedPaths.includes(pathname) || assetPrefixes.some((p) => pathname.startsWith(p));

  if (!isAllowed) {
    window.location.replace('/');
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
