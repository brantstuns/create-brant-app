import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Party from './components/Party';

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Party} />
      </App>
    </BrowserRouter>
  );
}
